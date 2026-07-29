# 🚨 ThreatLens – AI-Powered SOC Alert Triage & Incident Intelligence Platform

<p align="center">
  <a href="https://threatlens-automated-soc.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel" />
  </a>
  <a href="https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" />
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase" />
  <img src="https://img.shields.io/badge/OpenAI-AI-412991?style=for-the-badge&logo=openai" />
</p>

---

# 📌 Overview

**ThreatLens** is an AI-powered Security Operations Center (SOC) platform that automates security alert triage, incident correlation, and investigation workflows.

The platform simulates real-world SOC operations by ingesting security alerts, analyzing them with AI, automatically correlating related events into security incidents, and providing analysts with actionable investigation intelligence.

Its primary objective is to reduce alert fatigue, accelerate incident response, and improve analyst productivity through intelligent automation.

---

# ✨ Key Features

### 🚨 AI-Powered Alert Analysis
- Automated security alert classification
- AI-generated threat explanations
- Risk scoring and severity assessment
- Context-aware security recommendations

### 🔗 Automated Incident Correlation
- Groups related alerts into incidents
- Correlates events using:
  - Source IP
  - User Identity
  - Target Asset
  - Risk Score
- Eliminates manual alert correlation

### 🧠 AI Incident Intelligence
Generates:

- Threat Summary
- Attack Pattern Analysis
- Business Impact Assessment
- Incident Priority
- Containment Recommendations
- Investigation Guidance

### 📊 SOC Dashboard

Monitor security operations through real-time analytics:

- Total Alerts
- Active Incidents
- Resolved Incidents
- Severity Distribution
- Investigation Status
- Security Health Metrics

### 🔐 Authentication & Role-Based Access

Secure authentication powered by Supabase Auth with Role-Based Access Control (RBAC).

Supported roles:

- Admin
- SOC Analyst
- Alert Source

### ⚡ Real-Time Updates

Built using Supabase Realtime for live synchronization of:

- Alerts
- Incidents
- Dashboard Metrics
- Investigation Status

### 🛡 Rule-Based Fallback Engine

If AI services are unavailable, ThreatLens automatically switches to deterministic rule-based processing for:

- Risk Scoring
- Severity Assignment
- Incident Summaries

ensuring uninterrupted SOC operations.

---

# 🏗 Technology Stack

## Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Query
- Recharts
- Lucide Icons

## Backend

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Supabase Realtime
- Supabase Edge Functions

## Artificial Intelligence

- OpenAI API
- AI-powered Security Analysis
- Incident Intelligence Generation

## Deployment

- Vercel
- Supabase Cloud

---

# 🔄 System Workflow

```text
Security Alert Sources
        │
        ▼
Alert Ingestion
        │
        ▼
Supabase Database
        │
        ▼
AI Alert Analysis
        │
        ▼
Risk Scoring & Severity Classification
        │
        ▼
Incident Correlation Engine
        │
        ▼
Automatic Incident Creation
        │
        ▼
SOC Dashboard
        │
        ▼
Security Investigation
        │
        ▼
Incident Resolution
```

---

# 📂 Project Structure

```text
ThreatLens/
│
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── integrations/
│   ├── lib/
│   ├── pages/
│   ├── services/
│   ├── types/
│   └── utils/
│
├── supabase/
│   ├── functions/
│   └── migrations/
│
├── .env.example
├── package.json
├── vite.config.ts
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- npm
- Supabase Project

---

## Clone Repository

```bash
git clone https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant.git

cd ThreatLens-automated-soc-alert-triage-assistant
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_SUPABASE_URL=https://your-project.supabase.co

VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

> **Note:** The OpenAI API key should be stored as a **Supabase Edge Function Secret**. It is **not required** in the frontend unless your application directly calls the OpenAI API from the client.

---

## Deploy Edge Functions

```bash
npx supabase functions deploy analyze-alert

npx supabase functions deploy process-alerts

npx supabase functions deploy generate-incident-summary

npx supabase functions deploy health-summary

npx supabase functions deploy ingest-external-alerts

npx supabase functions deploy db-connect
```

---

## Configure Edge Function Secrets

```bash
npx supabase secrets set OPENAI_API_KEY=your_openai_api_key
```

---

## Start Development Server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

# 📊 Core Platform Capabilities

ThreatLens can simulate and process:

- Phishing Alerts
- Malware Detection
- Brute Force Attempts
- Credential Abuse
- Suspicious Logins
- Unauthorized Access Attempts
- Network Intrusions
- Insider Threat Indicators

---

# 🔐 Security Highlights

- Supabase Authentication
- Role-Based Access Control (RBAC)
- PostgreSQL Row Level Security (RLS)
- Secure Edge Functions
- Protected API Endpoints
- Real-Time Event Processing
- Private Storage Buckets
- Production-Ready Backend Architecture

---

# 🌐 Live Demo

### 🚀 Application

https://threatlens-automated-soc.vercel.app/

---

# 📁 GitHub Repository

https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant

---

# 👨‍💻 Author

## Arun Kavali

Final Year Computer Science Engineering Student

Passionate about:

- Artificial Intelligence
- Cybersecurity
- Security Operations (SOC)
- Full Stack Development
- Cloud Computing

GitHub:

https://github.com/arun-kavali

---

# ⭐ Project Vision

ThreatLens demonstrates how Artificial Intelligence can modernize Security Operations Centers by automating repetitive workflows, reducing alert fatigue, accelerating incident response, and enabling analysts to focus on high-priority threats.

The project showcases an end-to-end AI-assisted SOC workflow built using modern cloud-native technologies and production-ready development practices.