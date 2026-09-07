// ============================================================
// UdyogMitra — app.js
// Developed by Nallani Jaswanth
// ============================================================

// ------ COMPANY DIRECT CAREER PORTALS & BRAND LOGOS ------
const COMPANY_META = {
  // Product-Based Companies
  "Google": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    portal: "https://careers.google.com/jobs/results/",
    searchUrl: (role) => `https://careers.google.com/jobs/results/?q=${encodeURIComponent(role)}`
  },
  "Microsoft": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    portal: "https://careers.microsoft.com/us/en/search-results",
    searchUrl: (role) => `https://careers.microsoft.com/us/en/search-results?keywords=${encodeURIComponent(role)}`
  },
  "Amazon": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    portal: "https://www.amazon.jobs/en/search",
    searchUrl: (role) => `https://www.amazon.jobs/en/search?base_query=${encodeURIComponent(role)}&loc_query=India`
  },
  "Adobe": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    portal: "https://careers.adobe.com/us/en/search-results",
    searchUrl: (role) => `https://careers.adobe.com/us/en/search-results?keywords=${encodeURIComponent(role)}`
  },
  "Oracle": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    portal: "https://eeho.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/requisitions",
    searchUrl: (role) => `https://eeho.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/requisitions?keyword=${encodeURIComponent(role)}`
  },
  "Cisco": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    portal: "https://jobs.cisco.com/jobs/SearchJobs",
    searchUrl: (role) => `https://jobs.cisco.com/jobs/SearchJobs/?21178=%5B%2216948%22%5D&21180=%5B%22165%22%5D&projectHashtag=${encodeURIComponent(role)}`
  },
  "IBM": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    portal: "https://www.ibm.com/careers/search",
    searchUrl: (role) => `https://www.ibm.com/careers/search?q=${encodeURIComponent(role)}`
  },
  "JPMorgan Chase": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg",
    portal: "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/requisitions",
    searchUrl: (role) => `https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/requisitions?keyword=${encodeURIComponent(role)}`
  },
  "SAP": {
    cat: "Product-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    portal: "https://jobs.sap.com/search/",
    searchUrl: (role) => `https://jobs.sap.com/search/?q=${encodeURIComponent(role)}`
  },

  // Service-Based Companies
  "TCS": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    portal: "https://ibegin.tcs.com/iBegin/jobs/search",
    searchUrl: (role) => `https://ibegin.tcs.com/iBegin/jobs/search#?keywords=${encodeURIComponent(role)}`
  },
  "Infosys": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    portal: "https://career.infosys.com/joblist",
    searchUrl: (role) => `https://career.infosys.com/joblist?keyword=${encodeURIComponent(role)}`
  },
  "Wipro": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo_New.svg",
    portal: "https://careers.wipro.com/careers-home/jobs",
    searchUrl: (role) => `https://careers.wipro.com/careers-home/jobs?keywords=${encodeURIComponent(role)}`
  },
  "Accenture": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    portal: "https://www.accenture.com/in-en/careers/jobsearch",
    searchUrl: (role) => `https://www.accenture.com/in-en/careers/jobsearch?jk=${encodeURIComponent(role)}`
  },
  "Deloitte": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
    portal: "https://jobsindia.deloitte.com/search/",
    searchUrl: (role) => `https://jobsindia.deloitte.com/search/?q=${encodeURIComponent(role)}`
  },
  "Cognizant": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
    portal: "https://careers.cognizant.com/global-en/jobs/",
    searchUrl: (role) => `https://careers.cognizant.com/global-en/jobs/?keyword=${encodeURIComponent(role)}`
  },
  "Capgemini": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
    portal: "https://www.capgemini.com/in-en/careers/job-search/",
    searchUrl: (role) => `https://www.capgemini.com/in-en/careers/job-search/?q=${encodeURIComponent(role)}`
  },
  "HCLTech": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/HCL_Technologies_Logo.svg",
    portal: "https://www.hcltech.com/careers/Careers-in-india",
    searchUrl: (role) => `https://www.hcltech.com/careers/search-jobs?keywords=${encodeURIComponent(role)}`
  },
  "Tech Mahindra": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Tech_Mahindra_New_Logo.svg",
    portal: "https://careers.techmahindra.com/CurrentOpening.aspx",
    searchUrl: (role) => `https://careers.techmahindra.com/CurrentOpening.aspx?q=${encodeURIComponent(role)}`
  },
  "Mphasis": {
    cat: "Service-Based",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Mphasis_Logo.png",
    portal: "https://careers.mphasis.com/home/jobs.html",
    searchUrl: (role) => `https://careers.mphasis.com/home/jobs.html?keywords=${encodeURIComponent(role)}`
  },

  // Startups & Unicorns
  "Swiggy": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
    portal: "https://careers.swiggy.com/#/careers",
    searchUrl: (role) => `https://careers.swiggy.com/#/careers?search=${encodeURIComponent(role)}`
  },
  "Zomato": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    portal: "https://www.zomato.com/careers",
    searchUrl: (role) => `https://www.zomato.com/careers`
  },
  "Flipkart": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg",
    portal: "https://www.flipkartcareers.com/#!/joblist",
    searchUrl: (role) => `https://www.flipkartcareers.com/#!/joblist?keyword=${encodeURIComponent(role)}`
  },
  "PhonePe": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg",
    portal: "https://www.phonepe.com/careers/job-openings/",
    searchUrl: (role) => `https://www.phonepe.com/careers/job-openings/?search=${encodeURIComponent(role)}`
  },
  "Paytm": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg",
    portal: "https://jobs.lever.co/paytm",
    searchUrl: (role) => `https://jobs.lever.co/paytm`
  },
  "CRED": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Cred_logo.png",
    portal: "https://careers.cred.club/",
    searchUrl: (role) => `https://careers.cred.club/`
  },
  "Razorpay": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
    portal: "https://razorpay.com/jobs/",
    searchUrl: (role) => `https://razorpay.com/jobs/`
  },
  "Zepto": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Zepto_logo.png",
    portal: "https://www.zeptonow.com/careers",
    searchUrl: (role) => `https://www.zeptonow.com/careers`
  },
  "Meesho": {
    cat: "Startup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Meesho_Logo.png",
    portal: "https://meesho.io/jobs",
    searchUrl: (role) => `https://meesho.io/jobs?department=${encodeURIComponent(role)}`
  }
};

// ------ DOMAIN CLASSIFIER KEYWORDS ------
const DOMAIN_KEYWORDS = {
  "Java":   ["java", "spring", "spring boot", "microservices", "hibernate", "maven", "j2ee"],
  ".NET":   [".net", "dotnet", "c#", "asp.net", "wpf", "blazor", "entity framework"],
  "Python": ["python", "pandas", "numpy", "scikit", "machine learning", "data scientist", "data analyst",
             "power bi", "tableau", "tensorflow", "pytorch", "nlp", "bi developer", "data engineer"],
  "Web":    ["react", "angular", "vue", "node.js", "nodejs", "frontend", "fullstack", "full stack",
             "mern", "mean", "aws", "azure", "gcp", "devops", "docker", "kubernetes", "cloud", "qa", "testing"],
  "Non-IT": ["hr", "human resource", "finance", "accounts", "operations", "business analyst",
             "sales", "marketing", "customer support", "content writer", "recruiter", "digital marketing"]
};

// Canonical skills for resume extraction
const CANONICAL_SKILLS = [
  "Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas", "NumPy",
  "Scikit-learn", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch",
  "NLP", "DAX", "Data Modeling", "ETL", "AWS", "Spark", "Statistics", "Docker",
  "Java", "Spring Boot", "Hibernate", "Microservices", "Maven",
  ".NET", "C#", "ASP.NET", "WPF", "Blazor",
  "React", "Angular", "Vue", "Node.js", "MongoDB", "TypeScript", "JavaScript",
  "Azure", "GCP", "DevOps", "Kubernetes", "Jenkins", "Selenium", "REST API",
  "HR", "Recruitment", "HRIS", "Payroll", "Tally", "GST", "Digital Marketing", "SEO", "Content Writing"
];

// App State
let jobsData = [];
let filteredJobs = [];
let currentPage = 0;
const PAGE_SIZE = 10;
let activeCategory = "ALL";
let activeDomain = "ALL";
let activeFresherDomain = "ALL";
let resumeExtractedSkills = [];
let selectedResumeExp = "ALL";

// Initialize App
document.addEventListener("DOMContentLoaded", async () => {
  checkAppLock();
  setupRouting();
  await loadJobsData();
  updateAuthUI();
  filterAndRenderJobs();
  renderFresherHub();
  renderCompaniesGrid();
  initCharts();
  setupQrCode();
  updateUserAndApplicationCounters();
  renderApplicationDashboard();
  renderSavedJobs();
  loadResumeBuilderData();
});


// ============================================================
// APP LOCK & GATEWAY ENFORCEMENT
// Portal accessible ONLY when user is authenticated
// ============================================================
function checkAppLock() {
  const isAuth = window.UdyogMitraAuth && window.UdyogMitraAuth.isLoggedIn();
  const gateway = document.getElementById("auth-gateway-screen");
  const mainApp = document.getElementById("main-app-container");

  if (!isAuth) {
    if (gateway) gateway.classList.remove("hidden");
    if (mainApp) mainApp.classList.add("hidden");
  } else {
    if (gateway) gateway.classList.add("hidden");
    if (mainApp) mainApp.classList.remove("hidden");
  }
}

function switchGatewayTab(tab) {
  const loginTab = document.getElementById("gate-tab-login");
  const regTab = document.getElementById("gate-tab-register");
  const loginForm = document.getElementById("gateway-login-form");
  const regForm = document.getElementById("gateway-register-form");
  const alertEl = document.getElementById("gateway-alert");
  if (alertEl) alertEl.classList.add("hidden");

  if (tab === "login") {
    if (loginTab) {
      loginTab.classList.add("text-blue-600", "border-b-2", "border-blue-600", "font-extrabold");
      loginTab.classList.remove("text-slate-400");
    }
    if (regTab) {
      regTab.classList.remove("text-blue-600", "border-b-2", "border-blue-600", "font-extrabold");
      regTab.classList.add("text-slate-400");
    }
    if (loginForm) loginForm.classList.remove("hidden");
    if (regForm) regForm.classList.add("hidden");
  } else {
    if (regTab) {
      regTab.classList.add("text-blue-600", "border-b-2", "border-blue-600", "font-extrabold");
      regTab.classList.remove("text-slate-400");
    }
    if (loginTab) {
      loginTab.classList.remove("text-blue-600", "border-b-2", "border-blue-600", "font-extrabold");
      loginTab.classList.add("text-slate-400");
    }
    if (regForm) regForm.classList.remove("hidden");
    if (loginForm) loginForm.classList.add("hidden");
  }
}

