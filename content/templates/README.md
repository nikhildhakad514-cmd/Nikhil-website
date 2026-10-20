# Content templates

A small Markdown workspace for developing essays, video scripts, research, and the assets and checks that carry each piece to publication. These files are working documents; they do not change the static site or publish anything by themselves.

## Start here

1. Capture a promising question with `content-idea-template.md`.
2. Choose a format and duplicate its template into a project folder or your preferred working location. Use `outline-template.md` to test the argument before drafting; use `research-notes-template.md` and `source-log-template.md` when claims need research.
3. Draft with `article-template.md`, `long-form-script-template.md`, or `short-form-script-template.md`. Keep research notes and source records alongside the draft.
4. Review the argument, evidence, attribution, language, and audience fit. Complete `thumbnail-brief-template.md` for commissioned or planned artwork.
5. Use `publishing-checklist.md` to prepare the final title, description, image, links, accessibility, and page placement. Update the status and publication URL in the working document.

The full sequence, including useful review gates and suggested project folders, is in [`content-workflow.md`](content-workflow.md).

## Which template to use

| Template | Use it when… |
| --- | --- |
| [`content-idea-template.md`](content-idea-template.md) | Capturing a question, observation, tension, or possible original angle before committing to a format. |
| [`research-notes-template.md`](research-notes-template.md) | Exploring a subject, comparing explanations, recording uncertainty, or finding a defensible point of view. |
| [`source-log-template.md`](source-log-template.md) | Tracking individual references and the exact claims they can support. Keep one log per project or research bundle. |
| [`outline-template.md`](outline-template.md) | Testing the sequence of an argument or story before writing full prose. |
| [`article-template.md`](article-template.md) | Writing a researched essay or article intended for the Notes section or an external publication. |
| [`long-form-script-template.md`](long-form-script-template.md) | Developing a narrative video essay or other long-form video, with spoken copy and production direction. |
| [`short-form-script-template.md`](short-form-script-template.md) | Shaping one focused idea for a vertical or short video with a clear hook and payoff. |
| [`thumbnail-brief-template.md`](thumbnail-brief-template.md) | Briefing a thumbnail or supporting visual, including orientation, aspect ratio, safe areas, and asset delivery. |
| [`publishing-checklist.md`](publishing-checklist.md) | Preparing and checking a finished piece for the website or another channel. |

## Duplicate and adapt

Copy the relevant Markdown file, rename the copy for the project, and replace every bracketed prompt. Keep the template originals unchanged. A practical project folder might look like:

```text
content/drafts/2026-10-short-working-title/
  idea.md
  research.md
  sources.md
  outline.md
  draft.md
  visual-brief.md
```

Use only the files needed; a short script may not need a separate outline. These are plain Markdown files, so they work in any text editor and require no tooling.

## Required fields

Fields marked **Required** in the templates are the minimum needed to move work forward. For every content piece, keep its working title, format, audience, central idea, status, and next action visible. Before publication, confirm a final title, accurate description or excerpt, supported factual claims, cleared assets, destination and internal links, and publication status. If a field does not apply, write `N/A` rather than leaving an ambiguous blank. Estimates and hypotheses should be labeled as such.

For research-led work, preserve source details and distinguish what a source says from your interpretation. For factual or contested claims, record uncertainty and meaningful alternative explanations; do not turn a plausible mechanism into proof of an outcome. Prefer a specific observation or useful synthesis over a book-by-book summary.

## Editorial and site fit

Aim for a premium, restrained editorial feel: near-black, warm ivory, restrained red (`#ff3030`), strong typography, generous spacing, and minimal effects. Let the idea and evidence carry the piece. Favor original stories, practical examples, clear reasoning, and fair counterarguments over summaries of books.

The current static site publishes essays through `notes.html` and individual pages under `notes/`. Script and visual projects are presented in `work.html`, with script pages under `scripts/`. When preparing a site release, follow those existing conventions and verify the listing, page metadata, links, image paths, and mobile layout. Templates themselves stay in `content/templates/` and are not content listings.

## Status vocabulary

Use one status consistently: `Idea`, `Research`, `Outline`, `Draft`, `Review`, `Packaging`, `Ready`, `Scheduled`, `Published`, or `Parked`. Include an owner and next action when useful. A piece is not `Ready` until factual, editorial, asset, and publishing checks are complete.
