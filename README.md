# Dharmendra Reddy M S — Portfolio

A fully animated, fully responsive personal portfolio built with React, Tailwind CSS, and Framer Motion. Features a dark/light theme toggle, a signature "object-detection" bounding-box motif (a nod to the YOLOv3 project in here), scroll-triggered animations throughout, and a 7-page site structure.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS (dark mode via `class` strategy) |
| Animation | Framer Motion |
| Icons | lucide-react |
| Fonts | Space Grotesk, Fraunces, Inter, JetBrains Mono (Google Fonts) |
| Deployment | Vercel (zero-config) |

No backend — this is a fully static site. The contact form opens the visitor's email client with the message pre-filled (see "Contact form" below for how to upgrade this).

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/         Reusable UI pieces (Navbar, Footer, Reveal, DetectionFrame, etc.)
│   └── home/            Homepage-only section components
├── context/             ThemeContext (dark/light toggle + localStorage persistence)
├── data/
│   └── content.js        ⭐ ALL portfolio text/data lives here — edit this file first
├── hooks/                Custom hooks (typed text, animated counter, custom cursor)
├── pages/                One file per route (Home, About, Skills, Experience, Projects, Certifications, Contact)
├── App.jsx               Top-level layout (theme provider, router, navbar/footer shell)
└── main.jsx              React entry point
```

## How to Customize

### Update your content
Almost everything — your name, bio, skills, projects, experience, certifications, FAQ — lives in **`src/data/content.js`**. Edit the values there; you generally won't need to touch component files at all.

A few placeholders to fill in:
- `personal.linkedin` and `personal.github` — currently `#`, add your real profile URLs
- `personal.resumeUrl` — add a link to a hosted resume PDF if you want a "Download Resume" button
- `projects[].liveUrl` / `projects[].githubUrl` — currently `#` for most projects, add real links as you have them

### Swap your photo
Replace `public/photo.jpg` with your own image (same filename, or update the `src="/photo.jpg"` references in `HeroSection.jsx` and `AboutSnapshotSection.jsx` and `About.jsx` if you rename it).

### Change the color palette
All colors are defined as design tokens in `tailwind.config.js` under `theme.extend.colors`. The `paper-*` tokens are the light theme, `carbon-*` are the dark theme, and `signal` / `amber` / `cobalt` are the shared accent colors (with `-light` variants used in light mode for sufficient contrast on a white background).

### Default theme
The site defaults to light mode on first visit. To change this, edit the inline script in `index.html` (the flash-prevention script) and the initial state in `src/context/ThemeContext.jsx`.

## Contact Form

The contact form on `/contact` currently has **no backend** — it's a static site. Submitting it opens the visitor's default email client with a pre-filled message (via a `mailto:` link), which is a reliable zero-infrastructure fallback.

To wire up a real backend (so messages land in an inbox or database without relying on the visitor's email client), pick one:

- **[Formspree](https://formspree.io)** or **[Web3Forms](https://web3forms.com)** — paste-in form action URL, free tier, no server code needed. Easiest option.
- **[Resend](https://resend.com) + a Vercel Serverless Function** — add a `/api/contact.js` file, call Resend's API to send yourself an email. More control, still simple.
- **EmailJS** — sends straight from the browser via their JS SDK, no backend at all.

The relevant code to replace is the `handleSubmit` function in `src/pages/Contact.jsx`.

## Deploying to Vercel

1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — no configuration needed. Click **Deploy**.
4. Done. Vercel will give you a live URL, and redeploy automatically on every push to your main branch.

The included `vercel.json` ensures client-side routes (like `/projects` or `/contact`) work correctly when visited directly or refreshed, instead of 404ing.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: animated portfolio rebuild"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## Browser Support

Targets all modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Uses CSS Grid, Flexbox, and modern JS (ES2020+), all well-supported. Animations gracefully degrade on reduced-motion preferences are respected by Framer Motion where applicable.

## License

This is a personal portfolio. Feel free to use the structure/code as a learning reference, but please don't reuse the personal content (name, bio, project descriptions) as your own.
