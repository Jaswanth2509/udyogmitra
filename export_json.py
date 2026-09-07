import json
import pandas as pd

df = pd.read_csv("C:/Users/DELL/.gemini/antigravity/scratch/AI_JOB_MARKET_ANALYTICS/data/processed/cleaned_jobs.csv")
records = df.to_dict(orient="records")

with open("C:/Users/DELL/.gemini/antigravity/scratch/AI_JOB_MARKET_ANALYTICS/netlify_deployment/jobs.json", "w", encoding="utf-8") as f:
    json.dump(records, f, indent=2)

print(f"Exported {len(records)} jobs to netlify_deployment/jobs.json")
