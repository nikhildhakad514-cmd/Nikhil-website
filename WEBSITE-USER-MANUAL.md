# Website Owner's Manual

**A beginner's guide to updating, previewing, and publishing Nikhil Dhakad's portfolio**  
Repository: [nikhildhakad514-cmd/Nikhil-website](https://github.com/nikhildhakad514-cmd/Nikhil-website)  
Live site: [nikhild.dpdns.org](https://nikhild.dpdns.org/)

This guide is written for the current website, not for a generic website. It describes the files and patterns present in the repository audit on **21 October 2026**. The site is static, so most changes mean editing HTML text and occasionally copying an existing page pattern. There is no publishing dashboard or automatic article database.

## 1. Executive summary

Your website is a hand-built, static portfolio. Its pages are written in HTML, share styling through CSS, and use small JavaScript files for navigation and the homepage FAQ. There is no CMS, database, build step, or site framework in the repository. Articles and scripts are full HTML pages; lists and project cards are edited by hand in their listing pages.

This makes the site inexpensive and relatively simple to host, but adding a piece usually means updating more than one file: the content page, its listing page, and often the sitemap. The safest routine is to work on a separate Git branch, preview it, open a pull request, inspect Vercel's preview, and merge only after checking it.

**Audit limits:** I inspected the current repository and checked that local HTML links and image/script/style file references point to files that exist. The live site could not be loaded by the available web or browser tools during this audit. Vercel project settings were also unavailable to the connected account. I therefore cannot certify the current live appearance, external link availability, production branch setting, or current production deployment. A Vercel bot did report a **Ready** preview for the template-system pull request, and that pull request (#13) is now merged. Where deployment behavior is not proven by repository settings, this manual says so.

## 2. Website architecture and technology

### What happens when someone visits

```text
Visitor's browser
       │ requests a page
       ▼
Vercel serves the repository's HTML, CSS, JavaScript, and images
       │
       ├── HTML: words, links, page structure, and metadata
       ├── CSS: colors, spacing, typography, and mobile layout
       └── JavaScript: small menu and FAQ interactions
```

The repository is connected to GitHub at `https://github.com/nikhildhakad514-cmd/Nikhil-website`. The README describes Vercel static hosting, and Vercel posted a Ready preview deployment on PR #13. No `package.json`, framework configuration, server code, database configuration, or build script is present in the checked-out repository. The normal production process is likely Git-connected Vercel, but the project's production-branch setting was not inspectable here. Check it in Vercel before relying on a particular merge-to-publish rule.

| Part | Current implementation | What it means for you |
| --- | --- | --- |
| Pages | Plain `.html` files | Text, links, images, and metadata are directly editable. |
| Design | Shared CSS in `assets/css/` | Global CSS changes can affect several pages at once. |
| Interactions | Vanilla JavaScript in `assets/js/` | No JavaScript framework or package installation is needed for ordinary text changes. |
| Content storage | HTML plus local image files | There is no central content editor; pages and listings are maintained separately. |
| Hosting | Vercel is identified by the README and a PR preview check | PR previews have worked; confirm Production Branch and automatic production deployment settings. |
| Videos | No local video file and no `<video>` or `<iframe>` embed appears in the current HTML | Use an external video host for large videos; the embedding instructions below are a proposed pattern. |
| Templates | `content/templates/` Markdown library | Use these for planning and drafting; they do not automatically create a web page. |

### Existing limitations and things to handle carefully

- **Manual listings:** New notes and work items do not appear automatically. You add their cards by editing `notes.html`, `work.html`, and sometimes `index.html`.
- **Repeated navigation and FAQ:** The navigation is written into each page. The fixed FAQ markup is also repeated on several pages. A global wording change may need to be copied consistently to multiple files.
- **No video pipeline:** The `assets/videos/` folder exists, but the current repository contains no video files and no video embeds. Adding large `.mp4` files would enlarge the Git repository and every future checkout.
- **Large image files:** Several existing PNG thumbnails are around 1.5–1.8 MB. New artwork should be resized and compressed before adding it.
- **External dependencies:** Pages request Google Fonts, and the article `notes/mastering-skills.html` uses an image hosted on Medium. Those external services may load slowly or change. A locally stored, optimized image is more dependable when you have permission to use it.
- **Static contact:** The site has contact links, not a server-backed form. A `mailto:` link opens the visitor's email program; it does not send or store a message on the website.
- **No current CMS:** Markdown templates help organize drafts but do not publish themselves. A finished article still needs HTML and a listing entry.
- **Security:** Static HTML cannot safely hide passwords or private API keys. Do not paste secrets into any page, script, image metadata, or GitHub commit.
- **No root `.gitignore`:** no root ignore file was present in the audited checkout. Treat every new file shown in GitHub Desktop as something that could be uploaded; never put private drafts, credentials, or personal files inside the repository folder.
- **Accessibility:** the source includes a skip link, named navigation, image alt text, and Escape-key handling for menus/FAQ. A live keyboard, screen-reader, contrast, and mobile visual audit could not be completed, so include those checks in preview review.

## 3. Page-by-page map

| Address / file | Purpose | Where its content comes from |
| --- | --- | --- |
| `/` — `index.html` | Homepage introduction, selected work cards, featured note, and fixed FAQ assistant | Edit the page itself; it links to work, notes, about, and contact. |
| `/work.html` | Selected projects, scripts, and visual concepts | Project descriptions/cards and visual gallery are hand-written in this file. Detailed script pages live under `scripts/`. |
| `/notes.html` | Published writing plus questions being explored | Published article links and the question list are hand-written here. Detailed article pages live under `notes/`. |
| `/notes/mastering-skills.html` | Existing long article/essay | Article title, text, image, links, and page metadata are in this one HTML file. |
| `/scripts/faking-it.html` | Existing long-form video script | Hook variants, script chapters, production notes, cover image, and metadata are in this file. |
| `/scripts/why-most-young-men-feel-lost.html` | Existing short-form script | Script overview, sections, production direction, and metadata are in this file. |
| `/about.html` | Background, interests, and perspective | Page text and FAQ markup are in this file. |
| `/contact.html` | Contact details and ways to reach Nikhil | Text and email/contact links are in this file; there is no server form. |
| `/blog.html` | Legacy blog address | Immediately redirects to `notes.html` using a meta refresh and also provides a fallback link. Do not replace it with an article list. |

The root navigation currently links to Selected work, Notes, About, and Contact. `blog.html` exists as a legacy path and is not a current navigation item.

## 4. File and folder reference guide

| File or folder | What it does / what you can safely edit | Pages affected | Avoid changing without help / edit for new content? |
| --- | --- | --- | --- |
| `index.html` | Homepage text, featured cards, homepage note links, FAQ answers, page title and sharing metadata. | Homepage | Keep element tags and IDs intact. Edit when a new item should appear on the homepage. |
| `work.html` | The project descriptions, work cards, visual concepts, and their image references. | Selected work | Keep each card's wrapper and unique `id`; edit to add or remove a work item. |
| `notes.html` | Published article links and questions in progress. | Notes | This is a hand-maintained listing, not a content database. Edit for every new published note. |
| `notes/` | Individual article HTML pages. | Article URL | Copy an existing page and update its relative paths and metadata. Yes for a new article. |
| `scripts/` | Individual script HTML pages. | Script URL | Copy a similar script page and update its relative paths and metadata. Yes for a new script page. |
| `about.html`, `contact.html` | About and contact page content. | About / Contact | Content is safe to update; do not remove page landmarks or shared navigation. |
| `blog.html` | Legacy redirect or compatibility page. | Old blog URL | Avoid repurposing without checking its redirect and existing backlinks. |
| `assets/css/style.css` | Main site colors, typography, layout, mobile rules, and shared components. | Most pages | A selector can affect every matching element. Do not change for text-only edits. |
| `assets/css/reading.css` | Article and script reading-page styles. | `notes/` and `scripts/` reading pages | Change only for design/layout fixes; affects all reading pages. |
| `assets/css/script-reading.css` | Script-specific cards, chapters, stage directions, and production notes. | Script pages | A visual change may affect both long and short scripts. |
| `assets/css/faq-assistant.css` | Homepage/FAQ assistant visual presentation. | Pages that include the FAQ CSS | Avoid changing unless you intend a design change. |
| `assets/js/script.js` | Shared interactive behavior, including the responsive navigation. | Pages that load this file | Do not edit for content changes; incorrect script edits can disable navigation. |
| `assets/js/faq-assistant.js` | FAQ open/close and question interactions. | Pages that load the FAQ | Edit only when changing FAQ behavior, not its wording. |
| `assets/images/thumbnails/` | Local thumbnail and visual files. | Homepage/work/script pages that reference them | Add optimized images here; use the exact filename in the HTML. |
| `assets/videos/` | Presently empty of video files in the audited checkout. | None currently | Prefer external video hosting. Do not add large raw video files without a specific reason. |
| `content/templates/` | Markdown planning templates and workflow guide, merged through PR #13. | Does not render on the website | Safe to duplicate for drafts. These files are not web pages. |
| `sitemap.xml` | List of public page URLs for search engines. | Search discovery | Add each new public page URL; it does not create a page or a visible menu item. |
| `robots.txt` | Allows crawling and points crawlers to the sitemap. | Search discovery | Usually leave unchanged. |
| `README.md` | Project overview and high-level local preview/deployment notes. | Repository documentation only | It does not control the website. |
| `.vscode/launch.json` | Editor launch configuration. | Development only | Not needed for ordinary content changes. |
| `.git/` | Git's private history and repository data. | Version control | Never edit or delete files inside it by hand. |

### How do I find the right file?

| I want to change… | Open… | Usually also update… |
| --- | --- | --- |
| Homepage headline or featured work | `index.html` | Nothing, unless the link destination changes. |
| A project title, category, or description | `work.html` | `index.html` if the project is featured there. |
| A complete script | `scripts/` and a matching script HTML file | `work.html`, optional `index.html`, and `sitemap.xml`. |
| A finished article | `notes/` and a new HTML page | `notes.html`, optional `index.html`, and `sitemap.xml`. |
| A question/idea that is not yet an article | `notes.html` | Nothing else unless featured on the homepage. |
| Main menu link | All root and nested HTML pages that include `.site-nav` | Be careful: relative paths differ in nested pages. |
| Text color, spacing, layout, mobile appearance | `assets/css/style.css` or the page-specific CSS | Preview several pages and phone widths. |
| Mobile menu behavior | `assets/js/script.js` | Technical help recommended. |
| FAQ wording | HTML pages containing `.faq-panel` | Keep repeated FAQ copies consistent; do not change the JS. |
| FAQ interaction | `assets/js/faq-assistant.js` | Technical help recommended. |
| Page title in browser/search | The page's `<title>` in its HTML `<head>` | Description, canonical URL, and social metadata nearby. |
| Image displayed on a page | The page's `<img src="...">` | Alt text and, if shared, card/hero image metadata. |

## 5. Beginner's quick start

### The safest first change

1. Open the repository in [Visual Studio Code](https://code.visualstudio.com/download), a free text editor. Use [GitHub Desktop](https://desktop.github.com/) to manage copies and save points without typing commands. Install both only from their official sites if they are not already installed.
2. In GitHub Desktop, select the website repository and make sure the current branch says `main`. Click **Fetch origin** and then **Pull origin** if offered. This brings down the latest approved website changes.
3. Click **Current branch → New branch**. Give the branch a plain name such as `update-about-copy`. A branch is a separate work area, so your draft will not immediately replace the live site.
4. Open the same repository folder in VS Code. Use the left file list to open the page identified in “How Do I Make This Change?”.
5. Change only the words between the HTML tags. For example, replace text inside `<p>…</p>` while leaving the tags themselves in place.
6. Save the file. In GitHub Desktop, review the changed-file list and the red/green comparison. Red is removed text; green is added text.
7. Preview locally (see section 11). Then use GitHub Desktop's **Commit to …** button to name and save the change, and **Push origin** to send this branch to GitHub.
8. Create a pull request on GitHub. A pull request is a review page showing what you propose to change. Open the Vercel preview link if one appears and test it before merging.

Do not upload passwords, private client information, or API keys. Do not change several unrelated things in one first practice edit.

### Basic HTML you need to recognize

HTML tags are the words inside angle brackets. They tell the browser what a piece is. `<h1>Title</h1>` means “show this as the page's main heading.” Change `Title`; preserve `<h1>` and `</h1>`. Text in `<a href="work.html">Selected work</a>` is the link label; `href` is where it goes.

```html
<h1>Old heading</h1>
<p>A short description.</p>
<a href="work.html">Selected work</a>
```

Change only the words or the quoted address you mean to change. Do not remove a closing tag such as `</p>` or the quotation marks around an address.

## 6. Step-by-step tutorials

### 6.1 Edit existing text, headings, descriptions, or links

**Open:** the page that shows the text, such as `about.html`, `index.html`, `work.html`, or `notes.html`.  
**Use:** VS Code; preview in a browser.

1. Open the file and use **Ctrl+F** (Windows) to search for a distinctive phrase you can see on the page.
2. Replace only the text between tags. Example:

   ```html
   <h1>Interested in<br>how people <em>think.</em></h1>
   ```

   To change the visible wording, keep `<h1>`, `<br>`, `<em>`, and `</h1>`; edit only the words. The `<br>` creates a line break and `<em>` marks emphasized text.

3. To change a link, edit the address inside `href="..."` and the visible text between `>` and `</a>` only if needed. Example: `href="contact.html"` points to the contact page.
4. Save, open the page in your browser, and click the link. Make sure it opens the intended page.
5. Review the file comparison and publish through sections 11–12.

**Common errors:** deleting a closing tag; pasting a straight quote into an attribute and losing its pair; using the wrong relative address. Undo with Ctrl+Z immediately, or restore the changed line from the editor comparison. If the page suddenly loses formatting, compare the nearest opening and closing tags before changing CSS.

### 6.2 Add a script/storytelling piece

**Open:** copy `scripts/faking-it.html` for a long-form script or `scripts/why-most-young-men-feel-lost.html` for a short-form script. Also edit `work.html`.  
**Use:** VS Code and the existing Markdown script template in `content/templates/` while drafting.

1. Draft first in a duplicated `content/templates/long-form-script-template.md` or `short-form-script-template.md`. Keep source IDs near factual statements.
2. In VS Code's Explorer, copy a similar HTML file in `scripts/`, paste it into the same folder, and rename it with lowercase words and hyphens, for example `scripts/why-stories-stay-with-us.html`.
3. Replace the old title everywhere in the new file: browser `<title>`, description, canonical URL, Open Graph title/description/URL/image, page `<h1>`, visible deck, byline, script overview, hook options, chapters, and production checklist.
4. Keep the relative links and CSS/JS includes that make a script page work. Because this page is inside `scripts/`, paths to the shared files start with `../`, such as `../assets/css/reading.css` and `../work.html`.
5. Replace the cover image with a file in `assets/images/thumbnails/` and update `src` and `alt` together. Do not leave the old image path behind.
6. Add a project section in `work.html` following a neighboring `<article class="project">`. Give it a unique section ID and matching heading ID. Add category, short explanation, image, and a link to the script page.
7. Optionally add a homepage card in `index.html` if this should be featured. Add the new script URL to `sitemap.xml`.
8. Preview the script page, work listing, and homepage at desktop and phone width. Click the project link and inspect the title and image.
9. Publish with a pull request and preview deployment, as in section 12.

**Leave unchanged:** shared layout classes, page navigation structure, unrelated scripts, and the CSS files unless a visual change is intentional. Avoid copying a root page into `scripts/` without adjusting every `../` path.

### 6.3 Publish an article, blog post, or note

**Open:** duplicate `notes/mastering-skills.html` into `notes/your-article-slug.html`; update `notes.html` and optionally `index.html`.  
**Use:** VS Code and `content/templates/article-template.md`, `research-notes-template.md`, and `source-log-template.md`.

1. Draft the article and verify source claims first. The current site uses a full HTML article page, not a Markdown-to-website converter.
2. Copy the existing article into the `notes/` folder and rename the copy using a lowercase, hyphenated slug, such as `notes/why-stories-stay-with-us.html`.
3. Replace the page title, meta description, canonical URL, Open Graph title/description/URL/image, visible heading, deck, byline, body, and any image credit or source links.
4. Keep the existing reading-page CSS and JavaScript paths. In a page under `notes/`, they start with `../assets/`.
5. In `notes.html`, copy the existing published-note row and change its URL, title, and subtitle. Give the next row number. This is what makes the new article discoverable from the Notes page.
6. Optionally add a homepage note link in `index.html`. Add the article's absolute public URL to `sitemap.xml`.
7. Preview the Notes listing and the article. Click through; check headings, quotes, images, sources, and phone layout.
8. Use the pull-request process to publish.

**Important:** the current article's image is hosted remotely on Medium. If you reuse that pattern, the image may become unavailable or load more slowly. Prefer an optimized image you have permission to use in `assets/images/` and set descriptive alt text.

### 6.4 Add a short note or observation

There is no separate short-note detail-page format yet. For a question or brief observation that is not ready as an article, add it to the **On my mind** section in `notes.html`. Copy one `<div class="question">…</div>`, change its number and question text, and do not present a question as a researched conclusion. If it needs a full argument, create an article page as in 6.3.

**Preview:** open `notes.html` and confirm the numbering and layout. **Publish:** use the pull-request process. No sitemap entry is needed for a question that has no separate page.

### 6.5 Add a portfolio project or case study

**Open:** `work.html`; open `index.html` only if featuring the project on the homepage.  
**Use:** VS Code; draft the brief with `content/templates/outline-template.md` and `thumbnail-brief-template.md` if useful.

1. Copy one `<article class="project">` section in `work.html` and paste it alongside the others.
2. Change the section `id`, heading `id`, project number/type, title, short description, details (question, approach, format, role), and link.
3. Link to a real existing script page or permitted external sample. Do not claim results you cannot substantiate. Explain your role and what was made.
4. Add a thumbnail in `assets/images/thumbnails/`; update its `src` and accurate `alt` text. If the image is portrait, copy the portrait class pattern from the existing portrait project only when the art itself is portrait.
5. If appropriate, copy a homepage work card in `index.html` and update its title, label, summary, image, and destination.
6. Add a new standalone page to `sitemap.xml` only if one exists. A section on `work.html` does not need a separate sitemap URL.
7. Preview the `work.html` section, any homepage card, all links, and mobile layout.

**Common error:** a copied `id` creates duplicate jump links. Every project section ID and its heading ID must be unique and correctly connected.

### 6.6 Add images, graphics, or a visual project

**Store in:** `assets/images/thumbnails/` for project cards and thumbnails; create a descriptive subfolder only if the project needs a gallery.  
**Use:** VS Code file explorer to copy the image into the folder; use any trusted image editor to resize/compress it.

1. Use an image you made or have permission to publish. Export a web-sized image; avoid uploading camera originals or very large working files.
2. Choose a clear filename such as `storytelling-thumbnail.webp`. Keep the existing filename with spaces unchanged unless you are ready to update every reference.
3. In the HTML, set the image path and alternative text:

   ```html
   <img src="assets/images/thumbnails/storytelling-thumbnail.webp"
        alt="A paper story map connecting three ideas" loading="lazy">
   ```

   In a nested page such as `notes/new-article.html`, use `../assets/images/...` because the browser starts from the nested folder.

4. Add image credit where required. The `alt` words describe the meaningful image content for people using a screen reader; do not leave `alt` out.
5. Search in VS Code for the filename to check all references. Preview the page and check the image is not stretched, cropped incorrectly, or too large on a phone.
6. Publish the HTML and image together in the same change.

**If it is broken:** check spelling, capitalization, extension (`.jpg` is different from `.jpeg`), spaces, and the number of `../` segments. The local HTML path audit passed at the time of this manual, but external links were not tested.

### 6.7 Add or embed a video without putting a large video in Git

**Current state:** there is no video player pattern and no local video file in the audited repository. The simplest approach is to upload the video to a reputable video host you control, then embed that hosted video. The video remains on that platform; the website stores only a small iframe snippet.

1. Upload and publish the video on the chosen platform. Set its visibility and sharing settings deliberately. Copy its **embed** link or video ID; do not paste a private account URL or access token.
2. In a script or project page, add an accessible title and responsive wrapper. For YouTube, the basic privacy-enhanced pattern looks like this; replace `VIDEO_ID` with the ID from the public video:

   ```html
   <div class="video-embed">
     <iframe
       src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
       title="Video: [accurate video title]"
       loading="lazy"
       referrerpolicy="strict-origin-when-cross-origin"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen>
     </iframe>
   </div>
   ```

3. Add responsive CSS **once** at the end of `assets/css/style.css` if no existing video class exists:

   ```css
   .video-embed { aspect-ratio: 16 / 9; width: 100%; }
   .video-embed iframe { display: block; width: 100%; height: 100%; border: 0; }
   ```

4. Use a vertical ratio only for vertical footage, for example `aspect-ratio: 9 / 16;` on a wrapper with a sensible maximum width. Keep the visual frame from overflowing mobile screens.
5. Provide a normal link to the video and useful surrounding text so the page still makes sense if the embedded player is blocked. Add a caption or transcript for accessibility where practical.
6. Test on the Vercel preview, including a phone-sized screen and the play controls.

**Do not** paste raw video bytes into an HTML file, commit a large export by default, or expose an unlisted/private link if the project should be public. If you must self-host, confirm file size, format, rights, bandwidth, and repository limits first. `assets/videos/` exists but is currently unused.

### 6.8 Create a new page using an existing structure

**Open:** copy `about.html` for a simple root-level page, `notes/mastering-skills.html` for an article, or a script page for a script.  
**Use:** VS Code.

1. Copy the most similar file into its intended folder. Use lowercase, hyphenated names and the matching extension `.html`.
2. Update every page-specific item: `<title>`, description, canonical URL, Open Graph metadata, visible `<h1>`, page text, images and alt text, and links.
3. Keep the skip link, header, navigation, `<main id="main">`, and footer. These provide shared orientation and accessibility.
4. Fix paths based on the new page's folder. Root page: `assets/css/style.css`; nested page: `../assets/css/style.css`. Likewise for scripts and navigation links.
5. Add the page to a visible listing (`notes.html`, `work.html`, or `index.html`) and to `sitemap.xml`. Add a menu link only if this page belongs in the main navigation.
6. Open the file locally and click every internal link. Then check it in a Vercel preview.

Do not create a new top-level section in the main navigation for a one-off piece. Do not remove existing canonical and social metadata.

### 6.9 Update navigation, categories, and related content

**Navigation:** `.site-nav` is repeated in the HTML pages. Use VS Code **Ctrl+Shift+F** to find `class="site-nav"` and **Ctrl+Shift+H** to replace a repeated link carefully. Review each changed file because pages in root and subfolders need different relative links. Preserve `aria-label="Main navigation"`, the mobile menu button, and its `aria-controls="site-nav"` connection. Set `aria-current="page"` on the current page's nav item if the existing page structure uses it.

**Categories and tags:** there is no automatic category/tag system. Category labels such as “Long-form script,” “Psychology,” and topic labels are ordinary text in `work.html` or `notes.html`. Edit the relevant card and keep the wording consistent. Search the whole repository for the old category label if it appears in more than one place.

**Related content:** add a normal link in the relevant HTML page. Use a descriptive label such as “Read the related note” instead of “click here.” If the target is nested, count folders to set the relative path correctly.

Preview all pages where the navigation appears. A missing `../` in a nested page can create a broken navigation link even when the root page works.

### 6.10 Update SEO and social-sharing metadata

**Open:** the relevant page's `<head>` near the top of its HTML file. Most current pages contain `<title>`, `meta name="description"`, a canonical URL, Open Graph title/description/URL, and `twitter:card`.

1. Write a clear browser title and a one-sentence description that accurately summarizes the page.
2. Update the canonical URL to the page's final public address. A canonical URL tells search services which URL is the main copy; do not leave the copied page's old URL.
3. Keep `og:title`, `og:description`, and `og:url` consistent with the visible article. Update `og:image` if there is an appropriate share image.
4. For a large share image, set `twitter:card` to `summary_large_image` (as the existing script pages do). Confirm the image URL is publicly reachable; local paths may not work for some social preview crawlers.
5. Add the page URL to `sitemap.xml`. `robots.txt` already points to that sitemap and normally needs no change.
6. Preview the page source/HTML and, after deployment, inspect the live share card with the relevant social platform's preview tool if available.

Metadata does not guarantee a particular search ranking or social preview. Avoid keyword stuffing and unsupported promises.

### 6.11 Preview before publishing

**Local preview (no build required):** In Windows File Explorer, open the repository folder and double-click `index.html` or the page you changed. It opens in your browser as a local file. Relative links and local images should work. For a nested page, double-click that exact file. If a browser blocks a feature in local-file mode, use the Vercel preview instead; do not install extra tools just for this static site.

**Pull-request preview:** Push your feature branch and open a pull request. Vercel previously posted a Ready preview for PR #13. If the preview check appears, click its preview URL and test the actual page before merging. If no preview appears, check the PR's Checks/Deployments area and ask for help before treating a local preview as production verification.

Check:

- New page opens and its title/description are correct.
- Listing and home links point to the new page.
- Images load and text is readable at desktop and narrow phone sizes.
- Main menu works and there is no horizontal scrolling.
- Links, button labels, image credits, and article sources are correct.
- The page makes sense if an external video or font does not load.

### 6.12 Publish through the actual workflow

The repository is on GitHub, and a Vercel preview was verified on PR #13. Current Vercel project settings could not be inspected, so confirm the project's **Production Branch** in Vercel (usually `main`) and that Git deployments are enabled before your first independent release. Vercel's documented Git workflow creates previews for pull requests and production deployments on its configured production branch. See [Vercel's Git deployment guide](https://vercel.com/docs/git).

1. In GitHub Desktop, check that your new branch is selected. Review every changed file.
2. Write a short commit summary such as `Add new storytelling note`. Click **Commit to [branch]**. A commit is a named save point.
3. Click **Push origin**. This uploads the branch to GitHub, not directly to the live website.
4. Click **Create Pull Request** in GitHub Desktop or open the repository on GitHub and choose **Compare & pull request**. Confirm the base is the production branch and the head is your new branch.
5. Wait for Vercel's preview result. Open the preview link and perform the checks in 6.11.
6. When satisfied, merge the pull request on GitHub. This is the step that normally makes the change eligible for production. Do not use Vercel's manual Promote/Rollback action unless you understand its effect.
7. Wait for the production deployment to finish. Open `https://nikhild.dpdns.org/` or the changed URL in a private/incognito window and verify the live result. If your browser shows an old page, refresh once; do not merge another change blindly.

GitHub Desktop's [official commit and review guide](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop) explains the buttons with screenshots. A merge to `main` is not confirmed to publish this specific Vercel project until you verify the Vercel Production Branch setting.

### 6.13 Fix common mistakes and restore a working version

**Before a change is committed:** In VS Code use Ctrl+Z to undo typing. In GitHub Desktop, inspect the changed file. You can discard a file's changes if you are certain you want to lose them; copy any text you still need first.

**After a change is on GitHub:** Prefer a new correction rather than deleting history. On GitHub, open the pull request/commit and use the available **Revert** action if shown; it creates a new change reversing the earlier one. Review and merge that revert like any other pull request. Alternatively, edit the file back to its prior content in a new branch. Never force-push, delete the repository, or rewrite history as a first-aid step.

**If the live site is broken:**

1. Write down the exact broken URL and what changed most recently.
2. Check the Vercel deployment status for the latest production deployment. If it failed, the prior successful version may still be serving; read the error summary before changing code.
3. If a bad deployment is live, use a GitHub revert pull request (safest, keeps history) or ask a maintainer to promote/rollback to the previous production deployment in Vercel. Vercel supports rollbacks, but the available dashboard action can depend on project setup; see [Vercel deployment management](https://vercel.com/docs/deployments/managing-deployments).
4. Verify the restored public page and then fix the cause on a new branch.

**Do not** overwrite the repository's `main` branch with an old folder copy. That can erase other people's changes.

### 6.14 Keep files organized and prevent broken content

- Keep final articles in `notes/`; keep script pages in `scripts/`; keep reusable image assets in `assets/images/`.
- Name new files `short-clear-description.html` or `short-clear-description.webp`. Avoid special characters and spaces in new names.
- Copy the closest existing HTML pattern and change its content and metadata in one pass.
- Every new page should be linked from the correct listing and included in `sitemap.xml`.
- Keep image filename and HTML `src` identical, including capitalization and extension.
- Keep article sources and artwork rights with the draft. Never remove a credit when moving an image.
- Before pushing, open every changed HTML page locally and click its new links.
- After pushing, check the preview on a phone-sized screen. Check production after merge.

## 7. Reusable content templates

The repository's [`content/templates/README.md`](content/templates/README.md) explains required fields and when to use each Markdown template. The files are for planning and drafting; they are not automatically transformed into site pages.

| Need | Use this template | Required fields | What the site ultimately needs |
| --- | --- | --- | --- |
| New long-form script/story | `content/templates/long-form-script-template.md` | Working title, status, audience, runtime, next action, premise, central idea, hook, conclusion | A new HTML page in `scripts/` plus a project card in `work.html`. |
| Short-form script | `content/templates/short-form-script-template.md` | Title, status, audience, runtime, next action, central idea, tension, hook, insight, example, payoff | A script page or a work listing entry, depending on how much context it needs. |
| Article | `content/templates/article-template.md` | Title, status, audience, next action, thesis, original angle, fact-check, title, excerpt, SEO description | A page in `notes/`, an entry in `notes.html`, and sitemap URL. |
| Research and sources | `research-notes-template.md` and `source-log-template.md` | Research question, audience, finding/claim, source details, limits, uncertainty, next action | These support accurate writing; they are not displayed automatically. |
| Brief idea or short observation | `content-idea-template.md` | Idea, status, format, next action, question, audience | Add a question to `notes.html` if it is an idea in progress. |
| Argument/story plan | `outline-template.md` | Title, format, audience, central thesis, status, next action | Use it before writing; it does not appear on the site. |
| Visual / thumbnail | `thumbnail-brief-template.md` | Project, status, purpose, core idea, orientation, aspect ratio, asset path, next action | Export the image to `assets/images/` and reference it from HTML. |
| Publishing | `publishing-checklist.md` | Piece, format, status, title, description, destination, review checks | Use it before the pull request is merged. |

### Additional copy-and-adapt patterns for the website

There is no structured project, gallery, video, or SEO template file yet. For those, the simplest compatible pattern is to copy existing HTML. The fragments below show the fields that matter; use the surrounding full page structure from a current example.

**Work/project card fields:** unique section ID; category/number; title; concise description; question/approach/format/role; image `src` and `alt`; link to the real sample. Copy the matching project article in `work.html` rather than pasting this abbreviated example as a complete page.

```html
<section class="wrap" id="project-name" aria-labelledby="project-name-title">
  <article class="project">
    <div class="project-media">
      <img src="assets/images/thumbnails/project-name.webp"
           alt="A specific description of the project's visual" loading="lazy">
    </div>
    <div class="project-copy">
      <p class="project-no">04 / Short-form script</p>
      <h2 id="project-name-title">Project title</h2>
      <p class="project-lede">What the piece explores and why.</p>
      <div class="project-details">
        <div><h3>The question</h3><p>What the project asks.</p></div>
        <div><h3>The approach</h3><p>How the idea is shaped.</p></div>
        <div><h3>Format</h3><p>Where and how it is intended to appear.</p></div>
        <div><h3>My role</h3><p>Your accurate contribution.</p></div>
      </div>
      <a class="project-link" href="scripts/project-name.html">Read the script ↗</a>
    </div>
  </article>
</section>
```

**Notes list row:** copy a current row in `notes.html`; change URL, number, title, and explanatory subtitle. The actual article remains a separate HTML page.

```html
<a class="note-row" href="notes/article-name.html">
  <span class="note-number">02</span>
  <span><h3 class="note-title">Article title</h3>
    <p class="note-subtitle">Read on this site · Topic</p></span>
  <span class="note-arrow">↗</span>
</a>
```

**SEO/page-head pattern:** copy the complete `<head>` from a page of the same type; update every page-specific field. Do not paste only a title and forget the canonical or social URL.

```html
<title>Accurate page title — Nikhil Dhakad</title>
<meta name="description" content="One accurate sentence describing this page.">
<link rel="canonical" href="https://nikhild.dpdns.org/notes/article-name.html">
<meta property="og:type" content="article">
<meta property="og:title" content="Accurate page title">
<meta property="og:description" content="A concise description for sharing.">
<meta property="og:url" content="https://nikhild.dpdns.org/notes/article-name.html">
<meta property="og:image" content="https://nikhild.dpdns.org/assets/images/thumbnails/article-name.webp">
<meta name="twitter:card" content="summary_large_image">
```

For an image gallery or visual project, use the `visual-index`/`figure`/`figcaption` pattern in `work.html`. For video, use section 6.7; video hosting and the responsive CSS are a proposed addition, not an existing site feature.

## 8. Media and video management

### Images

- Place website images in `assets/images/`; current thumbnails live in `assets/images/thumbnails/`.
- Resize to the actual display use and compress before committing. A 1,000–2,000 pixel image is usually enough for a web thumbnail; avoid uploading full-resolution originals without a reason.
- Use `.webp` or optimized `.jpg` for photos and `.png` when transparency or crisp flat artwork matters. Keep the output extension in sync with the HTML path.
- Write useful `alt` text. For a decorative flourish that conveys no information, use `alt=""`; for meaningful work art, describe what a viewer needs to know.
- Credit the creator and check the license. “Found online” does not mean free to reuse.
- The current HTML uses local image paths for work thumbnails and an external Medium image for the article. Both are part of the actual content and should be checked when copying a page.

### Videos

There are no local video files or embeds in the current site. Use a video-hosting service for public playback and embed its player with a title and lazy loading. Use a video link if the player would add too much clutter. Provide captions or a transcript where possible. Keep private videos private; do not paste a private/unlisted URL into a public page unless that is intended.

## 9. Preview, publish, and rollback guide

```text
Edit on a branch → Save a commit → Push to GitHub → Open pull request
       → Vercel preview → Check desktop + mobile → Merge approved change
       → Production deployment → Verify the live URL
```

**Local:** double-click the changed `.html` file in File Explorer. This is sufficient for the current static HTML/CSS site; no compilation is required. Local preview does not prove that Vercel serves the same build.

**Preview:** use the Vercel preview link on the GitHub pull request. Vercel's documentation says Git-connected projects create unique preview deployments for branches/pull requests and a production deployment from the configured production branch ([details](https://vercel.com/docs/git)). A Ready Vercel preview appeared on PR #13, confirming the preview path worked for that change.

**Production:** confirm the configured Production Branch in the Vercel dashboard. After the pull request is merged, wait for the production deployment status, then visit the live domain and the changed page. The production setting and the current live page were not accessible during this audit.

**Rollback:** the safest beginner rollback is a new GitHub revert pull request, because the correction remains visible in history. If the whole site is down and a previous Vercel deployment is clearly the working version, ask an account owner to use Vercel's rollback/promotion controls, then make a Git revert so the repository matches the site. Never delete `.git`, force-push, or replace `main` with an old backup folder.

## 10. Recommended long-term content workflow

| Option | Beginner ease | Cost/maintenance | Fit here / risk |
| --- | --- | --- | --- |
| Edit a file directly on GitHub | Easy for a tiny text correction | Usually free; no local install | Works for small edits, but awkward for long HTML, images, and testing. A direct edit to `main` could publish without a preview/review step. |
| VS Code + GitHub Desktop + pull requests | Moderate at first; repeatable afterward | Free tools; low ongoing maintenance | **Recommended.** Keeps the static site, supports image files and full-page editing, gives visible change comparisons, and uses the Vercel preview path already seen on PR #13. |
| Markdown only | Easy for drafting | Free | Good for planning, research, and scripts using `content/templates/`; Markdown does not currently render into a website page, so publishing still needs HTML. |
| Add a CMS | Easier editing after setup | May add subscription, hosting/configuration, or integration maintenance | No evidence a CMS is needed for this small static site. It would require a migration or content pipeline and more failure points. Reconsider only if frequent publishing makes manual HTML listings a real burden. |
| Build a custom admin interface | Can look easy once built | Highest build/security/maintenance cost; likely needs a server or content API | Not justified. It would add authentication, data storage, and deployment complexity to a site that currently has none. |

**Primary recommendation:** keep the static site. Draft in Markdown using `content/templates/`, then use VS Code and GitHub Desktop for HTML/image changes, one branch and pull request per coherent update, and Vercel's preview before merging. Ask a developer to help only for shared CSS/JavaScript behavior, new page systems, or hosting configuration. This gives you recoverable edits without maintaining a CMS or database.

### Back up before a major change

GitHub is the online copy and version history, but only after your work is pushed. Before a large content or design change:

1. In GitHub Desktop, click **Fetch origin**, switch to the current production branch (usually `main`), and click **Pull origin** if offered.
2. Make sure GitHub Desktop shows no uncommitted changes before you start. If it shows changes, commit/push them or ask what they are before proceeding.
3. Create a dated branch, such as `backup-before-gallery-2026-10-21`, and make the major work on a separate new branch. A branch is a recoverable save point; a pushed branch is also stored on GitHub.
4. For an extra offline copy, close VS Code and use File Explorer to copy the whole website folder to a separate location or external drive. Label it with the date and **do not edit or upload that backup copy**.
5. Never email or publicly share a backup folder: it contains Git history and may contain files you did not intend to publish. Review it before sharing.

## 11. Troubleshooting handbook

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Image shows a broken icon | Misspelled path, wrong capitalization/extension, or wrong number of `../` | Compare the HTML path with the exact file name. For nested pages, use `../assets/...`. |
| Link opens a not-found page | Wrong relative URL or the target file has not been created | Check the `href`; root pages link to `notes/...`, a nested note links to another root page with `../notes.html`. |
| New article does not show in Notes | The HTML page exists but `notes.html` was not updated | Add a note row and check its link. Add sitemap entry as well. |
| Script page exists but no one can find it | Missing card in `work.html` (and possibly homepage) | Add a project entry and confirm its link points to the script file. |
| Page loses its styling | CSS link path changed or a copied page has incorrect relative paths | Compare the `<link rel="stylesheet">` lines with a page in the same folder. Root paths omit `../`; nested paths include it. |
| Navigation works on some pages only | Navigation was edited in only one HTML file or a nested relative link is wrong | Search all HTML for `class="site-nav"`; update and test every page copy. |
| Text runs together or sections appear misplaced | HTML closing tag was removed or nested incorrectly | Undo the last edit; compare to the original page's balanced tags. Restore the affected block. |
| Preview is old | Browser cache or the wrong preview URL/branch | Confirm the PR's latest deployment commit and URL, then hard-refresh. Do not assume an old preview contains your last push. |
| Vercel preview says failed | Deployment/build integration issue or a changed setting | Open the failed deployment details and copy its error. This project has no local build script, so do not invent a build command. Ask for help if the preview cannot be restored. |
| Live page is broken after merge | Bad path/content or production deployment issue | Stop merging more changes. Verify deployment status; open a revert PR for the last change or ask an account owner to roll back. |
| Video is blank | Private/invalid video ID, host restrictions, or incorrect embed URL | Confirm the video is publicly embeddable, use its embed ID, and check the preview page. Keep a normal fallback link. |
| Page scrolls sideways on a phone | Image or long text exceeds the viewport; layout changed | Check at a narrow width in preview, inspect the new image and long links. Revert a CSS change if unsure. |
| Social preview shows old title/image | Old Open Graph metadata, cache, or inaccessible image URL | Check `og:title`, `og:description`, `og:url`, and `og:image`; use a public absolute image URL and refresh the platform preview. |
| A change cannot be found in GitHub | It was saved locally but not committed/pushed, or the wrong branch is open | Check GitHub Desktop's Current Branch and Changes/History. Commit, then Push origin. |

### Link and asset audit result

At the audit date, all **local file** targets found in `href` and `src` attributes across HTML pages existed in the repository. This verifies filenames/paths only; it does not prove external Google, Medium, Notion, or other links are currently available. No HTML page contained an `<iframe>` or `<video>` player, and no video asset file was found in `assets/`.

## 12. Glossary

| Term | Plain-English meaning |
| --- | --- |
| HTML | The building blocks and words of a web page. |
| CSS | The visual rules: colors, size, spacing, and layout. |
| JavaScript | Instructions that make parts of a page interactive. |
| Static website | Pages are pre-written files served to visitors; there is no live content database behind them. |
| CMS | A content management system with an editing interface that stores or generates site content. This website has none. |
| Repository (repo) | The website folder plus its saved change history on GitHub. |
| Git | The system that records changes and lets you return to earlier versions. |
| Branch | A separate line of work where you can make changes without immediately replacing the approved version. |
| Commit | A named save point containing selected changes. |
| Push | Send your local branch/commits to GitHub. |
| Pull request (PR) | A GitHub page to review proposed changes before merging them. |
| Merge | Combine an approved branch into the production branch. |
| Deployment | A version of the website placed on Vercel and given a URL. |
| Preview deployment | A temporary version for checking changes before production. |
| Production | The version visitors reach at the public domain. |
| Relative path | A file address based on the current page's folder; `../` means go up one folder. |
| Metadata | Page information for browser tabs, search services, and social sharing. |
| Canonical URL | The preferred public address for one page. |
| Alt text | A text description of an image for screen-reader users and when an image cannot load. |
| Embed / iframe | A frame that shows an externally hosted video or other content inside a page. |
| Sitemap | A file that lists public page URLs for search crawlers. |
| Responsive | A layout that adjusts to different screen widths, including phones. |

## 13. Maintenance checklist

### Every update

- [ ] Work on a branch, not directly on `main`.
- [ ] Edit the page and listing where the item belongs.
- [ ] Check title, page description, canonical/share metadata, links, and image alt text.
- [ ] Preview the changed page and relevant listing on desktop and phone width.
- [ ] Review the change comparison before committing.
- [ ] Check the Vercel preview before merging.
- [ ] Verify the production URL after deployment.

### Monthly or before a major release

- [ ] Open the home, work, notes, article, script, about, and contact pages.
- [ ] Click internal links and check important external samples while signed out.
- [ ] Check image loading and page behavior on a phone.
- [ ] Review image sizes and replace needlessly large files with optimized copies.
- [ ] Check `sitemap.xml` for all intended public pages.
- [ ] Confirm no secrets, private drafts, or unauthorized artwork were committed.
- [ ] Confirm the latest production deployment is Ready in Vercel.

## 14. Practical learning roadmap

Learn only enough to operate this site safely:

1. **Recognize HTML tags**: headings, paragraphs, links, images, lists, and the difference between the tag and the words inside it.
2. **Understand paths**: root vs nested pages, `assets/...`, and `../` for going up one folder.
3. **Edit safely in VS Code**: search, replace, save, undo, and compare files.
4. **Use GitHub Desktop**: branch, commit, push, open a pull request, and inspect history.
5. **Read basic CSS only when necessary**: identify a class name and know that shared CSS affects every element using that class. Avoid broad CSS edits until comfortable.
6. **Use Vercel previews**: distinguish a preview URL from the live domain; verify a production deployment after a merge.
7. **Learn image basics**: file size, dimensions, aspect ratio, compression, alt text, and image rights.
8. **Learn page metadata**: title, description, canonical URL, Open Graph fields, and sitemap entry.

You do not need to learn a framework, database, command line, or advanced JavaScript to make ordinary content updates to this website.

Ask a developer for help before changing shared CSS or JavaScript behavior, adding a server-backed contact form or content system, changing DNS/hosting settings, or investigating a failed deployment that does not explain its own cause. Ordinary text, page metadata, cards, links, and optimized image updates follow the tutorials above.

---

**Audit note:** Repository structure and local link/asset paths were inspected on 21 October 2026. The live domain could not be loaded with the available browser/web access, and Vercel project settings could not be read by the connected account. Treat live appearance and production-branch automation as items to confirm in your own browser and Vercel dashboard.