function showGatewayAlert(msg, type = "error") {
  const alertEl = document.getElementById("gateway-alert");
  if (!alertEl) return;
  alertEl.classList.remove("hidden", "bg-rose-50", "text-rose-800", "border-rose-200", "bg-emerald-50", "text-emerald-800", "border-emerald-200");
  
  if (type === "success") {
    alertEl.className = "mb-4 p-3 rounded-xl text-xs font-semibold flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200";
    alertEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i> <span>${msg}</span>`;
  } else {
    alertEl.className = "mb-4 p-3 rounded-xl text-xs font-semibold flex items-center gap-2 bg-rose-50 text-rose-800 border border-rose-200";
    alertEl.innerHTML = `<i class="fa-solid fa-circle-exclamation text-rose-600"></i> <span>${msg}</span>`;
  }
}

function submitGatewayLogin(event) {
  event.preventDefault();
  const idOrEmail = document.getElementById("gate-login-id")?.value.trim();
  const pass = document.getElementById("gate-login-password")?.value;

  if (!window.UdyogMitraAuth) {
    showGatewayAlert("Authentication module initializing...", "error");
    return;
  }

  const res = window.UdyogMitraAuth.login(idOrEmail, pass);
  if (res.success) {
    showGatewayAlert("Sign in successful! Redirecting to Dashboard...", "success");
    setTimeout(() => {
      checkAppLock();
      updateAuthUI();
      updateUserAndApplicationCounters();
      navigateToPage("dashboard");
      renderApplicationDashboard();
    }, 400);
  } else {
    showGatewayAlert(res.message, "error");
  }
}

function submitGatewayRegister(event) {
  event.preventDefault();
  const name = document.getElementById("gate-reg-name")?.value.trim();
  const email = document.getElementById("gate-reg-email")?.value.trim();
  const mobile = document.getElementById("gate-reg-mobile")?.value.trim();
  const pass = document.getElementById("gate-reg-password")?.value;
  const confirm = document.getElementById("gate-reg-confirm")?.value;

  if (!window.UdyogMitraAuth) {
    showGatewayAlert("Authentication module initializing...", "error");
    return;
  }

  const res = window.UdyogMitraAuth.register(name, email, mobile, pass, confirm);
  if (res.success) {
    showGatewayAlert(`Account created! Your assigned User ID is ${res.user.userId}. Redirecting to Dashboard...`, "success");
    setTimeout(() => {
      checkAppLock();
      updateAuthUI();
      updateUserAndApplicationCounters();
      navigateToPage("dashboard");
      renderApplicationDashboard();
    }, 800);
  } else {
    showGatewayAlert(res.message, "error");
  }
}


// ============================================================
// MULTI-PAGE ROUTING SYSTEM
// ============================================================
const VALID_PAGES = ["jobs", "dashboard", "saved", "resume", "builder", "freshers", "companies", "register", "analytics"];

function setupRouting() {
  // Listen to hash change (back/forward in browser)
  window.addEventListener("hashchange", handleHashChange);
  // Initial page from URL hash
  const initialPage = window.location.hash.replace("#", "") || "jobs";
  navigateToPage(initialPage, false);
}

function handleHashChange() {
  const page = window.location.hash.replace("#", "") || "jobs";
  navigateToPage(page, false);
}

function navigateToPage(pageId, updateHash = true) {
  if (!VALID_PAGES.includes(pageId)) pageId = "jobs";

  // Hide all pages, remove active class
  VALID_PAGES.forEach(p => {
    const pageEl = document.getElementById(`page-${p}`);
    if (pageEl) pageEl.classList.remove("active");

    const navBtn = document.getElementById(`nav-btn-${p}`);
    if (navBtn) {
      navBtn.className = "page-nav-btn px-3 py-1.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white flex items-center gap-1.5 text-xs sm:text-sm font-medium transition";
    }
  });

  // Activate chosen page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) targetPage.classList.add("active");

  const activeBtn = document.getElementById(`nav-btn-${pageId}`);
  if (activeBtn) {
    activeBtn.className = "page-nav-btn px-3 py-1.5 rounded-lg bg-blue-600 text-white flex items-center gap-1.5 text-xs sm:text-sm font-semibold shadow transition";
  }

  if (updateHash) {
    window.location.hash = pageId;
  }

  // Scroll to top on page change
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Refresh page-specific components
  if (pageId === "dashboard") renderApplicationDashboard();
  if (pageId === "saved") renderSavedJobs();
  if (pageId === "builder") loadResumeBuilderData();
  if (pageId === "companies") renderCompaniesGrid();
  if (pageId === "freshers") renderFresherHub();
}

// ============================================================
// DATA LOADING
// ============================================================
async function loadJobsData() {
  try {
    const res = await fetch("jobs.json");
    jobsData = await res.json();
    const countEl = document.getElementById("metric-active-jobs");
    if (countEl) countEl.innerText = `${jobsData.length.toLocaleString()} Roles`;
  } catch (err) {
    console.warn("Could not load jobs.json", err);
    jobsData = [];
  }
}

// ============================================================
// USERS AND APPLICATIONS COUNTERS
// ============================================================
function updateUserAndApplicationCounters() {
  const isAuth = window.UdyogMitraAuth;
  const registeredUsersCount = isAuth ? isAuth.getTotalRegisteredUsersCount() : 0;
  const totalApplicationsCount = isAuth ? isAuth.getTotalApplicationsCount() : 0;
  const totalJobsCount = (window.jobsData && window.jobsData.length) ? window.jobsData.length : 1400;

  // Real persistent registered seekers count
  const regEl = document.getElementById("metric-registered-users");
  if (regEl) regEl.innerText = registeredUsersCount.toLocaleString();

  const statUserEl = document.getElementById("stat-registered-users");
  if (statUserEl) statUserEl.innerText = registeredUsersCount.toLocaleString();

  const topbarUserEl = document.getElementById("topbar-users-count");
  if (topbarUserEl) topbarUserEl.innerText = registeredUsersCount.toLocaleString();

  // Real total applications count
  const totalAppEl = document.getElementById("metric-total-applications");
  if (totalAppEl) totalAppEl.innerText = totalApplicationsCount.toLocaleString();

  const topbarAppEl = document.getElementById("topbar-apps-count");
  if (topbarAppEl) topbarAppEl.innerText = totalApplicationsCount.toLocaleString();

  const statTodayEl = document.getElementById("stat-today-apps");
  if (statTodayEl) statTodayEl.innerText = totalApplicationsCount.toLocaleString();

  // Real active jobs count
  const metricJobs = document.getElementById("metric-active-jobs");
  if (metricJobs) metricJobs.innerText = `${totalJobsCount.toLocaleString()} Roles`;

  // Navigation Badge for current user's applied jobs
  const navBadge = document.getElementById("nav-badge-apps");
  if (navBadge) {
    if (isAuth && isAuth.isLoggedIn()) {
      const uData = isAuth.getUserDashboardData();
      const count = (uData && uData.appliedJobs) ? uData.appliedJobs.length : 0;
      if (count > 0) {
        navBadge.innerText = count;
        navBadge.classList.remove("hidden");
      } else {
        navBadge.classList.add("hidden");
      }
    } else {
      navBadge.classList.add("hidden");
    }
  }
}

// ============================================================
// DIRECT APPLY HANDLER & CANDIDATE TRACKING
// ============================================================
function applyDirectlyToJob(jobId, directUrl, jobTitle, company, location, salary) {
  // If not logged in, prompt user to log in
  if (!window.UdyogMitraAuth || !window.UdyogMitraAuth.isLoggedIn()) {
    checkAppLock();
    openAuthModal("login");
    showAuthAlert("Please log in to apply directly and record this application in your dashboard.", "error");
    return;
  }

  const compCat = (COMPANY_META[company] && COMPANY_META[company].cat) ? COMPANY_META[company].cat : "Company";
  const result = window.UdyogMitraAuth.applyJob(jobId, jobTitle, company, compCat, location, salary, directUrl);

  if (result.success) {
    // Show application confirmation modal
    showAppConfirmModal(jobTitle, company, result.application?.applicationId, result.totalApplied, result.userEmail, directUrl);
    
    // Dynamically update user dashboard metrics and live application counters
    updateUserAndApplicationCounters();
    if (document.getElementById("page-dashboard")?.classList.contains("active")) {
      renderApplicationDashboard();
    }

    // Open employer's direct official career portal in a new tab without deviation
    if (directUrl) {
      window.open(directUrl, "_blank", "noopener,noreferrer");
    }
  } else {
    alert(result.message || "Unable to submit application.");
  }
}

function showAppConfirmModal(role, company, appId, totalCount, email, portalUrl) {
  const modal = document.getElementById("application-confirmation-modal");
  if (!modal) return;
  const roleEl = document.getElementById("app-confirm-role");
  const compEl = document.getElementById("app-confirm-company");
  const idEl = document.getElementById("app-confirm-id");
  const userEl = document.getElementById("app-confirm-user");
  const emailEl = document.getElementById("app-confirm-email");
  const countEl = document.getElementById("app-confirm-count");

  const session = window.UdyogMitraAuth ? window.UdyogMitraAuth.getCurrentSession() : null;

  if (roleEl) roleEl.innerText = role;
  if (compEl) compEl.innerText = company;
  if (idEl) idEl.innerText = appId || ("APP_" + Date.now().toString(36).toUpperCase());
  if (userEl) userEl.innerText = session ? session.fullName : "Candidate";
  if (emailEl) emailEl.innerText = email || (session ? session.email : "user@email.com");
  if (countEl) countEl.innerText = totalCount;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeAppConfirmModal() {
  const modal = document.getElementById("application-confirmation-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// ============================================================
// APPLICATION DASHBOARD RENDERING
// ============================================================
function renderApplicationDashboard() {
  const container = document.getElementById("applied-jobs-list");
  if (!container) return;

  const isAuth = window.UdyogMitraAuth && window.UdyogMitraAuth.isLoggedIn();

  // If not logged in, prompt user to login for personalized isolation
  if (!isAuth) {
    container.innerHTML = `
      <div class="text-center py-12 bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-6">
        <div class="w-14 h-14 mx-auto mb-3 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl">
          <i class="fa-solid fa-user-lock"></i>
        </div>
        <h4 class="font-black text-slate-800 text-lg">Personalized Dashboard Access</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
          Please log in to access your private candidate dashboard, real-time application statuses, and saved jobs.
        </p>
        <button onclick="openAuthModal('login')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition">
          Sign In to Your Account
        </button>
      </div>
    `;

    // Reset profile widgets
    const nameEl = document.getElementById("dash-profile-name");
    const emailEl = document.getElementById("dash-profile-email");
    const idEl = document.getElementById("dash-profile-id");
    const percEl = document.getElementById("dash-profile-percentage");
    const barEl = document.getElementById("dash-profile-progress-bar");
    if (nameEl) nameEl.innerText = "Guest Visitor";
    if (emailEl) emailEl.innerText = "Please sign in to view your profile";
    if (idEl) idEl.innerText = "GUEST_SESSION";
    if (percEl) percEl.innerText = "0%";
    if (barEl) barEl.style.width = "0%";
    return;
  }

  // Get isolated data belonging ONLY to currently logged-in user
  const userData = window.UdyogMitraAuth.getUserDashboardData();
  const applied = userData.appliedJobs || [];
  const saved = userData.savedJobs || [];

  // Update Profile Overview
  const nameEl = document.getElementById("dash-profile-name");
  const emailEl = document.getElementById("dash-profile-email");
  const idEl = document.getElementById("dash-profile-id");
  const avatarEl = document.getElementById("dash-user-avatar");
  const percEl = document.getElementById("dash-profile-percentage");
  const barEl = document.getElementById("dash-profile-progress-bar");

  if (nameEl) nameEl.innerText = userData.fullName;
  if (emailEl) emailEl.innerText = userData.email;
  if (idEl) idEl.innerText = userData.userId;
  if (avatarEl) avatarEl.innerText = userData.fullName.charAt(0).toUpperCase();
  if (percEl) percEl.innerText = userData.profileCompletion + "%";
  if (barEl) barEl.style.width = userData.profileCompletion + "%";

  // Update Metrics
  const totalAppliedEl = document.getElementById("stat-user-applied");
  const totalSavedEl = document.getElementById("stat-user-saved");
  const shortlistedEl = document.getElementById("stat-user-shortlisted");
  const interviewsEl = document.getElementById("stat-user-interviews");
  const resumeScoreEl = document.getElementById("stat-user-resumescore");
  const healthEl = document.getElementById("stat-user-health");

  const shortlistedCount = applied.filter(a => a.applicationStatus === "Shortlisted" || a.applicationStatus === "Selected").length;
  const interviewCount = applied.filter(a => a.applicationStatus === "Interview").length;

  if (totalAppliedEl) totalAppliedEl.innerText = applied.length;
  if (totalSavedEl) totalSavedEl.innerText = saved.length;
  if (shortlistedEl) shortlistedEl.innerText = shortlistedCount;
  if (interviewsEl) interviewsEl.innerText = interviewCount;
  if (resumeScoreEl) resumeScoreEl.innerText = userData.resumeScore || 85;
  if (healthEl) healthEl.innerText = userData.profileCompletion >= 80 ? "Excellent" : "Good";

  const fileEl = document.getElementById("dash-active-resume-file");
  const scoreBadge = document.getElementById("dash-resume-score-badge");
  if (fileEl) fileEl.innerText = userData.resumeFileName || (userData.resumeData?.fullName ? `${userData.fullName}_Resume.pdf` : "No resume uploaded");
  if (scoreBadge) scoreBadge.innerText = `Score: ${userData.resumeScore || 85}/100`;

  // Quick saved preview
  renderSavedJobs();

  if (applied.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 bg-slate-50 border border-dashed border-slate-300 rounded-2xl">
        <div class="w-12 h-12 mx-auto mb-2 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <h4 class="font-black text-slate-800 text-base">No Applications Recorded Yet</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-3">
          When you click "Apply on Company" on any job card, it will be automatically recorded here in your personal dashboard.
        </p>
        <button onclick="navigateToPage('jobs')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow">
          Explore Available Jobs
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = applied.map((app, idx) => {
    const meta = COMPANY_META[app.companyName] || {};
    const cardLogo = getCardLogoHtml(app.companyName, meta.logo);
    const inlineLogo = getInlineLogoHtml(app.companyName, meta.logo);

    const statusBadge = app.applicationStatus === "Interview"
      ? `<span class="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-purple-200">Interview Scheduled</span>`
      : app.applicationStatus === "Shortlisted"
      ? `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-200">Shortlisted</span>`
      : app.applicationStatus === "Under Review"
      ? `<span class="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-200">Under Review</span>`
      : `<span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-blue-200">Applied</span>`;

    return `
      <div class="bg-slate-50/70 hover:bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition">
        <div class="flex items-center gap-3.5">
          ${cardLogo}
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-bold text-slate-900 text-base">${app.jobTitle}</h4>
              ${statusBadge}
              <span class="text-[10px] text-slate-400">Date: ${app.applicationDate}</span>
            </div>
            <div class="text-xs text-slate-600 mt-1 flex items-center flex-wrap gap-x-2">
              <span class="inline-flex items-center font-bold text-slate-800">${inlineLogo}${app.companyName}</span>
              <span class="text-slate-300">•</span>
              <span>📍 ${app.jobLocation}</span>
              <span class="text-slate-300">•</span>
              <span class="text-emerald-700 font-bold">💰 ₹${app.salary} LPA</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-center">
          <select onchange="window.UdyogMitraAuth.updateApplicationStatus('${app.applicationId}', this.value); renderApplicationDashboard();"
            class="text-xs border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white font-medium outline-none">
            <option value="Applied" ${app.applicationStatus === "Applied" ? "selected" : ""}>Status: Applied</option>
            <option value="Under Review" ${app.applicationStatus === "Under Review" ? "selected" : ""}>Status: Under Review</option>
            <option value="Shortlisted" ${app.applicationStatus === "Shortlisted" ? "selected" : ""}>Status: Shortlisted</option>
            <option value="Interview" ${app.applicationStatus === "Interview" ? "selected" : ""}>Status: Interview</option>
            <option value="Selected" ${app.applicationStatus === "Selected" ? "selected" : ""}>Status: Selected</option>
            <option value="Rejected" ${app.applicationStatus === "Rejected" ? "selected" : ""}>Status: Rejected</option>
          </select>
          <a href="${app.directUrl}" target="_blank" rel="noopener noreferrer"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition flex items-center gap-1.5">
            Portal ↗
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function clearApplicationsHistory() {
  if (confirm("Are you sure you want to clear your application history?")) {
    localStorage.removeItem("udyogmitra_applied_jobs");
    renderApplicationDashboard();
    updateUserAndApplicationCounters();
  }
}

// ============================================================
// JOB SEARCH & DOMAIN DETECTION
// ============================================================
function detectDomain(job) {
  const text = ((job.job_title || "") + " " + (job.skills || "") + " " + (job.domain || "")).toLowerCase();
  for (const [domain, keywords] of Object.entries(DOMAIN_KEYWORDS)) {
    if (keywords.some(k => text.includes(k))) return domain;
  }
  return "Other";
}

function setCategoryFilter(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll("[data-cat]").forEach(b => {
    b.className = b.className
      .replace("bg-slate-800 text-white border-slate-300", "")
      .replace("cat-pill-active", "").trim();
  });
  if (btn) btn.classList.add("cat-pill-active");
  currentPage = 0;
  filterAndRenderJobs();
}

function setDomainFilter(domain, btn) {
  activeDomain = domain;
  document.querySelectorAll("[data-dom]").forEach(b => b.classList.remove("dom-pill-active"));
  if (btn) btn.classList.add("dom-pill-active");
  currentPage = 0;
  filterAndRenderJobs();
}

function filterAndRenderJobs() {
  const keyword  = (document.getElementById("search-keyword")?.value || "").toLowerCase().trim();
  const location = (document.getElementById("search-location")?.value || "").toLowerCase().trim();
  const expVal   = document.getElementById("search-exp")?.value || "ALL";

  filteredJobs = jobsData.filter(job => {
    // Category filter
    if (activeCategory !== "ALL") {
      const meta = COMPANY_META[job.company];
      const cat = meta ? meta.cat : (job.company_category || "");
      if (!cat.toLowerCase().includes(activeCategory.toLowerCase())) return false;
    }

    // Domain filter
    if (activeDomain !== "ALL") {
      if (detectDomain(job) !== activeDomain) return false;
    }

    // Keyword
    if (keyword) {
      const searchable = `${job.job_title} ${job.company} ${job.skills} ${job.location} ${job.job_description}`.toLowerCase();
      if (!searchable.includes(keyword)) return false;
    }

    // Location
    if (location) {
      if (!(job.location || "").toLowerCase().includes(location)) return false;
    }

    // Experience
    if (expVal !== "ALL") {
      const n = parseInt(expVal);
      const minE = parseInt(job.min_exp_years) || 0;
      const maxE = parseInt(job.max_exp_years) || 0;
      if (n === 0 && minE !== 0 && !(job.experience || "").toLowerCase().includes("fresher")) return false;
      if (n === 1 && minE > 1) return false;
      if (n === 2 && !(minE <= 2 && maxE >= 2)) return false;
      if (n === 3 && !(minE <= 3 && maxE >= 3)) return false;
      if (n === 4 && minE < 3) return false;
    }

    return true;
  });

  currentPage = 0;
  renderJobCards();
}

function renderJobCards() {
  const grid = document.getElementById("jobs-grid");
  const countEl = document.getElementById("jobs-result-count");
  const moreBtn = document.getElementById("load-more-btn");
  if (!grid) return;

  const total = filteredJobs.length;
  const endIdx = (currentPage + 1) * PAGE_SIZE;
  const toShow = filteredJobs.slice(0, endIdx);

  if (countEl) countEl.innerText = `Showing ${toShow.length} of ${total} verified jobs`;
  if (moreBtn) moreBtn.classList.toggle("hidden", endIdx >= total);

  if (total === 0) {
    grid.innerHTML = `
      <div class="text-center py-12 text-slate-500 text-sm bg-slate-50 rounded-2xl border border-slate-200">
        <i class="fa-solid fa-magnifying-glass text-3xl text-slate-400 mb-2"></i>
        <div class="font-bold text-slate-800 text-base">No Matching Jobs Found</div>
        <p class="text-xs text-slate-500 mt-1">Try resetting your filters or adjusting your search keywords.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = toShow.map(job => buildJobCard(job)).join("");
}

function loadMoreJobs() {
  currentPage++;
  renderJobCards();
}

// ============================================================
// JOB CARD BUILDER WITH DIRECT APPLY & FULL DESCRIPTION
// ============================================================
function getDirectApplyUrl(job) {
  const meta = COMPANY_META[job.company];
  if (meta && typeof meta.searchUrl === "function") {
    return meta.searchUrl(job.job_title);
  }
  return meta?.portal || job.apply_url || `https://www.google.com/search?q=${encodeURIComponent(job.company + " " + job.job_title + " careers")}`;
}

function buildJobCard(job) {
  const meta = COMPANY_META[job.company] || {};
  const catLabel = meta.cat || job.company_category || "";
  const directUrl = getDirectApplyUrl(job);
  const dom = detectDomain(job);
  const cardLogo = getCardLogoHtml(job.company, meta.logo);
  const inlineLogo = getInlineLogoHtml(job.company, meta.logo);

  const catBadge = catLabel.includes("Product")
    ? `<span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-blue-200">🏢 Product-Based</span>`
    : catLabel.includes("Service")
    ? `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-200">💼 Service-Based</span>`
    : `<span class="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-200">🚀 Startup / Unicorn</span>`;

  const domColors = {
    "Java":   "bg-orange-100 text-orange-800 border-orange-200",
    ".NET":   "bg-purple-100 text-purple-800 border-purple-200",
    "Python": "bg-blue-100 text-blue-800 border-blue-200",
    "Web":    "bg-teal-100 text-teal-800 border-teal-200",
    "Non-IT": "bg-rose-100 text-rose-800 border-rose-200",
  };
  const domBadge = dom !== "Other"
    ? `<span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${domColors[dom] || "bg-slate-100 text-slate-700 border-slate-200"}">${dom}</span>`
    : "";

  const isUrgent = (job.hiring_status || "").toLowerCase().includes("urgent");
  const hiringBadge = isUrgent
    ? `<span class="bg-red-100 text-red-700 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-red-200">🔥 Urgent Opening</span>`
    : `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Actively Hiring</span>`;

  const skillsList = (job.skills || "").split(",").map(s => s.trim()).filter(Boolean);
  const descriptionText = job.job_description || `Verified hiring opening at ${job.company} for the position of ${job.job_title}. Candidates must possess expertise in ${job.skills}. Location: ${job.location}.`;
  const safeJobId = job.job_id || ("JOB_" + Math.random().toString(36).substring(2, 8));

  // Check if saved
  const isSaved = window.UdyogMitraAuth && window.UdyogMitraAuth.isJobSaved(safeJobId);
  const bookmarkBtnClass = isSaved 
    ? "bg-amber-100 text-amber-800 border border-amber-300" 
    : "bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200";

  return `
    <div class="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm job-card-hover transition space-y-4">
      
      <!-- Top Row: Logo, Title, Meta, Bookmark + Apply CTA -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5">
        <div class="flex items-start sm:items-center gap-3.5">
          ${cardLogo}
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <h3 class="font-black text-slate-900 text-base sm:text-lg hover:text-blue-600 transition cursor-pointer"
                onclick="applyDirectlyToJob('${safeJobId}', '${directUrl}', '${job.job_title}', '${job.company}', '${job.location}', '${job.avg_salary_lpa}')">
                ${job.job_title}
              </h3>
              ${hiringBadge}
              <span class="bg-blue-50 text-blue-800 border border-blue-200 font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                Exp: ${job.experience || (parseInt(job.min_exp_years) === 0 ? "Fresher (0 Yrs)" : job.min_exp_years + "+ Yrs")}
              </span>
            </div>
            <div class="text-xs text-slate-600 flex items-center flex-wrap gap-x-2 gap-y-1">
              <span class="inline-flex items-center font-extrabold text-slate-900">${inlineLogo}${job.company}</span>
              <span class="text-slate-300">•</span>
              <span>📍 ${job.location || "India"}</span>
              <span class="text-slate-300">•</span>
              <span class="text-emerald-700 font-extrabold text-sm">💰 ₹${job.avg_salary_lpa} LPA</span>
              <span class="text-slate-300">•</span>
              <span class="text-slate-400 text-[11px]">${job.posted_date || "Recently posted"}</span>
            </div>
          </div>
        </div>

        <!-- ACTIONS: SAVE & APPLY DIRECTLY -->
        <div class="flex items-center gap-2 shrink-0 self-start sm:self-center">
          <button onclick="toggleJobBookmark('${safeJobId}', '${job.job_title}', '${job.company}', '${job.location}', '${job.avg_salary_lpa}', '${directUrl}')"
            title="${isSaved ? 'Remove from Saved' : 'Save this job'}"
            class="px-3 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${bookmarkBtnClass}">
            <i class="fa-solid fa-bookmark ${isSaved ? 'text-amber-600' : ''}"></i>
            <span class="hidden sm:inline">${isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button onclick="applyDirectlyToJob('${safeJobId}', '${directUrl}', '${job.job_title}', '${job.company}', '${job.location}', '${job.avg_salary_lpa}')"
            class="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition flex items-center gap-2">
            <span>Apply on ${job.company}</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
          </button>
        </div>
      </div>

      <!-- MIDDLE ROW: COMPLETE JOB DESCRIPTION -->
      <div class="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-xs text-slate-700 leading-relaxed">
        <span class="font-bold text-slate-900 block mb-1">
          <i class="fa-solid fa-align-left text-blue-600 mr-1.5"></i> Job Description &amp; Role Overview:
        </span>
        <p class="text-slate-600">${descriptionText}</p>
      </div>

      <!-- BOTTOM ROW: REQUIRED SKILLS & COMPANY CATEGORY -->
      <div class="pt-1 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
        <div class="flex items-center flex-wrap gap-1.5">
          <span class="text-xs font-bold text-slate-700 mr-1"><i class="fa-solid fa-code text-indigo-600 mr-1"></i>Required Skills:</span>
          ${skillsList.map(s => `<span class="text-[11px] font-semibold bg-slate-100 hover:bg-blue-50 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200/70 transition">${s}</span>`).join("")}
        </div>
        <div class="flex items-center gap-1.5">
          ${catBadge}
          ${domBadge}
        </div>
      </div>

    </div>
  `;
}

function getCardLogoHtml(company, logoUrl) {
  if (logoUrl) {
    return `
      <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-xs shrink-0">
        <img src="${logoUrl}" alt="${company}" class="max-w-full max-h-full object-contain"
          onerror="this.parentElement.innerHTML='<span class=\\'text-blue-700 font-black text-sm\\'>${company.substring(0,2).toUpperCase()}</span>'" />
      </div>
    `;
  }
  return `
    <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 font-black flex items-center justify-center text-sm shadow-xs shrink-0">
      ${company.substring(0, 2).toUpperCase()}
    </div>
  `;
}

function getInlineLogoHtml(company, logoUrl) {
  if (logoUrl) {
    return `<img src="${logoUrl}" alt="${company}" class="company-logo-inline" onerror="this.style.display='none'" />`;
  }
  return `<span class="w-5 h-5 inline-flex items-center justify-center text-[10px] font-black bg-blue-100 text-blue-800 rounded align-middle mr-1.5">${company.substring(0,2).toUpperCase()}</span>`;
}

// ============================================================
// FRESHER HUB RENDERING
// ============================================================
function renderFresherHub() {
  const grid = document.getElementById("fresher-jobs-grid");
  if (!grid) return;

  let fresherJobs = jobsData.filter(j =>
    parseInt(j.min_exp_years) === 0 ||
    (j.experience || "").toLowerCase().includes("fresher") ||
    (j.job_title || "").toLowerCase().includes("junior") ||
    (j.job_title || "").toLowerCase().includes("trainee")
  );

  if (activeFresherDomain !== "ALL") {
    fresherJobs = fresherJobs.filter(j => detectDomain(j) === activeFresherDomain);
  }

  fresherJobs = fresherJobs.slice(0, 15);

  if (fresherJobs.length === 0) {
    grid.innerHTML = `<div class="text-center py-10 text-slate-500 text-sm">No fresher jobs found for this domain.</div>`;
    return;
  }

  grid.innerHTML = fresherJobs.map(job => buildJobCard(job)).join("");
}

function setFresherDomain(domain, btn) {
  activeFresherDomain = domain;
  document.querySelectorAll("#page-freshers .cat-pill").forEach(b => b.classList.remove("cat-pill-active"));
  if (btn) btn.classList.add("cat-pill-active");
  renderFresherHub();
}

// ============================================================
// COMPANIES GRID RENDERING
// ============================================================
function renderCompaniesGrid() {
  const counts = {};
  jobsData.forEach(j => { counts[j.company] = (counts[j.company] || 0) + 1; });

  const grids = {
    "Product-Based": document.getElementById("product-companies-grid"),
    "Service-Based": document.getElementById("service-companies-grid"),
    "Startup":       document.getElementById("startup-companies-grid"),
  };

  Object.entries(grids).forEach(([cat, gridEl]) => {
    if (!gridEl) return;
    const companies = Object.entries(COMPANY_META)
      .filter(([_, m]) => m.cat === cat)
      .sort((a, b) => (counts[b[0]] || 0) - (counts[a[0]] || 0));

    gridEl.innerHTML = companies.map(([name, meta]) => {
      const count = counts[name] || 0;
      const cardLogo = getCardLogoHtml(name, meta.logo);
      const inlineLogo = getInlineLogoHtml(name, meta.logo);

      const catBadgeClass = cat === "Product-Based"
        ? "bg-blue-100 text-blue-800 border-blue-200"
        : cat === "Service-Based"
        ? "bg-emerald-100 text-emerald-800 border-emerald-200"
        : "bg-amber-100 text-amber-800 border-amber-200";

      return `
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-3 hover:border-blue-300 transition">
          <div class="flex items-center gap-3">
            ${cardLogo}
            <div>
              <h4 class="font-bold text-slate-900 text-sm flex items-center">${inlineLogo}${name}</h4>
              <span class="text-xs text-blue-600 font-bold">${count} Active Jobs</span><br/>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${catBadgeClass} mt-0.5 inline-block">${cat}</span>
            </div>
          </div>
          <a href="${meta.portal}" target="_blank" rel="noopener noreferrer"
            class="bg-slate-100 hover:bg-blue-50 text-blue-700 font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-200 hover:border-blue-300 transition shrink-0 whitespace-nowrap">
            Career Portal ↗
          </a>
        </div>
      `;
    }).join("");
  });
}

function filterCompanies(cat, btn) {
  document.querySelectorAll("[data-compcat]").forEach(b => b.classList.remove("cat-pill-active"));
  if (btn) btn.classList.add("cat-pill-active");

  ["product", "service", "startup"].forEach(key => {
    const el = document.getElementById(`comp-section-${key}`);
    if (el) el.style.display = "";
  });

  if (cat === "Product-Based") {
    document.getElementById("comp-section-service").style.display = "none";
    document.getElementById("comp-section-startup").style.display = "none";
  } else if (cat === "Service-Based") {
    document.getElementById("comp-section-product").style.display = "none";
    document.getElementById("comp-section-startup").style.display = "none";
  } else if (cat === "Startup") {
    document.getElementById("comp-section-product").style.display = "none";
    document.getElementById("comp-section-service").style.display = "none";
  }
}

// ============================================================
// AI RESUME ANALYZER (PDF.js parsing)
// ============================================================
function setResumeExperience(val, btn) {
  selectedResumeExp = val;
  document.querySelectorAll(".resume-exp-btn").forEach(b => {
    b.className = "resume-exp-btn px-4 py-2.5 rounded-xl text-xs font-bold border bg-white text-slate-700 border-slate-300 hover:bg-slate-100 transition";
  });
  if (btn) btn.className = "resume-exp-btn px-4 py-2.5 rounded-xl text-xs font-bold border transition exp-btn-active";

  const labels = {
    "ALL": "All Experience Levels",
    "0": "🎓 Fresher (0 Years)",
    "1": "💼 1 Year",
    "2": "💼 2 Years",
    "3": "💼 3 Years",
    "4": "🚀 4+ Years"
  };
  const lbl = document.getElementById("resume-applied-exp-label");
  if (lbl) lbl.innerText = labels[val] || val;

  if (resumeExtractedSkills.length > 0) renderResumeMatches();
}

async function handleResumeUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Increment resumes count counter
  const curr = parseInt(localStorage.getItem("udyogmitra_resumes_count") || "0");
  localStorage.setItem("udyogmitra_resumes_count", (curr + 1).toString());
  updateUserAndApplicationCounters();

  const reader = new FileReader();
  reader.onload = async function () {
    const typed = new Uint8Array(this.result);
    const pdf = await pdfjsLib.getDocument(typed).promise;
    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(x => x.str).join(" ") + " ";
    }
    extractSkillsFromText(text);
  };
  reader.readAsArrayBuffer(file);
}

