# 🚨 ThreatLens – AI-Powered SOC Alert Triage & Incident Intelligence Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-blue?style=for-the-badge&logo=vercel)](https://threatlens-automated-soc.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant)
[![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Edge_Functions-green?style=for-the-badge&logo=supabase)](https://supabase.com)
[![React](https://img.shields.io/badge/React-18_TypeScript-61DAFB?style=for-the-badge&logo=react)](https://react.dev)

---

## 📌 Project Overview

**ThreatLens** is an enterprise-grade, AI-powered Security Operations Center (SOC) platform engineered to solve alert fatigue and streamline threat triage. It simulates real-world SOC operations by ingesting security alerts, performing automated risk scoring and classification via AI, correlating related telemetry into high-fidelity incidents, and providing actionable containment playbooks for security analysts.

---

## ✨ Key Features

- **Automated Alert Ingestion**: Multi-source log ingestion (SIEM, EDR, Network, Auth).
- **AI Triage & Deterministic Risk Scoring**: Hybrid scoring engine evaluating asset criticality, privilege flags, external IP indicators, and AI threat explanations.
- **Multi-Vector Incident Correlation Engine**: Automatically groups related alerts into unified incidents based on shared IPs, identities, targeted assets, and risk thresholds.
- **AI Incident Intelligence Reports**: Generates structured attack chain summaries, business impact assessments, priority levels (P1/P2/P3), and containment steps.
- **Real-Time SOC Dashboard**: Live monitoring via Supabase Realtime for active incidents, severity distributions, and system health statistics.
- **Role-Based Access Control (RBAC)**: Secure access separation for `admin`, `analyst`, and `alert_source` roles with Postgres Row Level Security (RLS).
- **External Database Synchronization**: Configurable ingestion workers (`ingest-external-alerts`) for polling external PostgreSQL security databases.
- **Resilient Fallback Engine**: Rule-based fallback mechanisms ensure SOC operations continue without interruption if AI providers are unreachable.

---

## 🏗️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI, Lucide Icons, Recharts.
- **State Management & Caching**: TanStack React Query (`@tanstack/react-query`).
- **Backend & Database**: PostgreSQL 17 on Supabase (`llgbobnhvnufyawlcwbj`), Supabase Auth, Supabase Realtime, Supabase Storage.
- **Extensions**: `pg_net` (async Edge Function invocation via SQL triggers) and `pg_cron` (scheduled health checks).
- **AI Integrations**: OpenAI API & Lovable AI Gateway (`gpt-4o-mini` / `gemini-3-flash-preview`).
- **Deployment**: Vercel (Frontend) & Supabase Edge Functions (Deno Runtime).

---

## 🔄 System Architecture & Workflow

```
[Security Alert Sources] ──> [Supabase Database (public.alerts)]
                                         │
                         (Trigger: on_alert_inserted via pg_net)
                                         ▼
                             [analyze-alert Edge Function]
                                         │├── Deterministic Risk Engine
                                         │└── OpenAI / AI Analysis
                                         ▼
                            [process-alerts Edge Function]
                                         │├── Correlation Rules (IP/User/Asset/Risk)
                                         └── Incident Creation (public.incidents)
                                         ▼
                          [Supabase Realtime Channel]
                                         ▼
                          [React SOC Dashboard (UI)]
```

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+`
- Supabase CLI (optional for local edge function testing)

### 1. Clone Repository
```bash
git clone https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant.git
cd ThreatLens-automated-soc-alert-triage-assistant
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your Supabase credentials:
```env
VITE_SUPABASE_URL=https://llgbobnhvnufyawlcwbj.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🗄️ Supabase Setup & Database Migrations

### Apply Migrations
All schema definitions, RLS policies, enums, and functions are located in `supabase/migrations/`. Apply them via the Supabase CLI or SQL Editor:
```bash
npx supabase db push
```

### Database Tables Summary
1. `profiles`: User profile metadata linked to `auth.users`.
2. `user_roles`: User role mapping (`admin`, `analyst`, `alert_source`).
3. `alerts`: Security alert telemetry and risk scores.
4. `incidents`: Correlated security incidents.
5. `alert_incident_map`: Junction mapping between alerts and incidents.
6. `incident_activity`: Audit log of analyst triage actions.
7. `db_connections`: External database connector credentials.
8. `external_alert_log`: External alert deduplication log.

---

## ⚡ Edge Function Deployment

Deploy all 6 Edge Functions to your Supabase project:

```bash
npx supabase functions deploy analyze-alert --no-verify-jwt
npx supabase functions deploy process-alerts --no-verify-jwt
npx supabase functions deploy generate-incident-summary --no-verify-jwt
npx supabase functions deploy health-summary --no-verify-jwt
npx supabase functions deploy ingest-external-alerts --no-verify-jwt
npx supabase functions deploy db-connect --no-verify-jwt
```

### Configure Edge Function Secrets
```bash
npx supabase secrets set OPENAI_API_KEY=your_openai_api_key
```

---

## 📦 Production Build

Validate TypeScript, linting, and build the production bundle:

```bash
# Run Linter
npm run lint

# Production Build
npm run build

# Preview Production Build Locally
npm run preview
```

---

## 🌐 Live Demo & Repository Metadata

- **Live Demo**: [https://threatlens-automated-soc.vercel.app/](https://threatlens-automated-soc.vercel.app/)
- **GitHub Repository**: [https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant](https://github.com/arun-kavali/ThreatLens-automated-soc-alert-triage-assistant)
- **GitHub Description**: 🚨 AI-Powered SOC Alert Triage & Incident Intelligence Platform built with React 18, TypeScript, Supabase, Tailwind CSS, and OpenAI. Features automated risk scoring, multi-vector correlation, and real-time incident investigation playbooks.
- **GitHub Topics**: `cybersecurity`, `soc-automation`, `alert-triage`, `incident-response`, `ai-security`, `supabase`, `react`, `typescript`, `tailwindcss`, `openai`

---

## 👨‍💻 Author & Maintainer

**Arun Kavali**  
Senior Software & Cybersecurity Engineer  
[GitHub Profile](https://github.com/arun-kavali)
