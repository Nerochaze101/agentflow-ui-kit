# AutoAgent Blueprint

# Frontend-Only UI Master Blueprint: AutoAgent AI SaaS Platform

You are tasked with building a complete, high-fidelity, frontend-only UI prototype for a SaaS application called **"AutoAgent AI"**. 

**IMPORTANT:** Do NOT attempt to set up real database connections, Supabase integrations, or external API keys yet. Focus 100% on building rich, interactive, pixel-perfect frontend pages with realistic mock data, smooth React UI state transitions, interactive modals, and full client-side routing.

---

## 🛠️ TECH STACK & DESIGN SYSTEM

- **Framework:** Next.js (App Router, React, Tailwind CSS, Lucide React icons, Framer Motion animations where appropriate).
- **Theme:** Modern Dark Mode Premium SaaS
  - **Backgrounds:** Primary `bg-slate-950`, Card Containers `bg-slate-900`, Card Borders `border-slate-800`.
  - **Brand Accent Colors:** Indigo (`bg-indigo-600` primary buttons), Emerald (`text-emerald-400` / `bg-emerald-500/10` for active states, WhatsApp, and online pills), Pink (`pink-500` for Instagram), Dark Gray for TikTok.
  - **Typography:** Inter, sleek status badges with pulsing SVG dots, rounded-xl/2xl cards, clean tables, and responsive drawer components.

---

## 🧭 GLOBAL NAVIGATION & LAYOUT STRUCTURE

Create a shared global App Layout (`/dashboard/*`) featuring:
1. **Collapsible Sidebar:** Navigation links with icons to all dashboard pages, active route highlighting, brand logo (`AutoAgent AI` with glowing gradient icon), and a user profile avatar pill at the bottom (`@lagos_boutique`).
2. **Top App Navbar:** Breadcrumb page title, global search bar, simulated system status pill ("● System Operational"), notification bell dropdown with mock alerts, and a quick "Test AI Agent" modal trigger button.

---

## 🗺️ THE 12 FRONTEND PAGES TO BUILD (A to Z)

Create complete frontend UI code for all 12 static page routes using rich mock data:

---

### 1. `/` — Public Marketing Landing Page
- **Hero Section:**
  - Headline: "Never Miss a Social DM, Lead, or Sale Again"
  - Subheadline: "Connect your Instagram, WhatsApp, TikTok, and Website DMs to an intelligent AI agent. Auto-reply in 2 seconds, qualify leads, and book appointments 24/7."
  - Primary CTA: "Start 14-Day Free Trial" -> Navigates to `/onboarding`.
  - Secondary CTA: "View Pricing" -> Navigates to `/pricing`.
  - **Interactive Live DM Simulator Widget:** A side-by-side preview showing an animated simulated chat window where a customer DMs an Instagram store asking about pricing, and the AI agent instantly responds with prices, captures their phone number, and confirms a calendar booking.
- **Features Grid (3x2 Cards):** Multi-Channel Automation, Auto Lead Extraction, Calendar Sync, Human Takeover, Abandoned Chat Recovery, Google Review Booster.
- **Social Proof Banner:** Metrics counters ("1.2M+ DMs Handled", "2.1s Avg Response", "99.4% CSAT").

---

### 2. `/pricing` — Interactive Dual-Currency Pricing Page
- **Interactive Currency Switcher:** Toggle button between `[ 🇳🇬 NGN (Naira) ]` and `[ 🇺🇸 USD (Dollars) ]`. Switching updates pricing cards instantly with React state.
- **Naira Tiers (NGN):**
  - **Starter (₦15,000/mo):** 2 Channels (IG + WhatsApp), 300 DMs/mo, Instant FAQ replies.
  - **Growth (₦35,000/mo - *Featured "Most Popular"*):** ALL Channels (IG, WhatsApp, TikTok, Web Chat), 1,500 DMs/mo, Auto Lead Extraction, Order Details Capture.
  - **Agency (₦75,000/mo):** ALL Channels, Unlimited DMs, Priority Support, CRM sync.
- **Dollar Tiers (USD):**
  - **Starter ($49/mo):** 2 Channels, 500 DMs/mo.
  - **Pro ($99/mo - *Featured "Most Popular"*):** ALL Channels, 2,500 DMs/mo, Auto-Booking & Lead Recovery.
  - **Enterprise ($249/mo):** ALL Channels + Unlocked X (Twitter) API badge (`🔒 Pay-per-use X API`).
- Includes a feature comparison matrix table and interactive "Select Plan" buttons that trigger a mock checkout modal.

---

### 3. `/auth/login` & `/auth/signup` — Authentication UI
- Split-screen layout: Dark brand presentation on the left with customer quotes; modern login form on the right.
- Includes inputs for Email, Password, "Remember Me", "Sign In with Google" button, and Magic Link option.

