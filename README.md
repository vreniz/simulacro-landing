# 🌙 Sabores Bajo la Luna — Night Food Festival

> *A fully responsive landing page for a fictional Caribbean night food festival, built from scratch with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.*

---

## 📌 Description

**Sabores Bajo la Luna** is a multi-section promotional landing page designed to simulate a real-world client project. The goal was to build a polished, production-quality page that demonstrates frontend fundamentals: semantic structure, clean CSS architecture, interactive components, and responsive design across all screen sizes.

The project features a hero section with a real background image and animated entrance card, CSS-only flip cards for the food zones, an image gallery with hover zoom, an embedded YouTube video, a sponsor grid, and a functional email form — all without a single external dependency.

---

## 🛠️ Technologies Used

<img src="./assets/icons/html.svg" alt="HTML5 Icon" height="48"> &nbsp;
<img src="./assets/icons/css.svg" alt="CSS3 Icon" height="48"> &nbsp;
<img src="./assets/icons/javascript.svg" alt="JavaScript Icon" height="48">

- **HTML5** — Semantic structure with ARIA accessibility attributes
- **CSS3** — Custom properties, Flexbox, Grid, CSS transitions, responsive media queries
- **JavaScript ES6+** — Vanilla, no frameworks or libraries
- 🔤 [Google Fonts](https://fonts.google.com/) — Bebas Neue (display) + Inter (body)

---

## 📁 Project Structure

```bash
simulacro-landing/
│
├── index.html          # 🏠 Main landing page
├── script.js           # ⚙️  JavaScript — badge animation, burger menu close
│
├── css/
│   └── styles.css      # 🎨 Main stylesheet — all sections and responsive rules
│
├── assets/
│   ├── img/            # 🖼️  Hero background, about image, gallery photos, zone images
│   └── icons/          # 🔷 SVG social icons + sponsor logos
│
└── README.md           # 📖 You are here!
```

---

## 📄 Page Sections

### 🌙 Hero
Full-viewport section with a real background photo applied via CSS `::before`. Includes the festival headline, a description, two CTA buttons, a decorative gold moon circle, and an SVG wave. A "Main Attraction" badge card animates in on load and fades out automatically using JavaScript.

### 📅 Upcoming Dates
A horizontally scrollable table listing the three festival cities — Barranquilla, Cartagena, and Santa Marta — with dates, schedules, and main attractions. On mobile the table scrolls horizontally while keeping its full column structure intact.

### 🍽️ About the Festival
A two-column section with a real photo on the left (using `object-fit: cover` for precise framing) and editorial text on the right, including a bullet list of festival experiences.

### 🗺️ Food Zones
Four CSS-only flip cards — no JavaScript. Each card shows an emoji, zone name, and description on the front. On hover it rotates to reveal a full background photo of that zone with a text overlay. The flip uses `perspective`, `backface-visibility`, and `:hover` exactly like the classic reference technique.

### 🖼️ Gallery
An asymmetric CSS Grid layout with four image cards: one tall card spanning two rows, one wide card spanning two columns, and two standard cards. Images use `object-fit: cover` with a subtle scale-up on hover. Each card has a labeled footer strip.

### 🎬 Festival Highlights
Embedded YouTube iframe with a responsive `aspect-ratio: 16/9` container and a supporting description.

### 🎟️ Get on the List
A CTA section with an email input and submit button styled as pill shapes. The gradient background matches the overall warm dark palette.

### 🤝 Sponsors
A four-card grid displaying sponsor logos with fallback hiding via `onerror` if an image is missing.

### 🖤 Footer
Four-column footer with brand info, contact details, SVG social media icon links, and quick navigation links. Collapses to a single column on mobile.

---

## ✨ Key Features

- 🌙 Hero background image set entirely in CSS via `::before` — swap the image by changing one `url()` value
- 🃏 CSS-only flip cards with `perspective` + `backface-visibility` — zero JavaScript
- 🎞️ Gallery with `object-fit: cover` and hover zoom transition
- 📱 Responsive navigation with a CSS-only hamburger menu (hidden checkbox technique)
- ⚡ JavaScript closes the burger menu automatically when a nav link is tapped on mobile
- 🏷️ "Main Attraction" badge animates in 600ms after load and fades out 3s later
- 🖼️ About image uses `<img>` with `object-position` for precise framing of people photos
- 🔍 Horizontal scroll table on mobile — full column structure preserved, no card stacking
- 🎨 CSS custom properties for consistent color, spacing, and typography across all sections
- ♿ Semantic HTML throughout (`header`, `main`, `section`, `article`, `footer`, `nav`) with ARIA labels
- 📦 No npm, no build step, no external JS libraries — opens directly in any browser

---

## 📱 Responsive Design

Three breakpoints cover all common screen sizes:

| Breakpoint | Target |
|---|---|
| `max-width: 1024px` | Tablet — hero collapses to single column, zones to 2×2 grid |
| `max-width: 735px` | Mobile — burger menu appears, table scrolls, footer stacks |

---

## 🚀 How to Run

### Option 1 — Open directly in the browser

1. Clone or download the repository:

```bash
git clone https://github.com/your-username/simulacro-landing.git
```

2. Open the project folder and locate `index.html`.
3. Double-click the file or right-click → **"Open with browser"**.

### Option 2 — Live Server in VS Code ⚡ (Recommended)

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` → **"Open with Live Server"**.

> The page reloads automatically on every file change. Best option for development.

---

## 🖼️ Image Assets

Place your images in `assets/img/` and update the paths in the relevant rules:

| Asset | Where to change |
|---|---|
| Hero background | `.hero::before` in `styles.css` — update the `url()` |
| About photo | `<img src="assets/img/...">` in the About section of `index.html` |
| Gallery photos | `<img src="assets/img/...">` inside each `.gallery-card-inner` |
| Zone back images | `.street`, `.asian`, `.desserts`, `.drinks` classes in `styles.css` |
| Sponsor logos | `<img src="assets/icons/...">` in the Sponsors section |

---

## 📝 Notes

- All JavaScript is vanilla ES6. Two small scripts handle the badge card animation and the burger menu auto-close on link tap.
- The contact form uses `action="#"` and does not submit data to a server.
- Social icon SVGs should be white so the CSS `filter` on hover correctly shifts them to the gold color (`--gold: #c8a84b`).
- The CSS-only burger menu relies on `input[type="checkbox"]:checked ~ .nav-links`. No JavaScript is needed to open or close it — only to auto-close it on anchor link taps.

---

## 👩🏻‍💻 Author

**Vanessa Fontalvo Reniz**
Systems & Computing Engineer | Frontend Developer

---

*Made with ♥*