function extractSkillsFromText(text) {
  const lower = " " + text.toLowerCase() + " ";
  const found = CANONICAL_SKILLS.filter(sk => {
    const re = new RegExp(`[\\s,;()]${sk.toLowerCase().replace(/\./g, "\\.")}[\\s,;()]`, "i");
    return re.test(lower);
  });

  resumeExtractedSkills = found;

  document.getElementById("resume-skill-badges").innerHTML =
    found.map(s => `<span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">✓ ${s}</span>`).join(" ");
  document.getElementById("resume-skill-count").innerText = `${found.length} Skills Found`;
  document.getElementById("resume-extracted-box").classList.remove("hidden");
  renderResumeMatches();
}

function renderResumeMatches() {
  const list = document.getElementById("resume-matched-jobs-list");
  if (!list) return;
  if (resumeExtractedSkills.length === 0) {
    list.innerHTML = `<div class="text-sm text-slate-500">No skills extracted from resume.</div>`;
    return;
  }

  const userSkills = resumeExtractedSkills.map(s => s.toLowerCase());
  let scored = jobsData.map(job => {
    const jSkills = (job.skills || "").split(",").map(s => s.trim());
    const matched = jSkills.filter(s => userSkills.includes(s.toLowerCase()));
    const missing = jSkills.filter(s => !userSkills.includes(s.toLowerCase()));
    const pct = Math.min(100, Math.round((matched.length / Math.max(jSkills.length, 1)) * 100));
    return { ...job, matched, missing, pct };
  });

  if (selectedResumeExp !== "ALL") {
    const n = parseInt(selectedResumeExp);
    if (n === 0) scored = scored.filter(j => parseInt(j.min_exp_years) === 0 || (j.experience||"").toLowerCase().includes("fresher"));
    else if (n === 1) scored = scored.filter(j => parseInt(j.min_exp_years) <= 1);
    else if (n === 2) scored = scored.filter(j => parseInt(j.min_exp_years) <= 2 && parseInt(j.max_exp_years) >= 2);
    else if (n === 3) scored = scored.filter(j => parseInt(j.min_exp_years) <= 3 && parseInt(j.max_exp_years) >= 3);
    else if (n >= 4)  scored = scored.filter(j => parseInt(j.min_exp_years) >= 3);
  }

  scored.sort((a, b) => b.pct - a.pct || b.avg_salary_lpa - a.avg_salary_lpa);
  const top = scored.slice(0, 6);

  list.innerHTML = top.map((job, idx) => {
    const meta = COMPANY_META[job.company] || {};
    const directUrl = getDirectApplyUrl(job);
    const scoreColor = job.pct >= 70 ? "text-emerald-600 bg-emerald-50 border-emerald-200"
                     : job.pct >= 50 ? "text-amber-600 bg-amber-50 border-amber-200"
                     : "text-rose-600 bg-rose-50 border-rose-200";
    const cardLogo   = getCardLogoHtml(job.company, meta.logo);
    const inlineLogo = getInlineLogoHtml(job.company, meta.logo);
    const safeJobId  = job.job_id || ("JOB_" + Math.random().toString(36).substring(2, 8));

    return `
      <div class="bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition space-y-3">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div class="flex items-center gap-3.5">
            ${cardLogo}
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="font-bold text-slate-900 text-base">#${idx + 1}. ${job.job_title}</h4>
                <span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Exp: ${job.experience}</span>
              </div>
              <div class="text-xs text-slate-600 mt-1 flex items-center flex-wrap gap-x-2">
                <span class="inline-flex items-center font-bold text-slate-800">${inlineLogo}${job.company}</span>
                <span class="text-slate-400">•</span>
                <span>📍 ${job.location}</span>
                <span class="text-slate-400">•</span>
                <span class="text-emerald-700 font-bold">💰 ₹${job.avg_salary_lpa} LPA</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 self-start sm:self-center">
            <div class="px-3.5 py-1.5 rounded-xl border font-black text-sm ${scoreColor}">${job.pct}% Match</div>
            <button onclick="applyDirectlyToJob('${safeJobId}', '${directUrl}', '${job.job_title}', '${job.company}', '${job.location}', '${job.avg_salary_lpa}')"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition flex items-center gap-1.5">
              Apply on ${job.company} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </button>
          </div>
        </div>

        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-xs text-slate-600">
          <b class="text-slate-800">Job Description:</b> ${job.job_description || `Role opening at ${job.company}. Requires ${job.skills}.`}
        </div>

        <div class="text-xs border-t border-slate-100 pt-2 flex flex-wrap gap-1">
          <b class="text-slate-700 mr-1">Skills Matched:</b>
          ${job.matched.map(s => `<span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">✓ ${s}</span>`).join("")}
          ${job.missing.slice(0,3).map(s => `<span class="bg-rose-50 text-rose-600 px-2 py-0.5 rounded">✗ ${s}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================
// REGISTRATION & ALERT SYSTEM
// ============================================================
async function handleRegistration(event) {
  event.preventDefault();
  const name   = document.getElementById("reg-name").value.trim();
  const email  = document.getElementById("reg-email").value.trim();
  const exp    = document.getElementById("reg-exp").value;
  const domain = document.getElementById("reg-domain").value;
  const role   = document.getElementById("reg-role").value;
  const skills = document.getElementById("reg-skills").value.trim();
  const freq   = document.getElementById("reg-frequency").value;

  // Save subscriber locally
  const subs = JSON.parse(localStorage.getItem("job_alert_subscribers") || "[]");
  subs.push({ name, email, exp, domain, role, skills, freq, at: new Date().toISOString() });
  localStorage.setItem("job_alert_subscribers", JSON.stringify(subs));
  updateUserAndApplicationCounters();

  // Find top matching jobs
  const userSkills = skills.split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
  let matched = jobsData.filter(j => {
    const jSkills = (j.skills || "").toLowerCase();
    return userSkills.some(s => jSkills.includes(s));
  });
  if (exp.includes("Fresher")) {
    matched = matched.filter(j => parseInt(j.min_exp_years) === 0 || (j.experience || "").toLowerCase().includes("fresher"));
  }
  matched = matched.slice(0, 3);

  const jobsListText = matched.map((j, i) =>
    `${i + 1}. ${j.job_title} at ${j.company} (${j.location}) - Rs.${j.avg_salary_lpa} LPA | Direct: ${getDirectApplyUrl(j)}`
  ).join("\n\n");

  // Send real email via FormSubmit
  const btn = event.target.querySelector("button[type='submit']");
  const orig = btn.innerHTML;
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i>Sending alert to ${email}...`;
  btn.disabled = true;

  try {
    await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `UdyogMitra Alert: New ${role} openings matched for you!`,
        name, email, experience_level: exp, preferred_domain: domain,
        target_role: role, skills, frequency: freq,
        top_matching_jobs: jobsListText,
        message: `Hi ${name},\n\nWelcome to UdyogMitra by Nallani Jaswanth!\n\nYou are now subscribed to ${freq} for ${role} (${exp}) in ${domain}.\n\nTop Matched Jobs:\n\n${jobsListText}\n\nVisit UdyogMitra: https://ai-job-market-analytics.netlify.app\n\nBest Regards,\nNallani Jaswanth`
      })
    });
  } catch (e) { console.log("Email dispatch service:", e); }
  finally { btn.innerHTML = orig; btn.disabled = false; }

  // Display success box
  const box = document.getElementById("registration-success-box");
  const preview = document.getElementById("email-preview-content");
  document.getElementById("preview-email-target").innerText = email;

  preview.innerHTML = `
    <div class="bg-emerald-100/70 border border-emerald-300 p-2.5 rounded-lg mb-2 text-emerald-900 font-bold flex items-center gap-2">
      <i class="fa-solid fa-paper-plane text-emerald-700"></i>
      <span>Email alert successfully dispatched to <b>${email}</b>! Check your inbox.</span>
    </div>
    <p><b>Hi ${name},</b></p>
    <p>Welcome to <b>UdyogMitra by Nallani Jaswanth</b>! Subscribed to <b>${freq}</b> for <b>${role}</b> (${exp}) in <b>${domain}</b>.</p>
    ${matched.length > 0 ? `
    <p class="font-bold text-slate-800 pt-1">🔥 Top Matched Openings Included:</p>
    <ul class="list-disc pl-5 space-y-1.5">
      ${matched.map(j => {
        const url = getDirectApplyUrl(j);
        return `<li><b>${j.job_title}</b> at <b>${j.company}</b> (${j.location}) — <b class="text-emerald-700">₹${j.avg_salary_lpa} LPA</b>
          &nbsp;➔ <a href="${url}" target="_blank" class="text-blue-600 font-bold underline">Apply Directly ↗</a></li>`;
      }).join("")}
    </ul>` : ""}
  `;
  box.classList.remove("hidden");
  box.scrollIntoView({ behavior: "smooth" });
}