---

### 4. `/onboarding` — 4-Step Business Setup Wizard UI
- Step progress bar at the top (1. Business Info -> 2. Working Hours -> 3. FAQ Base -> 4. Connect Channels).
- Interactive wizard letting users enter a mock business name, select industry tags (Fashion, Services, Real Estate, Medical), define working hours, paste sample FAQs, and click "Finish Setup" to land on the dashboard.

---

### 5. `/dashboard/integrations` — 9-Platform Channels Hub
- **3x3 Grid displaying all 9 communication platforms:**
  1. *Instagram DMs & Comments:* Green badge "Active & Listening" (`@lagos_boutique_official`).
  2. *WhatsApp Business:* Green badge "Active & Listening" (`+234 812 *** 4567`).
  3. *TikTok Business DMs:* "Connect Account" button.
  4. *Website Live Chat Widget:* Embedded code snippet block with interactive "Copy Script" button.
  5. *Email Support:* Active badge (`support@lagosboutique.com`).
  6. *Facebook Messenger:* "Connect Page" button.
  7. *Google Business Profile:* "Connect Profile" button.
  8. *Telegram Bot API:* "Connect Bot" button.
  9. *X (Twitter) DMs:* Locked badge (`Enterprise Plan Required`).
- Clicking any unconnected button triggers a realistic OAuth popup modal simulation that lets the user click "Authorize" to switch the card state to "Connected".

---

### 6. `/dashboard/ai-brain` — Knowledge Base & Prompt Configurator
- **System Prompt Text Editor:** Form to customize AI agent tone, dialect (e.g., "Friendly, polite, uses natural Nigerian Pidgin/English phrases").
- **FAQ Management Table:** Add/Remove interactive rows for Q&A pairs (Question, Answer, Category).
- **AI Controls Panel:** Temperature slider (0.1 Precise to 0.8 Creative), Auto-Reply Toggle switch (`ON`/`OFF`), and a "Save Brain Settings" button with toast notification.

---

### 7. `/dashboard/inbox` — Unified Omnichannel Inbox UI
- **3-Column Workspace Layout:**
  - *Column 1 (Conversations):* Filterable list by platform icons (IG, WhatsApp, Web Chat). Shows customer name, unread count badge, and snippet.
  - *Column 2 (Active Chat):* Chat message stream showing incoming customer messages and AI replies tagged with `[AI Generated - Gemini 2.5 Flash]`. Includes message input box.
  - *Column 3 (Lead Drawer):* Customer profile showing extracted contact details (Phone, Email, Intent, Budget) and a prominent **Human Takeover Switch**. Clicking the switch pauses AI responses and highlights the thread in orange ("Human Agent Active").

---

### 8. `/dashboard/leads` — CRM & Captured Leads Table
- Searchable, filterable table populated with 10+ realistic mock customer leads.
- **Columns:** Customer Name, Phone Number, Email, Channel Source (with platform badge icon), Lead Status (`New`, `Qualified`, `Booked`, `Closed`), Notes, Date Captured.
- Top bar buttons for "Export CSV" and "Sync Google Sheets" (triggers mock success toast).

---

### 9. `/dashboard/calendar` — Appointments & Scheduling UI
- Google Calendar sync status panel at top (`Connected to Google Calendar`).
- Weekly interactive calendar view displaying auto-booked slots (e.g., "Plumbing Inspection with Sarah - 2:00 PM").
- Sidebar setting controls for booking duration (15 min, 30 min, 1 hr) and daily availability windows.

---

### 10. `/dashboard/analytics` — Performance & ROI Dashboard
- **Metric Summary Cards:** Total DMs Processed (`4,280`), Average Response Time (`2.1s`), Qualified Leads (`312`), Labor Hours Saved (`145 hrs`).
- **Data Visualizations:** Visual SVG/Tailwind chart cards representing daily DM volume per channel, peak traffic hours heat bar, and lead conversion percentage bars.

---

### 11. `/dashboard/billing` — Subscription Management UI
- Current Active Plan Card ("Growth Plan - ₦35,000/mo" or "Pro Plan - $99/mo").
- Progress usage meter bar ("1,840 / 2,500 DMs used this cycle").
- Upgrade/Downgrade buttons and an Invoice History table with "Download PDF" links.

---

### 12. `/dashboard/settings` — System & Workspace Settings
- Tabbed settings panel: General Profile, API Keys (Masked Gemini API key inputs with "Reveal" toggle), Webhooks, and Team Members.
- Team member list with role badges (Admin, Support Agent) and an "Invite Member" modal.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://agentflow-ui-kit.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3f90e858-ebdf-40c2-a457-f683c2ad9812).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
