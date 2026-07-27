# Tejasvi Kesharwani — Portfolio

A premium, dark-themed, fully responsive personal portfolio built with
**React + Vite + Tailwind CSS + Framer Motion**. Populated with real
content pulled from your resume — just edit one file to make it
completely yours.

## ✨ Features

- Glassmorphism UI with animated gradient background, floating blobs,
  and drifting particles
- Custom cursor glow / mouse-follower (desktop only)
- Typing animation in the hero (Typed.js)
- Scroll progress bar, back-to-top button, custom scrollbar
- Animated navbar with active-section highlighting + mobile menu
- Tilt-on-hover project cards, masonry achievement gallery, certificate
  gallery — both open a fullscreen animated modal on click
- Animated experience timeline
- **Live GitHub stats** (public repos / followers / following) pulled
  from the GitHub REST API, plus a contribution graph and top-languages
  card
- Coding profile cards (LeetCode, HackerRank, CodeChef, Codeforces)
- Contact form wired for **EmailJS** + Google Maps embed
- Lazy-loaded images with graceful "Add image" placeholders
- Loading screen, smooth scrolling, SEO meta tags

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## ✏️ How to edit your content

Everything text/content-related lives in **one file**:

```
src/data/portfolioData.js
```

Open it and edit: your name, titles, summary, education, skills,
projects, achievements, certificates, experience, coding profiles,
GitHub username, and contact details. No need to touch any component
file for content changes.

## 🖼️ Adding your own images

Folders are already set up under `src/assets/images/`:

```
src/assets/images/
  profile/        → your hero photo (already added: profile.jpg)
  projects/       → project screenshots
  achievements/   → achievement/award photos
  certificates/   → certificate scans/photos
  experience/     → company/institution logos
```

Drop an image into the right folder, then update the matching `image`
(or `logo`) path in `src/data/portfolioData.js`. Until you do, each
card shows a friendly "Add image" placeholder instead of a broken
image icon.

## 📄 Resume

Your resume PDF has already been placed at `public/resume.pdf`, and the
"Download Resume" button in the hero points at it
(`personal.resumeFile` in the data file). Replace `public/resume.pdf`
with an updated version whenever you refresh your resume — no code
change needed.

## 📧 Setting up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) so it works
without a backend:

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. Gmail) → copy the **Service ID**.
3. Create an **Email Template** with variables `from_name`,
   `from_email`, and `message` → copy the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Paste all three into `src/data/portfolioData.js`:

   ```js
   export const contact = {
     ...
     emailjs: {
       serviceId: 'service_xxxxxxx',
       templateId: 'template_xxxxxxx',
       publicKey: 'your_public_key',
     },
   }
   ```

Until configured, submitting the form shows a friendly message
pointing people to your email address instead of failing silently.

## 🐙 GitHub stats & profiles

Your GitHub username is already set to `tejasvikeshari` in
`src/data/portfolioData.js` under `export const github = { username: ... }`.
The stats, contribution graph, and top-languages card fetch live from
the public GitHub API and from the public `github-readme-stats` /
`ghchart` image services — no keys required. Update the coding-profile
usernames/URLs (LeetCode, HackerRank, CodeChef, Codeforces) in the same
file, and add ratings if you'd like them displayed.

## 🗺️ Google Maps

The contact section embeds a Google Maps iframe using
`contact.mapsEmbedUrl` in the data file. To get your own embed URL:
Google Maps → Share → Embed a map → copy the `src` from the generated
`<iframe>` and paste it in as `mapsEmbedUrl`.

## 🎨 Theming

Colors, gradients, shadows, and animation keyframes are defined in
`tailwind.config.js` under `theme.extend` (see `accent`, `base`,
`boxShadow.glow`, etc.) — tweak these to change the whole site's
palette in one place. Component-level utility classes like
`.glass-card`, `.btn-primary`, `.section-title` live in `src/index.css`.

## 📁 Project Structure

```
src/
├── assets/images/        → profile, projects, achievements, certificates, experience
├── components/           → one file per section (Hero, About, Skills, Projects, ...)
├── data/portfolioData.js → all editable content
├── hooks/                → useScrollSpy, useScrollProgress
├── utils/                → LazyImage, TiltCard
├── App.jsx
└── main.jsx
```

## 🧰 Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · React Icons ·
Typed.js · AOS · EmailJS · React Router DOM (installed, ready if you
want to split into multiple routes later)

## 📦 Deploying

This is a standard Vite app — deploy the `dist/` folder (after
`npm run build`) to **Vercel**, **Netlify**, **GitHub Pages**, or any
static host. For Vercel/Netlify, just connect the repo and use the
default build command (`npm run build`) and output directory (`dist`).

---

Built with ❤️ using React & Tailwind CSS.
