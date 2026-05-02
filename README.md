# Emperor Mining Consultancy Limited — Website

Professional Next.js 14 website for **Emperor Mining Consultancy Limited (EMC)**.

> "Unlocking Value Beneath the Surface"

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Netlify Forms | Contact form |
| Netlify | Hosting |

---

## Running Locally

### Prerequisites
- Node.js 18 or later
- npm 9 or later

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build for production

```bash
npm run build
npm run start
```

---

## How to Swap Images

All images live in `/public/images/`. Replace each placeholder file with a real photo.
See `/public/images/README.txt` for the full image guide with recommended dimensions.

**Quick reference:**

| File | Section | Recommended Size |
|---|---|---|
| `hero-bg.jpg` | Hero background | 1920×1080px landscape |
| `about-operations.jpg` | Who We Are | 800×600px portrait/square |
| `gallery-open-pit-panoramic.jpg` | Gallery slot 1 | 800×600px |
| `gallery-drill-rig-operations.jpg` | Gallery slot 2 | 800×600px |
| `gallery-mineral-sample-inspection.jpg` | Gallery slot 3 | 800×600px |
| `gallery-geological-mapping-field.jpg` | Gallery slot 4 | 800×600px |
| `gallery-excavator-quarry.jpg` | Gallery slot 5 | 800×600px |
| `gallery-core-samples-tray.jpg` | Gallery slot 6 | 800×600px |
| `gallery-geochemical-survey.jpg` | Gallery slot 7 | 800×600px |
| `gallery-trenching-pitting.jpg` | Gallery slot 8 | 800×600px |
| `gallery-aerial-mine-site.jpg` | Gallery slot 9 | 800×600px |
| `og-image.jpg` | Social share | 1200×630px |

**Tip:** Compress images before uploading using [TinyJPG](https://tinyjpg.com).

---

## Deploying to Netlify

### Option A — Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to a Netlify site (or create new)
netlify init

# Deploy to production
netlify deploy --prod
```

### Option B — Deploy via GitHub + Netlify Dashboard

1. Push this repository to GitHub.
2. Log in to [app.netlify.com](https://app.netlify.com).
3. Click **"Add new site" → "Import an existing project"**.
4. Connect your GitHub repository.
5. Netlify auto-detects the `netlify.toml` settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
6. Click **Deploy site**.

> The `@netlify/plugin-nextjs` plugin is required. Install it first:
> ```bash
> npm install -D @netlify/plugin-nextjs
> ```

---

## Connecting a Custom Domain

1. In the Netlify dashboard, go to **Site settings → Domain management**.
2. Click **"Add custom domain"** and enter your domain (e.g. `emperormining.com`).
3. Follow Netlify's DNS instructions:
   - If your DNS is managed by Netlify: point nameservers to Netlify.
   - If using external DNS: add a CNAME record pointing to your Netlify subdomain.
4. SSL/HTTPS is provisioned automatically by Netlify (Let's Encrypt).
5. **Update the following files** with your production domain:
   - `src/app/layout.tsx` — `alternates.canonical` and all `https://emperormining.com` references
   - `src/app/sitemap.ts` — `baseUrl` variable
   - `src/app/robots.ts` — `sitemap` URL
   - `src/lib/schema.ts` — `url` field

---

## Updating Content

### Contact details
Edit `src/components/Contact.tsx` and `src/components/Footer.tsx`.

### Services
Edit the `SERVICES` array in `src/components/Services.tsx`.

### Navigation links
Edit the `NAV_LINKS` array in `src/components/Navbar.tsx`.

### Hero text / stats
Edit `src/components/Hero.tsx`.

### Who We Are copy
Edit `src/components/WhoWeAre.tsx`.

### Gallery captions / images
Edit the `GALLERY_IMAGES` array in `src/components/Gallery.tsx`.

### SEO metadata
Edit `src/app/layout.tsx` (title, description, keywords, Open Graph).

### Structured data (JSON-LD)
Edit `src/lib/schema.ts`.

---

## Netlify Forms Setup

The contact form works automatically via Netlify Forms on Netlify hosting.

**No additional setup needed** — the `data-netlify="true"` attribute on the form
tells Netlify to handle submissions.

To view submissions:
1. Go to your site in the Netlify dashboard.
2. Navigate to **Forms** in the left sidebar.
3. Click the **"contact"** form to see all submissions.

To set up email notifications for new submissions:
1. Go to **Forms → Form notifications**.
2. Add an email notification with your address.

---

## Brand Colors

```
Primary (orange):  #E87722   — Tailwind class: mining-orange
Secondary (black): #1A1A1A   — Tailwind class: mining-black
Accent (cream):    #F5F0EB   — Tailwind class: mining-cream
Deep black:        #0D0D0D   — Tailwind class: mining-deep
```

---

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, SEO metadata, JSON-LD
    page.tsx          # Homepage — assembles all sections
    globals.css       # Tailwind imports + global styles
    sitemap.ts        # XML sitemap generation
    robots.ts         # robots.txt generation
  components/
    Navbar.tsx        # Fixed nav with active section tracking
    Hero.tsx          # Full-viewport hero with CTA
    WhoWeAre.tsx      # About section with image
    Services.tsx      # Three-card services grid
    Gallery.tsx       # 9-image operations gallery
    Contact.tsx       # Netlify form + contact info
    Footer.tsx        # Footer with links and contact
    WhatsAppButton.tsx # Floating WhatsApp CTA
  lib/
    schema.ts         # JSON-LD business structured data
public/
  images/             # Replace placeholders with real photos
  _redirects          # Netlify redirect rules
netlify.toml          # Netlify build config
```

---

*Built for Emperor Mining Consultancy Limited.*
