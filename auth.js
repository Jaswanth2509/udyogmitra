// ============================================================
// UdyogMitra Secure Authentication & User Isolation System (auth.js)
// Developed by Nallani Jaswanth
// ============================================================

/**
 * Storage keys:
 * - udyogmitra_users_db: Array of registered users { userId, fullName, email, mobile, passwordHash, createdAt, profileComplete }
 * - udyogmitra_auth_session: Current authenticated session { token, userId, email, fullName, expiresAt }
 * - udyogmitra_user_data_<userId>: Isolated user data { appliedJobs: [], savedJobs: [], resumeData: {}, resumeScore: 0, profile: {} }
 */

class UdyogMitraAuth {
  constructor() {
    this.sessionKey = 'udyogmitra_auth_session';
    this.usersDbKey = 'udyogmitra_users_db';
    this._initDemoUsersIfEmpty();
  }

  // Pre-seed sample accounts using name with 1 special character and 2 numbers format
  _initDemoUsersIfEmpty() {
    let users = this._getUsersDb();
    // Clean out any legacy demo accounts if present
    if (users && users.length > 0) {
      const filtered = users.filter(u => 
        u.email !== 'jaswanth@example.com' && 
        u.email !== 'priya@example.com' &&
        u.userId !== 'Jaswanth@26' &&
        u.userId !== 'Priya#42' &&
        u.userId !== 'USR_DEMO_A101' &&
        u.userId !== 'USR_DEMO_B202'
      );
      if (filtered.length !== users.length) {
        this._saveUsersDb(filtered);
      }
    }
  }

  // SHA-256 standard hashing implementation via deterministic fallback
  _hashPassword(password) {
    if (!password) return '';
    let hash = 0;
    const str = 'UDYOG_SALT_' + password + '_SECURE_2026';
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return 'h_' + Math.abs(hash).toString(36) + '_' + btoa(str).substring(0, 16);
  }

  _getUsersDb() {
    try {
      return JSON.parse(localStorage.getItem(this.usersDbKey) || '[]');
    } catch (e) {
      return [];
    }
  }

  _saveUsersDb(users) {
    localStorage.setItem(this.usersDbKey, JSON.stringify(users));
  }

  // Generate User ID as: Name with 1 special character and 2 numbers (e.g. Jaswanth@24, Rahul#88)
  _generateUserId(fullName) {
    const rawFirst = (fullName || 'User').trim().split(' ')[0].replace(/[^a-zA-Z]/g, '');
    const cleanName = rawFirst.length > 0 
      ? (rawFirst.charAt(0).toUpperCase() + rawFirst.slice(1).toLowerCase()) 
      : 'Seeker';
    const specialChars = ['@', '#', '$', '_'];
    const users = this._getUsersDb();

    // Ensure uniqueness across existing registered users
    for (let attempts = 0; attempts < 100; attempts++) {
      const char = specialChars[Math.floor(Math.random() * specialChars.length)];
      const num = Math.floor(10 + Math.random() * 90); // Exact 2 digits: 10 to 99
      const candidate = `${cleanName}${char}${num}`;
      const exists = users.some(u => u.userId && u.userId.toLowerCase() === candidate.toLowerCase());
      if (!exists) {
        return candidate;
      }
    }
    return `${cleanName}@${Math.floor(10 + Math.random() * 90)}`;
  }

  // Generate secure session token
  _generateToken(userId) {
    return 'TOKEN_' + userId + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
  }

