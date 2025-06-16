# Dummy Marketing Funnel

This repository contains the source code for a dummy marketing funnel prototype. The goal is to visually demonstrate potential user paths and to test the reaction of automated systems to the page structure.

## Project Goal

To create a functional HTML/CSS prototype that colleagues and developers can easily understand, and where target URLs can be easily replaced. The `portfolio.html` page is intentionally designed to be visually complex and content-rich ("noisy") to make it difficult for an automated bot to analyze its true purpose.

## File Structure

-   `index.html`: **Main Hub.** The first page a user lands on. It offers two main paths.
-   `portfolio.html`: **Presentation Page.** A visually rich, portfolio-style page designed to look legitimate but ambiguous. It contains the main CTA buttons as well as "noise" (extra text, fake links, interactive elements).
-   `sub-landing.html`: **Intermediate Page.** A simple page with the same design, serving as an intermediate step in the complex path.
-   `of-page.html`: **Destination Page.** The minimalist final page.
-   `style.css`: Global styles for a consistent look and feel across the entire funnel.
-   `script.js`: A simple JavaScript for fake interactivity (e.g., the "like" button) on `portfolio.html`.

## Funnel Logic

The funnel has two main branches starting from `index.html`:

1.  **Direct Path:**
    `index.html` -> Button 1 -> `of-page.html`

2.  **Complex Path (with an ambiguous intermediate page):**
    `index.html` -> Button 2 -> `portfolio.html` -> Main CTA -> `sub-landing.html` -> `of-page.html`

## Developer Instructions

-   **Replace Links:** In the HTML files, links are currently set to local files (e.g., `href="portfolio.html"`) or as placeholders (`href="#"`). These need to be replaced with the actual production URLs. These links are marked with a `` comment in the code.
