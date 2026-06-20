# Patrick Capaldo — Personal Portfolio

My minimalist personal website and portfolio tracker built with **Eleventy (11ty)**, featuring standard layout engines, dark mode toggle support, a subtle custom purple design flavor, and a clean typography grid.

---

## 🏗️ Repository Architecture

This codebase is split into two halves: the **source files** (tracked on the `master` branch) and the **production assets** (compiled and deployed from the `gh-pages` branch).

```text
patrickcapaldo.github.io/
├── .git/                 # Git tracking engine
├── src/                  # YOUR MAIN WORKING DIRECTORY
│   ├── _includes/        # Structural layout wrappers (.njk templates)
│   ├── assets/           # Global styles, fonts, images, and media
│   ├── contact.njk       # Contact page template
│   ├── index.njk         # About/Home page template
│   ├── projects.njk      # Projects tracker layout engine
│   └── thoughts/         # Markdown (.md) blog posts directory
├── _site/                # Auto-generated build outputs (NEVER edit directly)
├── eleventy.config.js    # Eleventy asset pipeline routing rules
├── package.json          # Node dependencies and project configuration
└── README.md             # This operations manual

```

---

## 🛠️ Local Development Pipeline

To run the local development server to test changes, add blog posts, or preview code tweaks before pushing them live:

1. **Open your WSL Workspace terminal:**
```bash
cd ~/projects/patrickcapaldo.github.io

```


2. **Boot up the hot-reloading development environment:**
```bash
npm start

```


*(Alternatively, you can run `npx @11ty/eleventy --serve`)*
3. **Open your browser:** Go to `http://localhost:8080` to view and interact with your site live as you save your source files.

---

## 🚀 Deployment Playbook (How to Push Live)

Because GitHub Pages serves your compiled static files directly out of the `gh-pages` branch, editing `master` alone will not update the live site.

Whenever you finish making modifications or writing content, run this clean two-step production compile sequence to launch the updates live to `https://patrickcapaldo.github.io/`:

```bash
# Step 1: Compile the raw layout code into optimized production assets
npx @11ty/eleventy

# Step 2: Push the newly built '_site' production folder directly into the live deployment pipeline
npx gh-pages -d _site

```

### 💾 Optional: Keeping your Source Files Backed Up

To ensure your source files (`src/`, `eleventy.config.js`, etc.) stay safely backed up inside your GitHub cloud history, run a standard git commit push on your main development tracking branch:

```bash
git add .
git commit -m "content: add new post and refine styles"
git push origin master

```

---

## 🎨 Key Design Tokens & Settings

* **Framework:** Eleventy v3.x
* **Core Fonts:** Serif: *EB Garamond* | Sans-serif: *Inter*
* **Theme System:** Native data-theme switching hooks (`[data-theme="dark"]`)
* **Signature Accent Variable:** `--brand-purple` coordinates the custom theme layout lines across light and dark formats automatically.

```
