# Basit Sherazi — Developer Portfolio

Personal portfolio website for Basit Sherazi — DevSecOps engineer, cloud security practitioner, and Post-Quantum Cryptography researcher at DMI. Built with semantic HTML5, CSS custom properties, and vanilla JavaScript. No frameworks, no build step.

**Live:** https://basits-hash.github.io/basit-developer-portfolio/

---

## Screenshot

> _(screenshot placeholder — add `images/screenshot.png` after first deploy)_

---

## Features

- **Modern design system** — CSS custom properties for the full color, type, and spacing token set; dark mode via `prefers-color-scheme`
- **Typography** — Space Grotesk (display) + Inter (body) pairing
- **Responsive** — mobile-first layout tested at 320 / 375 / 768 / 1024 / 1440 px
- **Accessible** — semantic HTML5 landmarks, skip-link, ARIA labels, keyboard navigation, `prefers-reduced-motion` respected
- **Performance** — no render-blocking JS, `font-display: swap`, compositor-only animations (transform / opacity)
- **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy` all set via `<meta http-equiv>`
- **SEO** — meta description, Open Graph, Twitter Card, semantic heading hierarchy
- **CI/CD** — GitHub Actions pipeline deploys to GitHub Pages on every push to `main`; separate HTML/CSS lint workflow on PRs

## Sections

| Section | ID |
|---|---|
| Hero | `#hero` |
| About + Certifications | `#about` |
| Skills | `#skills` |
| Professional Experience | `#experience` |
| Featured Projects | `#projects` |
| Contact | `#contact` |

## Featured Projects

| Project | Repo |
|---|---|
| SIEM Dashboard | [BasitS-hash/siem-dashboard](https://github.com/BasitS-hash/siem-dashboard) |
| Secure Password Manager API | [BasitS-hash/Secure-PasswordManager-API](https://github.com/BasitS-hash/Secure-PasswordManager-API) |
| Incident Response Agent | [BasitS-hash/incident-response-agent](https://github.com/BasitS-hash/incident-response-agent) |
| DevOps Task Manager | [BasitS-hash/dev-ops-stack](https://github.com/BasitS-hash/dev-ops-stack) |
| Cybersecurity Homelab | [BasitS-hash/cybersecurity-homelab2](https://github.com/BasitS-hash/cybersecurity-homelab2) |

## Run Locally

No build step required:

```bash
git clone https://github.com/BasitS-hash/basit-developer-portfolio.git
cd basit-developer-portfolio

# Option A — Python (built-in)
python3 -m http.server 8080

# Option B — Node
npx serve .

# Option C — VS Code
# Install the "Live Server" extension, then click "Go Live"
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy

Push to `main` — the `pages.yml` workflow handles deployment automatically via GitHub Actions → GitHub Pages.

You must enable GitHub Pages in repo **Settings → Pages → Source: GitHub Actions** before the first deploy.

## Structure

```
basit-developer-portfolio/
├── index.html          # Single-page HTML
├── styles/
│   └── style.css       # All styles — design tokens, layout, components
├── scripts/
│   └── script.js       # Nav toggle, scroll reveal, back-to-top, IntersectionObserver
├── images/
│   └── favicon.ico
├── assets/
│   └── resume.pdf
└── .github/
    └── workflows/
        ├── pages.yml   # Deploy to GitHub Pages
        └── lint.yml    # HTML validate + stylelint
```

## License

MIT — see [LICENSE](LICENSE).
