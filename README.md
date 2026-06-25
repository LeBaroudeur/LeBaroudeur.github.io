# Mehdi MSALLEM — MERN Portfolio

A full-stack developer portfolio built on the **MERN** stack:

```
MongoDB  ──►  Express REST API  ──►  React (Vite) frontend
  data          /api/*                  terminal-themed UI
```

- **Backend** (`server/`) — Express API serving profile/skills/projects/experience from MongoDB, plus a persisted **contact form** (`POST /api/contact`) with validation and rate limiting.
- **Frontend** (`client/`) — React + Vite single-page app with a terminal/hacker aesthetic (matrix background, typewriter, scroll reveals). Ships with **embedded fallback data**, so it renders even when the API is offline; a navbar badge shows whether it's reading from the live API.
- **Bilingual (FR/EN)** — a navbar toggle switches the whole site between French and English instantly (no reload). Content is bilingual (`{ en, fr }`) end-to-end, from MongoDB through the API to the React `LanguageContext`. Choice is remembered in `localStorage` and auto-detected from the browser.
- **Graceful degradation** — no MongoDB? The API serves seed data and the contact endpoint accepts (without persisting). Everything still works for a quick demo.

---

## Architecture

```
mern-portfolio/
├─ server/                 Express + Mongoose API
│  ├─ src/index.js         app entry, middleware, error handling
│  ├─ src/config/db.js     Mongo connection (non-fatal if unavailable)
│  ├─ src/models/          Project, Experience, Message (Mongoose schemas)
│  ├─ src/controllers/     portfolio + contact logic
│  ├─ src/routes/api.js    REST routes + rate limiter
│  └─ src/seed/            canonical data + seed script
└─ client/                 React + Vite
   ├─ src/components/       Hero, Skills, Projects, Experience, Contact, ...
   ├─ src/hooks/usePortfolio.js   loads API data, falls back to embedded data
   ├─ src/api.js            fetch wrapper
   └─ src/data/fallback.js  offline content
```

### API endpoints
| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Liveness check |
| GET | `/api/profile` | Identity, roles, contact links |
| GET | `/api/skills` | Skill domains |
| GET | `/api/projects` | Projects (from MongoDB, else seed) |
| GET | `/api/experience` | Work history (from MongoDB, else seed) |
| GET | `/api/education` | Education |
| POST | `/api/contact` | Save a contact message (validated, rate-limited) |

---

## Quick start

### Prerequisites
- Node.js 18+
- MongoDB (local `mongodb://127.0.0.1:27017` or Atlas) — **optional** for a demo run

```bash
# from mern-portfolio/
npm install                 # root tooling (concurrently)
npm run install:all         # installs server/ and client/ deps

# configure env
cp server/.env.example server/.env      # set MONGO_URI if you have Mongo
cp client/.env.example client/.env      # leave VITE_API_URL blank in dev

# (optional) load data into MongoDB
npm run seed

# run API (:5000) + client (:5173) together
npm run dev
```

Open **http://localhost:5173**. The navbar shows `API: live` when the frontend is talking to Express.

### Run pieces individually
```bash
npm run dev:server     # Express only, http://localhost:5000
npm run dev:client     # Vite only,    http://localhost:5173
```

---

## Deployment

**Live at [mehdi-msallem.me](https://mehdi-msallem.me)** — hosted on GitHub Pages.

- The `main` branch holds the source; the built site is published to the `gh-pages`
  branch, which GitHub Pages serves (custom domain via `client/public/CNAME`).
- **Redeploy after any change** with one command:
  ```bash
  npm run deploy        # builds client/ and force-pushes client/dist to gh-pages
  ```
- The contact form falls back to a `mailto:` when no backend API is reachable, so the
  static deploy is fully functional; with the backend live it posts to MongoDB instead.

### Optional: live backend
Deploy `server/` to Render/Railway/Fly.io with `MONGO_URI` (MongoDB Atlas) and
`CLIENT_ORIGIN`, then set `VITE_API_URL` in `client/.env` to the API origin and redeploy.
The navbar badge will switch to `API: live`.

---

## Edit your content
All content lives in two mirrored files — update both (or seed from the server one):
- `server/src/seed/data.js` — source of truth, seeds MongoDB
- `client/src/data/fallback.js` — offline copy

Each translatable field is `{ en, fr }`; language-neutral fields (titles, stacks, links) are plain values.

Projects can carry either a `repo` (external link, opens in a new tab) **or** a
`report` (path to a PDF in `client/public/reports/`, opens the in-app PDF reader).
The three academic projects (`predictive-cti`, `mesalin`, `odc-attendance`) use
reports; the rest link to GitHub.

Note: confirm the LinkedIn URL in the data files (currently `linkedin.com/in/mehdi-msallem`).
