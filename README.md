# Adriel Agustinus Jie — React Portfolio

A responsive React.js + Vite portfolio based on the supplied portfolio PDF. The charcoal palette, vector headlines, mountain artwork, logos, and portfolio content are preserved. Body typography uses a complete, locally bundled Inter font, and project previews rest on a generated high-resolution slate plinth. The supplied portrait and ten original project screenshots are included without cropping.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory. React is bundled locally; there are no external font, animation, or analytics requests.

## Photos and screenshots

1. Add images to `public/assets/uploads/`.
2. Open `src/content.js`.
3. Set `portrait` to `assets/uploads/portrait.jpg` (or your chosen filename), and `portraitSize` to its `[width, height]` in pixels.
4. Set each project's `screenshot` and `secondaryScreenshot` paths, plus their `screenshotSize` and `secondaryScreenshotSize` arrays as `[width, height]` in pixels.
5. Empty or unavailable images keep the designed placeholder. Portraits and screenshots show the complete image. Project frame proportions match each source image, so screenshots fill the frame without cropping, stretching, or empty side bars. The portrait extends behind the frame at its left, right, and bottom edges to hide the PNG’s feathered white border, which otherwise lets the dark background show through. `portraitFrameInset` records those source-pixel edges; the photo retains its original proportions and its PNG is unchanged. `portraitHeadroom` reserves 12% above the head, with the dark background and glow preserved. The backing beneath the shirt matches the white frame so rotation does not leave a dark seam along the sides or bottom.

Project names, descriptions, roles, years, technologies, and GitHub links are editable in the same file. Other content lives in the corresponding component in `src/components/`.

## React structure

- `src/App.jsx`: page composition, motion preference, scroll indicator, email feedback.
- `src/components/`: Header, Hero, About, Projects, Experience, Contact, reusable Reveal and ImageSlot.
- `src/hooks/motion.js`: section reveals, reduced-motion preference, scroll progress.
- `src/content.js`: project data and image paths.
- `src/styles.css`: original responsive design and motion styles.
- `public/assets/`: original extracted PDF artwork, local fonts, and supplied user images.

## Motion behavior

- Content fades and rises into view as you scroll down. Elements can animate again after leaving below the viewport and being revisited.
- Hero and contact mountains stay anchored to their sections, without parallax or pointer tracking.
- Hero and Contact mountains fill their visual area with a soft lower edge. Narrow-screen mountains are enlarged with a restrained glow near the artwork. The cover fills the current viewport, including tall phones and tablets; short landscape screens use a compact two-column cover.
- Experience has no decorative stone. All five projects use the same 2172 × 724 transparent slate plinth. Their two frames follow the original image ratios and sit side by side without covering each other, scaling together with the stone in one scene. The full scene stays within the page and is capped relative to viewport height.
- The navigation stays fixed while scrolling. The mobile menu fades and slides open/closed; closed links are inert, and Escape restores focus to the menu button. Anchor destinations begin at the top of the viewport, with section content padded below the header.
- Content sections fill at least one viewport; Contact stretches its main content and keeps its footer at the bottom, while short screens can scroll naturally.
- `prefers-reduced-motion` disables reveal animations, and smooth scrolling.
- Project changes animate the incoming text and screens; decorative stones stay still. Tabs support arrow keys, Home, and End.

## Verification

`npm test` checks the scroll progress bounds. Production builds compile the complete React app. Layout checks cover 320px, 390px, and 440px phones; 667px and 844px landscape phones; 768px and 1024px tablets; and 1440px and 2560px desktops with no horizontal page overflow. All five project tabs load the new plinth. Each screen frame and the full stone image stays within the scene. Navigation checks cover section alignment, the fixed header, mobile menu closing, and full-height Contact layouts. Hero, Contact, Projects, and Experience were visually inspected.

Original PDF title vectors retain exact letterforms. Body text uses Inter at weight 400, with deliberate heading emphasis, eliminating mixed-weight glyphs from the previous reconstructed PDF font. Inter is self-hosted, and its OFL license is included in `public/assets/inter-LICENSE.txt`. The PDF itself is not bundled. User-supplied portrait and project PNGs are preserved in `public/assets/uploads/`.

The new stone asset and its generation prompt are documented in `docs/visual-assets.md`. Mobile Phone, LinkedIn, GitHub, and Copy email share one wrapping contact row. Mobile Phone retains the original telephone link without displaying the number, and includes an arrow. The header’s Projects count and Let’s connect arrow are removed.

Project previous/next buttons sit on the left/right of the horizontally scrollable project names, with smaller visible circles and 44px touch targets; changing projects keeps the selected name visible. The stone has soft silhouette and ground shadows. On portrait phones, the cover title is smaller and its text group sits lower, while the 2026 badge stays level without an arrow.

The eleven supplied PNGs were copied unchanged and verified against their originals. All ten project screenshots loaded with contain sizing across the five tabs on desktop and phone. Checks at 320, 390, 440, 768, 1024, and 1440px confirmed no horizontal page overflow, arrows on opposite sides of the names, and an active project name that remains visible after resizing. The portrait and its dark glow were visually checked on desktop and phone.

Frame-fit verification: all ten screenshot frames were checked at 320, 440, 768, and 1440px. Each frame interior matches its source image ratio, both frames remain inside the stone scene without overlapping, and the page has no horizontal overflow. Desktop and phone previews were visually inspected; the production build passed.

The Rundle previews now show the supplied dashboard and running-plan details, and LesVol uses the updated landing page and My Activities captures. Project arrows use centered SVG paths, avoiding font-baseline offsets inside their circles.
# My-Portfolio