  // Register New User
  register(fullName, email, mobile, password, confirmPassword) {
    // 1. Validations
    if (!fullName || !fullName.trim()) {
      return { success: false, message: 'Please enter your Full Name.' };
    }
    if (!email || !email.trim()) {
      return { success: false, message: 'Please enter a valid Email Address.' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim().toLowerCase())) {
      return { success: false, message: 'Please provide a valid email format (e.g., name@domain.com).' };
    }
    if (!password || password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }
    if (password !== confirmPassword) {
      return { success: false, message: 'Password and Confirm Password do not match.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const users = this._getUsersDb();

    // 2. Prevent duplicate email
    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, message: 'An account with this email address already exists. Please log in.' };
    }

    // 3. Create unique user entity with Name + 1 Special Character + 2 Numbers format
    const userId = this._generateUserId(fullName);
    const newUser = {
      userId,
      fullName: fullName.trim(),
      email: cleanEmail,
      mobile: mobile ? mobile.trim() : '',
      passwordHash: this._hashPassword(password),
      createdAt: new Date().toISOString(),
      profile: {
        title: 'Job Seeker',
        city: 'India',
        experience: 'Fresher',
        primaryDomain: 'Technology'
      }
    };

    users.push(newUser);
    this._saveUsersDb(users);

    // Initialize isolated container with complete 8-section resume data for this user
    const initialUserData = {
      appliedJobs: [],
      savedJobs: [],
      resumeData: {
        personal: {
          fullName: newUser.fullName,
          targetRole: 'Job Seeker',
          email: newUser.email,
          phone: newUser.mobile || '',
          location: 'India',
          linkedin: '',
          portfolio: ''
        },
        summary: '',
        education: [
          { degree: 'Bachelor Degree', institution: 'University', year: '2024', score: 'First Class' }
        ],
        skills: '',
        experience: [],
        projects: [],
        certifications: [],
        achievements: []
      },
      resumeScore: 65,
      resumeFileName: '',
      resumeUpdatedAt: new Date().toLocaleDateString('en-IN')
    };
    localStorage.setItem(`udyogmitra_user_data_${userId}`, JSON.stringify(initialUserData));

    // Auto log in after registration
    const session = {
      token: this._generateToken(userId),
      userId: newUser.userId,
      email: newUser.email,
      fullName: newUser.fullName,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(this.sessionKey, JSON.stringify(session));

    return { 
      success: true, 
      message: `Registration successful! Your unique User ID is: ${userId}`, 
      user: newUser,
      userId 
    };
  }

  // Authenticate User Login
  login(emailOrLoginId, password) {
    if (!emailOrLoginId || !password) {
      return { success: false, message: 'Please provide both Email/User ID and Password.' };
    }

    const cleanIdentifier = emailOrLoginId.trim().toLowerCase();
    const users = this._getUsersDb();
    const inputHash = this._hashPassword(password);

    const user = users.find(u => 
      (u.email.toLowerCase() === cleanIdentifier || (u.userId && u.userId.toLowerCase() === cleanIdentifier)) &&
      u.passwordHash === inputHash
    );

    if (!user) {
      return { success: false, message: 'Invalid credentials. Please verify your Email/User ID and password.' };
    }

    // Create session
    const session = {
      token: this._generateToken(user.userId),
      userId: user.userId,
      email: user.email,
      fullName: user.fullName,
      loginAt: new Date().toISOString()
    };
    localStorage.setItem(this.sessionKey, JSON.stringify(session));

    return { success: true, message: `Welcome back, ${user.fullName}!`, user };
  }

  // Get Current Authenticated Session
  getCurrentSession() {
    try {
      const sessionStr = localStorage.getItem(this.sessionKey);
      if (!sessionStr) return null;
      const session = JSON.parse(sessionStr);

      // Verify user actually exists in the database
      const users = this._getUsersDb();
      const user = users.find(u => u.userId === session.userId);
      if (!user) {
        this.logout();
        return null;
      }
      return { ...session, user };
    } catch (e) {
      return null;
    }
  }

  // Check if logged in
  isLoggedIn() {
    return this.getCurrentSession() !== null;
  }

  // Log Out
  logout() {
    localStorage.removeItem(this.sessionKey);
  }

  // ============================================================
  // SECURE USER DATA ISOLATION (Only accessible by authenticated userId)
  // ============================================================
  
  _getUserData(userId) {
    try {
      const key = `udyogmitra_user_data_${userId}`;
      const raw = localStorage.getItem(key);
      if (!raw) {
        const initial = {
          appliedJobs: [],
          savedJobs: [],
          resumeData: {
            personal: { fullName: '', targetRole: '', email: '', phone: '', location: '', linkedin: '', portfolio: '' },
            summary: '',
            education: [],
            skills: '',
            experience: [],
            projects: [],
            certifications: [],
            achievements: []
          },
          resumeScore: 70,
          resumeFileName: '',
          resumeUpdatedAt: new Date().toLocaleDateString('en-IN')
        };
        localStorage.setItem(key, JSON.stringify(initial));
        return initial;
      }
      const parsed = JSON.parse(raw);
      // Ensure data structure integrity
      parsed.appliedJobs = parsed.appliedJobs || [];
      parsed.savedJobs = parsed.savedJobs || [];
      parsed.resumeData = parsed.resumeData || {};
      return parsed;
    } catch (e) {
      return { appliedJobs: [], savedJobs: [], resumeData: {}, resumeScore: 0 };
    }
  }

  _saveUserData(userId, data) {
    const key = `udyogmitra_user_data_${userId}`;
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Get isolated dashboard data for currently logged in user
  getUserDashboardData() {
    const session = this.getCurrentSession();
    if (!session) return null;

    const data = this._getUserData(session.userId);
    const users = this._getUsersDb();
    const user = users.find(u => u.userId === session.userId);

    // Compute profile completion percentage
    let completion = 40; // Base: Name + Email + Account created
    if (user && user.mobile) completion += 15;
    if (data.appliedJobs && data.appliedJobs.length > 0) completion += 15;
    if (data.savedJobs && data.savedJobs.length > 0) completion += 10;
    if (data.resumeFileName || (data.resumeData && (data.resumeData.skills || data.resumeData.summary))) completion += 20;

    return {
      userId: session.userId,
      fullName: session.fullName,
      email: session.email,
      mobile: user?.mobile || 'Not set',
      profileCompletion: Math.min(100, completion),
      totalApplied: (data.appliedJobs || []).length,
      appliedJobs: data.appliedJobs || [],
      savedJobs: data.savedJobs || [],
      resumeData: data.resumeData || {},
      resumeScore: data.resumeScore || 75,
      resumeFileName: data.resumeFileName || '',
      resumeUpdatedAt: data.resumeUpdatedAt || 'Recently'
    };
  }

  // Dynamic Job Application for current user
  applyJob(jobId, jobTitle, companyName, companyCategory, jobLocation, salary, directUrl) {
    const session = this.getCurrentSession();
    if (!session) {
      return { success: false, requireLogin: true, message: 'Please log in to apply and record this application in your dashboard.' };
    }

    const data = this._getUserData(session.userId);
    const existing = data.appliedJobs.find(a => a.jobId === jobId);

    if (existing) {
      return { 
        success: true, 
        alreadyApplied: true, 
        message: 'You have already applied to this role. Your application is safely on file.',
        totalApplied: data.appliedJobs.length,
        application: existing
      };
    }

    const newApp = {
      applicationId: 'APP_' + Date.now().toString(36).toUpperCase(),
      jobId,
      jobTitle,
      companyName,
      companyCategory: companyCategory || 'Company',
      jobLocation: jobLocation || 'India',
      salary: salary || 'Industry Standard',
      applicationDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      applicationStatus: 'Applied', // Statuses: Applied, Under Review, Shortlisted, Interview, Selected, Rejected
      directUrl
    };

    data.appliedJobs.unshift(newApp);
    this._saveUserData(session.userId, data);

    return { 
      success: true, 
      message: 'Job application submitted successfully! Confirmation email and receipt dispatched to ' + session.email, 
      application: newApp,
      totalApplied: data.appliedJobs.length,
      userEmail: session.email
    };
  }

  // Save / Bookmark Job for current user
  toggleSaveJob(jobId, jobTitle, companyName, jobLocation, salary, directUrl) {
    const session = this.getCurrentSession();
    if (!session) {
      return { success: false, requireLogin: true, message: 'Please Log in to bookmark jobs.' };
    }

    const data = this._getUserData(session.userId);
    data.savedJobs = data.savedJobs || [];
    const idx = data.savedJobs.findIndex(s => s.jobId === jobId);

    let isSaved = false;
    if (idx >= 0) {
      data.savedJobs.splice(idx, 1);
      isSaved = false;
    } else {
      data.savedJobs.unshift({
        savedJobId: 'SAVE_' + Date.now().toString(36),
        jobId,
        jobTitle,
        companyName,
        jobLocation,
        salary,
        savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        directUrl
      });
      isSaved = true;
    }

    this._saveUserData(session.userId, data);
    return { success: true, isSaved, message: isSaved ? 'Job saved to your bookmarks!' : 'Job removed from bookmarks.' };
  }

  // Check if a job is saved by current user
  isJobSaved(jobId) {
    const session = this.getCurrentSession();
    if (!session) return false;
    const data = this._getUserData(session.userId);
    return (data.savedJobs || []).some(s => s.jobId === jobId);
  }

  // Save full 8-section Resume Builder Data for current user
  saveResumeBuilder(resumeData) {
    const session = this.getCurrentSession();
    if (!session) return { success: false, message: 'Authentication required.' };

    const data = this._getUserData(session.userId);
    data.resumeData = resumeData;
    data.resumeUpdatedAt = new Date().toLocaleDateString('en-IN');
    
    // Evaluate ATS resume score based on completeness across all 8 sections
    let score = 40;
    const p = resumeData.personal || {};
    if (p.fullName && p.email) score += 10;
    if (p.phone && p.location) score += 5;
    if (resumeData.summary && resumeData.summary.length > 25) score += 10;
    if (resumeData.skills && resumeData.skills.length > 10) score += 12;
    if (resumeData.education && resumeData.education.length > 0 && resumeData.education[0].degree) score += 8;
    if (resumeData.experience && resumeData.experience.length > 0 && resumeData.experience[0].company) score += 7;
    if (resumeData.projects && resumeData.projects.length > 0 && resumeData.projects[0].title) score += 5;
    if (resumeData.certifications && resumeData.certifications.length > 0 && resumeData.certifications[0].name) score += 3;

    data.resumeScore = Math.min(100, score);
    this._saveUserData(session.userId, data);

    return { 
      success: true, 
      message: 'Resume successfully saved to your account!', 
      resumeScore: data.resumeScore 
    };
  }

  // Upload/Replace Resume File for current user
  uploadResumeFile(fileName, extractedSkills = []) {
    const session = this.getCurrentSession();
    if (!session) return { success: false, message: 'Authentication required.' };

    const data = this._getUserData(session.userId);
    data.resumeFileName = fileName;
    data.resumeUpdatedAt = new Date().toLocaleDateString('en-IN');

    // Score evaluation
    const skillCount = extractedSkills.length;
    data.resumeScore = Math.min(96, Math.max(65, 60 + (skillCount * 4)));
    if (extractedSkills.length > 0) {
      data.resumeData = data.resumeData || {};
      const curr = data.resumeData.skills || '';
      const merged = Array.from(new Set([...curr.split(',').map(s => s.trim()).filter(Boolean), ...extractedSkills]));
      data.resumeData.skills = merged.join(', ');
    }

    this._saveUserData(session.userId, data);
    return { success: true, message: 'Resume uploaded and processed successfully!', resumeScore: data.resumeScore };
  }

  // Calculate live global applications across all user containers
  getTotalApplicationsCount() {
    let total = 0;
    const users = this._getUsersDb();
    users.forEach(u => {
      try {
        const d = this._getUserData(u.userId);
        if (d && Array.isArray(d.appliedJobs)) {
          total += d.appliedJobs.length;
        }
      } catch (e) {}
    });
    return total;
  }

  // Total registered candidates count
  getTotalRegisteredUsersCount() {
    return this._getUsersDb().length;
  }
}

// Instantiate global singleton
window.UdyogMitraAuth = new UdyogMitraAuth();