// ============================================================
// QR CODE & CHARTS
// ============================================================
function setupQrCode() {
  const url = window.location.href;
  const img = document.getElementById("qr-code-img");
  if (img && url.startsWith("http")) {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}&color=0f172a`;
  }
}

function initCharts() {
  if (!document.getElementById("chartRoles")) return;

  new Chart(document.getElementById("chartRoles"), {
    type: "bar",
    data: {
      labels: ["Java Developer", "Data Analyst", ".NET Developer", "Python Dev", "Full Stack", "DevOps", "HR Exec", "Finance"],
      datasets: [{ label: "Openings", data: [195, 180, 160, 155, 140, 85, 80, 65], backgroundColor: "#2563EB" }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });

  new Chart(document.getElementById("chartSkills"), {
    type: "bar",
    data: {
      labels: ["Java", "SQL", "Python", ".NET/C#", "React", "Spring Boot", "AWS", "Excel"],
      datasets: [{ label: "Frequency", data: [420, 390, 350, 310, 280, 260, 220, 200], backgroundColor: "#8B5CF6" }]
    },
    options: { indexAxis: "y", responsive: true, plugins: { legend: { display: false } } }
  });

  new Chart(document.getElementById("chartLocations"), {
    type: "doughnut",
    data: {
      labels: ["Bangalore", "Hyderabad", "Pune", "Gurgaon", "Mumbai", "Chennai", "Remote"],
      datasets: [{ data: [220, 165, 145, 130, 110, 95, 80],
        backgroundColor: ["#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#64748B","#06B6D4"] }]
    },
    options: { responsive: true }
  });

  new Chart(document.getElementById("chartSalaries"), {
    type: "bar",
    data: {
      labels: ["AI/NLP", "Java Dev", "DevOps", ".NET Dev", "Data Sci", "Python Dev", "Full Stack", "Non-IT"],
      datasets: [{ label: "Avg LPA (₹)", data: [18.5, 16.0, 15.5, 14.2, 14.0, 12.5, 12.0, 6.5], backgroundColor: "#F59E0B" }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });
}


// ============================================================
// AUTHENTICATION & PERSONALIZED DASHBOARD HELPERS
// ============================================================

function updateAuthUI() {
  const session = window.UdyogMitraAuth ? window.UdyogMitraAuth.getCurrentSession() : null;
  const guestView = document.getElementById("nav-guest-view");
  const userView = document.getElementById("nav-user-view");
  const userName = document.getElementById("nav-user-name");
  const userAvatar = document.getElementById("nav-user-avatar");

  if (session && session.user) {
    if (guestView) guestView.classList.add("hidden");
    if (userView) userView.classList.remove("hidden");
    if (userName) userName.innerText = session.user.fullName.split(" ")[0];
    if (userAvatar) userAvatar.innerText = session.user.fullName.charAt(0).toUpperCase();
  } else {
    if (guestView) guestView.classList.remove("hidden");
    if (userView) userView.classList.add("hidden");
  }

  // Update badge for saved jobs
  if (window.UdyogMitraAuth && session) {
    const data = window.UdyogMitraAuth.getUserDashboardData();
    const savedBadge = document.getElementById("nav-badge-saved");
    if (savedBadge && data) {
      if (data.savedJobs && data.savedJobs.length > 0) {
        savedBadge.innerText = data.savedJobs.length;
        savedBadge.classList.remove("hidden");
      } else {
        savedBadge.classList.add("hidden");
      }
    }
  }
}

function openAuthModal(tab = "login") {
  const modal = document.getElementById("auth-modal");
  if (modal) {
    modal.classList.remove("hidden");
    switchAuthTab(tab);
  }
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.add("hidden");
  const alertBox = document.getElementById("auth-alert");
  if (alertBox) alertBox.classList.add("hidden");
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById("modal-tab-login");
  const tabReg = document.getElementById("modal-tab-register");
  const formLogin = document.getElementById("auth-login-form");
  const formReg = document.getElementById("auth-register-form");
  const alertBox = document.getElementById("auth-alert");
  if (alertBox) alertBox.classList.add("hidden");

  if (tab === "login") {
    if (tabLogin) tabLogin.className = "flex-1 py-3 text-center text-sm font-bold text-slate-900 auth-tab-active";
    if (tabReg) tabReg.className = "flex-1 py-3 text-center text-sm font-semibold text-slate-500 hover:text-slate-800";
    if (formLogin) formLogin.classList.remove("hidden");
    if (formReg) formReg.classList.add("hidden");
  } else {
    if (tabReg) tabReg.className = "flex-1 py-3 text-center text-sm font-bold text-slate-900 auth-tab-active";
    if (tabLogin) tabLogin.className = "flex-1 py-3 text-center text-sm font-semibold text-slate-500 hover:text-slate-800";
    if (formLogin) formLogin.classList.add("hidden");
    if (formReg) formReg.classList.remove("hidden");
  }
}

function showAuthAlert(msg, type = "error") {
  const alertBox = document.getElementById("auth-alert");
  if (!alertBox) return;
  alertBox.classList.remove("hidden", "bg-rose-100", "text-rose-800", "border-rose-300", "bg-emerald-100", "text-emerald-800", "border-emerald-300");
  if (type === "error") {
    alertBox.classList.add("bg-rose-100", "text-rose-800", "border", "border-rose-300");
    alertBox.innerHTML = `<i class="fa-solid fa-circle-exclamation text-rose-600 mr-1"></i> <span>${msg}</span>`;
  } else {
    alertBox.classList.add("bg-emerald-100", "text-emerald-800", "border", "border-emerald-300");
    alertBox.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> <span>${msg}</span>`;
  }
}

