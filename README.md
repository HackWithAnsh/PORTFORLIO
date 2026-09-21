# Ansh Maheshwari — Developer Portfolio

A fast, dark-themed portfolio built with plain **HTML, CSS and vanilla JavaScript**. No frameworks, no build step, no dependencies (only Google Fonts).

## 1. Folder structure

```
portfolio/
├── index.html          Page structure, SEO / Open Graph tags
├── css/
│   └── style.css       All styling. Colours, spacing, radius, motion are variables at the top
├── js/
│   └── script.js       CONFIG block (all your content) + navigation, animations, form
├── assets/
│   ├── images/         Profile photo, project visuals, social preview image
│   └── icons/          Favicon
└── README.md
```

Everything personal lives in **one place**: the `CONFIG` object at the top of `js/script.js`. The HTML only holds structure.

## 2. Run it locally

**Simplest:** double-click `index.html`. It works straight from the file system.

**With a local server** (closer to how it behaves online):

```bash
cd portfolio
python -m http.server 8000
# then open http://localhost:8000
```

Or install the *Live Server* extension in VS Code, right-click `index.html` → *Open with Live Server*.

## 3. Add your profile photo

1. Put your photo in `assets/images/`, e.g. `profile.jpg`.
   A portrait about **860 × 990 px** works well; keep it under ~300 KB.
2. In `js/script.js`, change:
   ```js
   profileImage: "assets/images/profile.jpg",
   profileAlt: "Portrait of Ansh Maheshwari",
   ```

## 4. Add your resume

1. Save your resume as `assets/Ansh-Maheshwari-Resume.pdf` (create the file, or pick another name).
2. If you use another name or location, update `resume:` in `CONFIG`.

File names are case-sensitive on GitHub Pages, so match them exactly.

## 5. Change your GitHub, LinkedIn and email

In `CONFIG` (`js/script.js`):

```js
email: "your.email@example.com",
github: "https://github.com/your-username",
linkedin: "https://www.linkedin.com/in/your-profile/",
```

These update the hero icons, contact section, footer and the contact form in one go.

Anything still set to a placeholder is highlighted on the page, and the browser console (F12) lists what's left to fill in.

Also update the **`<head>` of `index.html`**: the `og:url`, `og:image` and `twitter:image` URLs should point to your live site once deployed. Those tags have to live in the HTML so link previews can read them.

## 6. Add or edit projects

Open `js/script.js` and find `projects: [ ... ]`. Each project is one object:

```js
{
  title: "My New Project",
  description: "One or two sentences on what it does.",
  tech: ["Java", "MySQL"],                       // easy-to-edit list
  image: "assets/images/my-project.png",         // 960 × 640 works well
  imageAlt: "Short description of the image",
  github: "https://github.com/you/my-project",   // "" hides the GitHub button
  demo: "https://you.github.io/my-project/",     // "" hides the Live Demo button
},
```

Copy one, paste it, edit it. Delete an object to remove a project. Cards alternate left/right automatically.

The same file also holds **skills, "currently learning", about text, stats, experience, education, and achievements**.

### Keeping things honest

- **Experience:** the entry is marked *Placeholder text*. Replace the description with what you really did, then set `placeholder: false`. Only change `type` to "Internship" if it was one.
- **Achievements:** each category shows "Nothing added yet." until you put real entries in its `items` array, e.g. `items: ["Smart India Hackathon — Participant"]`.
- **Stats:** the "5+" and "Multiple" values are yours to keep or change.

## 7. Change colours (and fonts)

Open `css/style.css` → section **1. DESIGN TOKENS**.

- **Accent colour:** change one line: `--accent-rgb: 243, 181, 98;` (R, G, B). The buttons, glow, highlights and hover states all follow.
- **Background / surfaces / text:** `--bg`, `--surface`, `--text`, `--muted`.
- **Spacing, radius, transitions:** `--space-*`, `--r-*`, `--t-*`.
- **Fonts:** swap the Google Fonts `<link>` in `index.html` and the `--font-*` variables.

The three project illustrations in `assets/images/*.svg` use the amber accent as a hard-coded hex (`#f3b562`). If you change the accent, find-and-replace that value in those files, or replace them with real screenshots.

## 8. Deploy to GitHub Pages

1. Create a new repository on GitHub, e.g. `portfolio` (public).
   For a shorter URL, name it `your-username.github.io` instead.
2. Upload the **contents** of this folder so `index.html` sits at the repo root:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**.
   Source: **Deploy from a branch** · Branch: **main** · Folder: **/ (root)** → **Save**.
4. After a minute, your site is live at
   `https://your-username.github.io/portfolio/` (or `https://your-username.github.io/` for the special repo name).
5. Update the `og:url` / `og:image` / `twitter:image` URLs in `index.html` to that address and push again.

Then add the link to your GitHub profile README, LinkedIn "Featured" section and resume.

## Contact form

The site is frontend-only, so **Send Message opens the visitor's email app** with the message pre-filled (a `mailto:` link). Nothing is sent by the website itself.

If you later want messages delivered without opening an email app, connect a form service such as Formspree, Web3Forms or EmailJS. That means replacing the `submit` handler in `initContactForm()` in `js/script.js`.

## Accessibility & performance notes

- Semantic landmarks, one `h1`, ordered headings, skip link, visible focus rings, labelled form fields.
- Respects `prefers-reduced-motion`.
- Background effects are CSS-only and use `transform` animation.
- Project images are lazy-loaded.
- No JavaScript libraries. The only external request is Google Fonts.

## Note on SEO

The page content is built by JavaScript from `CONFIG`. Google renders JavaScript, so it is indexed normally, but some social-preview crawlers only read the raw HTML. That is why the title, description and Open Graph tags are written directly in `index.html`.


## SEO setup
The portfolio includes SEO metadata directly in `index.html`, including a descriptive title, meta description, canonical URL, robots directives, Open Graph tags and Twitter/X card metadata. It also includes a `Person` JSON-LD schema for Ansh Maheshwari, plus `robots.txt` and `sitemap.xml` for search-engine discovery.

The profile image is served as an optimized WebP to reduce page weight. After deploying changes, submit `https://hackwithansh.vercel.app/sitemap.xml` in Google Search Console and request indexing for the homepage.

The page content is still rendered from `CONFIG` in JavaScript. The important identity and sharing metadata remains in raw HTML so crawlers and social-preview systems can read it without waiting for JavaScript.