function submitLoginForm(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-password").value;

  const res = window.UdyogMitraAuth.login(email, pass);
  if (res.success) {
    showAuthAlert(res.message, "success");
    setTimeout(() => {
      closeAuthModal();
      updateAuthUI();
      updateUserAndApplicationCounters();
      renderApplicationDashboard();
      renderSavedJobs();
      loadResumeBuilderData();
      navigateToPage("dashboard");
    }, 600);
  } else {
    showAuthAlert(res.message, "error");
  }
}

function submitRegisterForm(event) {
  event.preventDefault();
  const name = document.getElementById("reg-auth-name").value.trim();
  const email = document.getElementById("reg-auth-email").value.trim();
  const mobile = document.getElementById("reg-auth-mobile").value.trim();
  const pass = document.getElementById("reg-auth-password").value;
  const conf = document.getElementById("reg-auth-confirm").value;

  const res = window.UdyogMitraAuth.register(name, email, mobile, pass, conf);
  if (res.success) {
    showAuthAlert(res.message, "success");
    setTimeout(() => {
      closeAuthModal();
      updateAuthUI();
      updateUserAndApplicationCounters();
      renderApplicationDashboard();
      renderSavedJobs();
      loadResumeBuilderData();
      navigateToPage("dashboard");
    }, 600);
  } else {
    showAuthAlert(res.message, "error");
  }
}

function handleUserLogout() {
  if (confirm("Are you sure you want to log out of UdyogMitra?")) {
    window.UdyogMitraAuth.logout();
    updateAuthUI();
    renderApplicationDashboard();
    renderSavedJobs();
    navigateToPage("jobs");
  }
}

function toggleJobBookmark(jobId, jobTitle, company, location, salary, directUrl) {
  if (!window.UdyogMitraAuth || !window.UdyogMitraAuth.isLoggedIn()) {
    openAuthModal("login");
    showAuthAlert("Please Sign In or Register to bookmark jobs to your personal account.", "error");
    return;
  }

  const res = window.UdyogMitraAuth.toggleSaveJob(jobId, jobTitle, company, location, salary, directUrl);
  updateAuthUI();
  filterAndRenderJobs();
  renderSavedJobs();
}

function renderSavedJobs() {
  const container = document.getElementById("saved-jobs-container");
  const previewBox = document.getElementById("dash-saved-quick-preview");
  const quickCount = document.getElementById("dash-saved-quick-count");
  if (!container) return;

  if (!window.UdyogMitraAuth || !window.UdyogMitraAuth.isLoggedIn()) {
    container.innerHTML = `
      <div class="text-center py-12 bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-6">
        <div class="w-14 h-14 mx-auto mb-3 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center text-2xl">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h4 class="font-black text-slate-800 text-lg">Authentication Required</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
          Please log in to view your private saved and bookmarked jobs list.
        </p>
        <button onclick="openAuthModal('login')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow">
          Sign In to Account
        </button>
      </div>
    `;
    if (previewBox) previewBox.innerHTML = '<span class="text-xs text-slate-400">Log in to view saved jobs.</span>';
    if (quickCount) quickCount.innerText = '0';
    return;
  }

  const data = window.UdyogMitraAuth.getUserDashboardData();
  const saved = data.savedJobs || [];

  if (quickCount) quickCount.innerText = saved.length;

  if (previewBox) {
    if (saved.length === 0) {
      previewBox.innerHTML = '<span class="text-xs text-slate-400">No jobs saved yet.</span>';
    } else {
      previewBox.innerHTML = saved.slice(0, 3).map(s => `
        <div class="text-xs flex items-center justify-between border-b border-slate-100 pb-1.5">
          <span class="font-bold text-slate-800 truncate max-w-[180px]">${s.jobTitle}</span>
          <span class="text-[11px] text-slate-500">${s.companyName}</span>
        </div>
      `).join("");
    }
  }

  if (saved.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-6">
        <div class="w-14 h-14 mx-auto mb-3 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center text-2xl">
          <i class="fa-solid fa-bookmark"></i>
        </div>
        <h4 class="font-black text-slate-800 text-lg">No Saved Jobs Yet</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
          Click the bookmark icon on any job card in Find Jobs to save it to your private list.
        </p>
        <button onclick="navigateToPage('jobs')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow">
          Explore Available Jobs
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = saved.map((s, idx) => {
    const meta = COMPANY_META[s.companyName] || {};
    const cardLogo = getCardLogoHtml(s.companyName, meta.logo);
    const inlineLogo = getInlineLogoHtml(s.companyName, meta.logo);

    return `
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-amber-300 transition">
        <div class="flex items-center gap-3.5">
          ${cardLogo}
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-bold text-slate-900 text-base">${s.jobTitle}</h4>
              <span class="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">Saved: ${s.savedAt}</span>
            </div>
            <div class="text-xs text-slate-600 mt-1 flex items-center flex-wrap gap-x-2">
              <span class="inline-flex items-center font-bold text-slate-800">${inlineLogo}${s.companyName}</span>
              <span class="text-slate-300">•</span>
              <span>📍 ${s.jobLocation}</span>
              <span class="text-slate-300">•</span>
              <span class="text-emerald-700 font-bold">💰 ₹${s.salary} LPA</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-center">
          <button onclick="toggleJobBookmark('${s.jobId}', '', '', '', '', '')" class="text-xs text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-2 rounded-xl border border-rose-200 transition">
            <i class="fa-solid fa-trash-can mr-1"></i> Remove
          </button>
          <a href="${s.directUrl}" target="_blank" rel="noopener noreferrer"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition flex items-center gap-1.5">
            Apply on Portal <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================
// 8-SECTION ATS RESUME BUILDER & PDF GENERATION (Times New Roman 12pt)
// Developed by Nallani Jaswanth
// ============================================================

window.currentResumeState = {
  personal: {
    fullName: "Rahul Sharma",
    targetRole: "Full Stack Software Developer",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    location: "Bangalore, India",
    linkedin: "linkedin.com/in/rahulsharma-dev",
    portfolio: "github.com/rahulsharma-dev"
  },
  summary: "Results-driven Software Engineer with hands-on experience in full stack software development, scalable microservices architectures, and relational/NoSQL database management. Proven ability to architect reliable RESTful web APIs, enhance system throughput, and collaborate seamlessly across cross-functional engineering teams.",
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "National Institute of Technology (NIT)",
      year: "2020 - 2024",
      score: "8.8 / 10 CGPA"
    }
  ],
  skills: {
    tech: "Java, Python, C#, JavaScript, TypeScript, Spring Boot, React, Node.js, SQL, PostgreSQL, MongoDB",
    domain: "Microservices Architecture, REST API Design, Cloud Infrastructure, Agile / Scrum, Object-Oriented Programming (OOP)",
    tools: "Git, Docker, Kubernetes, AWS (EC2, S3), Jenkins, Maven, Postman, Linux"
  },
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Infosys Technologies Ltd",
      duration: "Jul 2024 - Present",
      location: "Bangalore, India",
      responsibilities: "Engineered robust microservices handling 25,000+ daily candidate transactions.\nOptimized database SQL queries reducing average response latency by 32%.\nCollaborated in Agile sprints with automated unit testing achieving 88% test coverage."
    }
  ],
  projects: [
    {
      title: "UdyogMitra Career & Job Market Analytics Platform",
      tech: "JavaScript, HTML5/CSS3, Chart.js, PDF.js, LocalStorage DB",
      description: "Designed a high-performance career portal indexing 1,400+ jobs across Product, Service, and Startup sectors with direct portal application routing and client-side ATS resume parsing.",
      link: "https://udyogmitra.netlify.app"
    },
    {
      title: "Distributed Task Scheduler & Notification Service",
      tech: "Python, FastAPI, Redis, Docker",
      description: "Implemented asynchronous background job processing pipeline with retry queues and email alerts, processing over 10,000 tasks per hour without message drop.",
      link: "github.com/rahulsharma-dev/task-scheduler"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2024"
    },
    {
      name: "Oracle Certified Associate: Java SE Programmer",
      issuer: "Oracle Corporation",
      year: "2023"
    }
  ],
  achievements: [
    {
      title: "Winner - National Smart India Hackathon 2023",
      description: "Secured 1st Place out of 400+ collegiate engineering teams by developing an automated AI civic complaint triage system."
    },
    {
      title: "Dean's Academic Merit Honor Roll",
      description: "Awarded top 5% academic performance recognition throughout 4 consecutive undergraduate semesters."
    }
  ]
};

// Open Resume Builder from Resume Parser with extracted skills
function openResumeInBuilder() {
  if (resumeExtractedSkills && resumeExtractedSkills.length > 0) {
    const existing = window.currentResumeState.skills.tech 
      ? window.currentResumeState.skills.tech.split(",").map(s => s.trim()) 
      : [];
    const merged = Array.from(new Set([...existing, ...resumeExtractedSkills])).join(", ");
    window.currentResumeState.skills.tech = merged;
  }

  // Pre-fill user data if available from logged-in session
  if (window.UdyogMitraAuth && window.UdyogMitraAuth.isLoggedIn()) {
    const uData = window.UdyogMitraAuth.getUserDashboardData();
    if (uData) {
      if (uData.fullName && !window.currentResumeState.personal.fullName) {
        window.currentResumeState.personal.fullName = uData.fullName;
      }
      if (uData.email && !window.currentResumeState.personal.email) {
        window.currentResumeState.personal.email = uData.email;
      }
      if (uData.mobile && !window.currentResumeState.personal.phone) {
        window.currentResumeState.personal.phone = uData.mobile;
      }
    }
  }

  renderResumeBuilderForm();
  updateResumePreview();
  navigateToPage("builder");
}

function loadResumeBuilderData() {
  if (window.UdyogMitraAuth && window.UdyogMitraAuth.isLoggedIn()) {
    const data = window.UdyogMitraAuth.getUserDashboardData();
    if (data && data.resumeData && Object.keys(data.resumeData).length > 0) {
      const r = data.resumeData;
      if (r.personal) window.currentResumeState.personal = { ...window.currentResumeState.personal, ...r.personal };
      if (r.summary) window.currentResumeState.summary = r.summary;
      if (Array.isArray(r.education) && r.education.length > 0) window.currentResumeState.education = r.education;
      if (r.skills) {
        if (typeof r.skills === "object") {
          window.currentResumeState.skills = { ...window.currentResumeState.skills, ...r.skills };
        } else if (typeof r.skills === "string") {
          window.currentResumeState.skills.tech = r.skills;
        }
      }
      if (Array.isArray(r.experience) && r.experience.length > 0) window.currentResumeState.experience = r.experience;
      if (Array.isArray(r.projects) && r.projects.length > 0) window.currentResumeState.projects = r.projects;
      if (Array.isArray(r.certifications) && r.certifications.length > 0) window.currentResumeState.certifications = r.certifications;
      if (Array.isArray(r.achievements) && r.achievements.length > 0) window.currentResumeState.achievements = r.achievements;
    } else if (data && data.fullName) {
      window.currentResumeState.personal.fullName = data.fullName;
      window.currentResumeState.personal.email = data.email || "";
      window.currentResumeState.personal.phone = data.mobile || "";
    }
  }

  renderResumeBuilderForm();
  updateResumePreview();
}

function renderResumeBuilderForm() {
  const p = window.currentResumeState.personal || {};
  const nameInput = document.getElementById("builder-name");
  const roleInput = document.getElementById("builder-role");
  const emailInput = document.getElementById("builder-email");
  const phoneInput = document.getElementById("builder-phone");
  const locInput = document.getElementById("builder-location");
  const linkedinInput = document.getElementById("builder-linkedin");
  const portInput = document.getElementById("builder-portfolio");
  const sumInput = document.getElementById("builder-summary");

  if (nameInput) nameInput.value = p.fullName || "";
  if (roleInput) roleInput.value = p.targetRole || "";
  if (emailInput) emailInput.value = p.email || "";
  if (phoneInput) phoneInput.value = p.phone || "";
  if (locInput) locInput.value = p.location || "";
  if (linkedinInput) linkedinInput.value = p.linkedin || "";
  if (portInput) portInput.value = p.portfolio || "";
  if (sumInput) sumInput.value = window.currentResumeState.summary || "";

  const sk = window.currentResumeState.skills || {};
  const skTech = document.getElementById("builder-skills-tech");
  const skDomain = document.getElementById("builder-skills-domain");
  const skTools = document.getElementById("builder-skills-tools");
  if (skTech) skTech.value = sk.tech || "";
  if (skDomain) skDomain.value = sk.domain || "";
  if (skTools) skTools.value = sk.tools || "";

  renderEducationInputs();
  renderExperienceInputs();
  renderProjectsInputs();
  renderCertificationsInputs();
  renderAchievementsInputs();
}

// 1. Education Dynamic List
function renderEducationInputs() {
  const container = document.getElementById("builder-education-container");
  if (!container) return;
  const list = window.currentResumeState.education || [];

  container.innerHTML = list.map((edu, idx) => `
    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 relative space-y-2 text-xs">
      <button type="button" onclick="removeEducationEntry(${idx})" class="absolute top-2 right-2 text-rose-500 hover:text-rose-700 text-xs font-bold" title="Delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pr-6">
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Degree / Course</label>
          <input type="text" value="${edu.degree || ''}" placeholder="e.g. B.Tech Computer Science" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.education[${idx}].degree = this.value; updateResumePreview();" />
        </div>
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Institution / University</label>
          <input type="text" value="${edu.institution || ''}" placeholder="e.g. Osmania University" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.education[${idx}].institution = this.value; updateResumePreview();" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Duration / Year</label>
          <input type="text" value="${edu.year || ''}" placeholder="2020 - 2024" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.education[${idx}].year = this.value; updateResumePreview();" />
        </div>
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Grade / Score</label>
          <input type="text" value="${edu.score || ''}" placeholder="8.5 CGPA / 82%" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.education[${idx}].score = this.value; updateResumePreview();" />
        </div>
      </div>
    </div>
  `).join("");
}

function addEducationEntry() {
  window.currentResumeState.education.push({ degree: "", institution: "", year: "", score: "" });
  renderEducationInputs();
  updateResumePreview();
}

function removeEducationEntry(idx) {
  window.currentResumeState.education.splice(idx, 1);
  renderEducationInputs();
  updateResumePreview();
}

// 2. Experience Dynamic List
function renderExperienceInputs() {
  const container = document.getElementById("builder-experience-container");
  if (!container) return;
  const list = window.currentResumeState.experience || [];

  container.innerHTML = list.map((exp, idx) => `
    <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 relative space-y-2 text-xs">
      <button type="button" onclick="removeExperienceEntry(${idx})" class="absolute top-2.5 right-2.5 text-rose-500 hover:text-rose-700 text-xs font-bold" title="Delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pr-6">
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Job Title / Designation</label>
          <input type="text" value="${exp.role || ''}" placeholder="e.g. Software Engineer" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.experience[${idx}].role = this.value; updateResumePreview();" />
        </div>
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Company / Organization</label>
          <input type="text" value="${exp.company || ''}" placeholder="e.g. TCS / Google" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.experience[${idx}].company = this.value; updateResumePreview();" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Duration</label>
          <input type="text" value="${exp.duration || ''}" placeholder="Jun 2024 - Present" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.experience[${idx}].duration = this.value; updateResumePreview();" />
        </div>
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Location</label>
          <input type="text" value="${exp.location || ''}" placeholder="Hyderabad, India" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.experience[${idx}].location = this.value; updateResumePreview();" />
        </div>
      </div>
      <div>
        <label class="block font-semibold text-slate-600 mb-0.5">Responsibilities & Key Accomplishments (One per line)</label>
        <textarea rows="3" placeholder="Engineered high throughput API endpoints...\nOptimized MySQL queries reducing load time..." class="w-full border border-slate-300 rounded-lg p-2 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.experience[${idx}].responsibilities = this.value; updateResumePreview();">${exp.responsibilities || ''}</textarea>
      </div>
    </div>
  `).join("");
}

function addExperienceEntry() {
  window.currentResumeState.experience.push({ role: "", company: "", duration: "", location: "", responsibilities: "" });
  renderExperienceInputs();
  updateResumePreview();
}

function removeExperienceEntry(idx) {
  window.currentResumeState.experience.splice(idx, 1);
  renderExperienceInputs();
  updateResumePreview();
}

// 3. Projects Dynamic List
function renderProjectsInputs() {
  const container = document.getElementById("builder-projects-container");
  if (!container) return;
  const list = window.currentResumeState.projects || [];

  container.innerHTML = list.map((proj, idx) => `
    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 relative space-y-2 text-xs">
      <button type="button" onclick="removeProjectEntry(${idx})" class="absolute top-2 right-2 text-rose-500 hover:text-rose-700 text-xs font-bold" title="Delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pr-6">
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Project Title</label>
          <input type="text" value="${proj.title || ''}" placeholder="e.g. AI Career Portal" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.projects[${idx}].title = this.value; updateResumePreview();" />
        </div>
        <div>
          <label class="block font-semibold text-slate-600 mb-0.5">Tech Stack</label>
          <input type="text" value="${proj.tech || ''}" placeholder="React, Node, MongoDB" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.projects[${idx}].tech = this.value; updateResumePreview();" />
        </div>
      </div>
      <div>
        <label class="block font-semibold text-slate-600 mb-0.5">Project Description</label>
        <textarea rows="2" placeholder="Brief details, features, metrics achieved..." class="w-full border border-slate-300 rounded-lg p-2 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.projects[${idx}].description = this.value; updateResumePreview();">${proj.description || ''}</textarea>
      </div>
      <div>
        <label class="block font-semibold text-slate-600 mb-0.5">Project Link / Repo</label>
        <input type="text" value="${proj.link || ''}" placeholder="https://github.com/..." class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.projects[${idx}].link = this.value; updateResumePreview();" />
      </div>
    </div>
  `).join("");
}

function addProjectEntry() {
  window.currentResumeState.projects.push({ title: "", tech: "", description: "", link: "" });
  renderProjectsInputs();
  updateResumePreview();
}

function removeProjectEntry(idx) {
  window.currentResumeState.projects.splice(idx, 1);
  renderProjectsInputs();
  updateResumePreview();
}

// 4. Certifications Dynamic List
function renderCertificationsInputs() {
  const container = document.getElementById("builder-certifications-container");
  if (!container) return;
  const list = window.currentResumeState.certifications || [];

  container.innerHTML = list.map((cert, idx) => `
    <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 relative text-xs flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      <div class="flex-1">
        <input type="text" value="${cert.name || ''}" placeholder="Certificate Name (e.g. AWS Solutions Architect)" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.certifications[${idx}].name = this.value; updateResumePreview();" />
      </div>
      <div class="w-full sm:w-40">
        <input type="text" value="${cert.issuer || ''}" placeholder="Issuer (e.g. AWS / Google)" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.certifications[${idx}].issuer = this.value; updateResumePreview();" />
      </div>
      <div class="w-full sm:w-24">
        <input type="text" value="${cert.year || ''}" placeholder="Year (2024)" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.certifications[${idx}].year = this.value; updateResumePreview();" />
      </div>
      <button type="button" onclick="removeCertificationEntry(${idx})" class="text-rose-500 hover:text-rose-700 font-bold p-1" title="Delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");
}

function addCertificationEntry() {
  window.currentResumeState.certifications.push({ name: "", issuer: "", year: "" });
  renderCertificationsInputs();
  updateResumePreview();
}

function removeCertificationEntry(idx) {
  window.currentResumeState.certifications.splice(idx, 1);
  renderCertificationsInputs();
  updateResumePreview();
}

// 5. Achievements Dynamic List
function renderAchievementsInputs() {
  const container = document.getElementById("builder-achievements-container");
  if (!container) return;
  const list = window.currentResumeState.achievements || [];

  container.innerHTML = list.map((ach, idx) => `
    <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 relative space-y-1.5 text-xs">
      <button type="button" onclick="removeAchievementEntry(${idx})" class="absolute top-2 right-2 text-rose-500 hover:text-rose-700 font-bold" title="Delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <div class="pr-6">
        <input type="text" value="${ach.title || ''}" placeholder="Achievement Title (e.g. Winner - CodeHack 2024)" class="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white font-bold outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.achievements[${idx}].title = this.value; updateResumePreview();" />
      </div>
      <div>
        <textarea rows="1" placeholder="Brief context or description..." class="w-full border border-slate-300 rounded-lg p-2 bg-white outline-none focus:ring-1 focus:ring-blue-500" oninput="window.currentResumeState.achievements[${idx}].description = this.value; updateResumePreview();">${ach.description || ''}</textarea>
      </div>
    </div>
  `).join("");
}

function addAchievementEntry() {
  window.currentResumeState.achievements.push({ title: "", description: "" });
  renderAchievementsInputs();
  updateResumePreview();
}

function removeAchievementEntry(idx) {
  window.currentResumeState.achievements.splice(idx, 1);
  renderAchievementsInputs();
  updateResumePreview();
}

// Update state when static inputs change
function handleBuilderInputChange() {
  window.currentResumeState.personal.fullName = document.getElementById("builder-name")?.value || "";
  window.currentResumeState.personal.targetRole = document.getElementById("builder-role")?.value || "";
  window.currentResumeState.personal.email = document.getElementById("builder-email")?.value || "";
  window.currentResumeState.personal.phone = document.getElementById("builder-phone")?.value || "";
  window.currentResumeState.personal.location = document.getElementById("builder-location")?.value || "";
  window.currentResumeState.personal.linkedin = document.getElementById("builder-linkedin")?.value || "";
  window.currentResumeState.personal.portfolio = document.getElementById("builder-portfolio")?.value || "";
  window.currentResumeState.summary = document.getElementById("builder-summary")?.value || "";

  window.currentResumeState.skills.tech = document.getElementById("builder-skills-tech")?.value || "";
  window.currentResumeState.skills.domain = document.getElementById("builder-skills-domain")?.value || "";
  window.currentResumeState.skills.tools = document.getElementById("builder-skills-tools")?.value || "";

  updateResumePreview();
}

// STRICT TIMES NEW ROMAN, 12PT ATS RESUME PREVIEW GENERATOR
function updateResumePreview() {
  const p = window.currentResumeState.personal || {};
  const s = window.currentResumeState;
  const sheet = document.getElementById("resume-sheet-preview");
  if (!sheet) return;

  // Build Contact Line
  const contactParts = [];
  if (p.email) contactParts.push(p.email);
  if (p.phone) contactParts.push(p.phone);
  if (p.location) contactParts.push(p.location);
  if (p.linkedin) contactParts.push(p.linkedin);
  if (p.portfolio) contactParts.push(p.portfolio);
  const contactLine = contactParts.join(" &nbsp;|&nbsp; ");

  // Build Education HTML
  let eduHtml = "";
  if (s.education && s.education.length > 0) {
    eduHtml = `
      <h2>Education</h2>
      ${s.education.map(e => `
        <div style="margin-bottom: 6pt;">
          <div class="ats-item-header">
            <span>${e.degree || "Degree"}</span>
            <span>${e.year || ""}</span>
          </div>
          <div class="ats-item-sub">
            <span>${e.institution || "Institution"}</span>
            <span>${e.score ? "Score: " + e.score : ""}</span>
          </div>
        </div>
      `).join("")}
    `;
  }

  // Build Skills HTML
  let skillsHtml = "";
  const sk = s.skills || {};
  if (sk.tech || sk.domain || sk.tools) {
    skillsHtml = `
      <h2>Technical &amp; Professional Skills</h2>
      <div style="margin-bottom: 6pt;">
        ${sk.tech ? `<p style="margin-bottom: 3pt;"><b>Technical Languages &amp; Frameworks:</b> ${sk.tech}</p>` : ""}
        ${sk.domain ? `<p style="margin-bottom: 3pt;"><b>Domain &amp; Methodologies:</b> ${sk.domain}</p>` : ""}
        ${sk.tools ? `<p style="margin-bottom: 3pt;"><b>Tools, Databases &amp; Cloud:</b> ${sk.tools}</p>` : ""}
      </div>
    `;
  }

  // Build Experience HTML
  let expHtml = "";
  if (s.experience && s.experience.length > 0) {
    expHtml = `
      <h2>Work Experience</h2>
      ${s.experience.map(exp => {
        const bulletPoints = (exp.responsibilities || "")
          .split("\n")
          .map(b => b.trim())
          .filter(Boolean)
          .map(b => `<li>${b.replace(/^[•\-*]\s*/, '')}</li>`)
          .join("");

        return `
          <div style="margin-bottom: 8pt;">
            <div class="ats-item-header">
              <span>${exp.role || "Job Role"}</span>
              <span>${exp.duration || ""}</span>
            </div>
            <div class="ats-item-sub">
              <span>${exp.company || "Company"}</span>
              <span>${exp.location || ""}</span>
            </div>
            ${bulletPoints ? `<ul>${bulletPoints}</ul>` : ""}
          </div>
        `;
      }).join("")}
    `;
  }

  // Build Projects HTML
  let projHtml = "";
  if (s.projects && s.projects.length > 0) {
    projHtml = `
      <h2>Key Projects</h2>
      ${s.projects.map(proj => `
        <div style="margin-bottom: 6pt;">
          <div class="ats-item-header">
            <span>${proj.title || "Project Title"}</span>
            <span style="font-size: 11pt; font-weight: normal; font-style: italic;">${proj.link || ""}</span>
          </div>
          ${proj.tech ? `<p style="font-style: italic; font-size: 11pt; margin-bottom: 2pt;"><b>Technologies:</b> ${proj.tech}</p>` : ""}
          <p style="margin-bottom: 3pt;">${proj.description || ""}</p>
        </div>
      `).join("")}
    `;
  }

  // Build Certifications HTML
  let certHtml = "";
  if (s.certifications && s.certifications.length > 0) {
    certHtml = `
      <h2>Certifications</h2>
      <ul style="margin-bottom: 6pt;">
        ${s.certifications.map(c => `
          <li><b>${c.name || "Certification"}</b> - ${c.issuer || "Issuing Organization"} (${c.year || ""})</li>
        `).join("")}
      </ul>
    `;
  }

  // Build Achievements HTML
  let achHtml = "";
  if (s.achievements && s.achievements.length > 0) {
    achHtml = `
      <h2>Achievements &amp; Honors</h2>
      <ul style="margin-bottom: 6pt;">
        ${s.achievements.map(a => `
          <li><b>${a.title || "Honor"}</b>${a.description ? `: ${a.description}` : ""}</li>
        `).join("")}
      </ul>
    `;
  }

  sheet.innerHTML = `
    <h1>${p.fullName || "CANDIDATE NAME"}</h1>
    ${p.targetRole ? `<div style="text-align: center; font-size: 12pt; font-weight: bold; margin-bottom: 3pt; color: #111;">${p.targetRole}</div>` : ""}
    <div class="ats-contact-bar">${contactLine || "email@example.com | +91 9876543210 | India"}</div>

    ${s.summary ? `
      <h2>Professional Summary</h2>
      <p style="margin-bottom: 8pt;">${s.summary}</p>
    ` : ""}

    ${eduHtml}
    ${skillsHtml}
    ${expHtml}
    ${projHtml}
    ${certHtml}
    ${achHtml}
  `;
}

// SAVE RESUME TO ACCOUNT
function saveResumeBuilderData(showAlert = true) {
  if (!window.UdyogMitraAuth || !window.UdyogMitraAuth.isLoggedIn()) {
    checkAppLock();
    openAuthModal("login");
    showAuthAlert("Please log in to save your resume to your account.", "error");
    return;
  }

  handleBuilderInputChange();
  const res = window.UdyogMitraAuth.saveResumeBuilder(window.currentResumeState);

  if (res && res.success) {
    if (showAlert) {
      alert("✓ Resume saved successfully! Your candidate ATS score is " + res.resumeScore + "/100.");
    }
    renderApplicationDashboard();
  } else if (showAlert) {
    alert(res.message || "Failed to save resume.");
  }
}

// DOWNLOAD RESUME AS SEPARATE STANDALONE PDF (Times New Roman 12pt)
function downloadResumeAsPDF() {
  const element = document.getElementById("resume-sheet-preview");
  if (!element) return;

  const candidateName = window.currentResumeState.personal?.fullName || "Candidate";
  const cleanName = candidateName.replace(/[^a-zA-Z0-9]/g, "_");
  const fileName = `${cleanName}_Resume.pdf`;

  const btn = document.getElementById("btn-download-resume-pdf");
  const oldText = btn ? btn.innerHTML : "";
  if (btn) {
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generating PDF...`;
    btn.disabled = true;
  }

  // Silently save latest data to user account
  saveResumeBuilderData(false);

  if (typeof html2pdf !== "undefined") {
    const opt = {
      margin: [10, 12, 10, 12],
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true, logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Downloaded!`;
        setTimeout(() => {
          btn.innerHTML = oldText;
          btn.disabled = false;
        }, 2500);
      }
    }).catch(err => {
      console.error("PDF generation failed:", err);
      window.print();
      if (btn) {
        btn.innerHTML = oldText;
        btn.disabled = false;
      }
    });
  } else {
    window.print();
    if (btn) {
      btn.innerHTML = oldText;
      btn.disabled = false;
    }
  }
}
