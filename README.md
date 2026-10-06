# Kartik — Articles

A GitHub Pages-ready Astro + Markdown article website for physics, science, ideas, and technical writing.

## Features

- Markdown articles
- LaTeX mathematics rendered with KaTeX
- Fenced code blocks with syntax highlighting
- Figures and images
- Automatic article index
- Responsive layout
- GitHub Pages deployment through GitHub Actions

## GitHub Pages deployment

This version is configured for the repository:

`kartik-articles`

The resulting address is:

`https://kartikjbsky.github.io/kartik-articles/`

1. Create a **public** GitHub repository named `kartik-articles` under `kartikjbsky`.
2. Upload the contents of this directory to the repository.
3. Push to the `main` branch.
4. In **Settings → Pages**, set the source to **GitHub Actions**.
5. GitHub Actions will build and publish the Astro site automatically.

After the first deployment, the article site will be available at:

`https://kartikjbsky.github.io/kartik-articles/`

You can then set the Articles button in the main portfolio to this address.

## Local development

Install Node.js, then:

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Writing an article

Create a Markdown file in:

`src/content/articles/`

Example:

```markdown
---
title: "My Article"
description: "A short description."
date: 2026-10-06
readTime: "5 min read"
---

Write normally in Markdown.

Inline math: $H = H_0 + V$.

$$
H = \sum_i \epsilon_i c_i^\dagger c_i
$$

```python
import numpy as np
print("Hello")
```
```

### Figures

Put images in:

`public/images/`

For articles on the GitHub Pages project site, reference an image with a path relative to the generated article page, for example:

```markdown
![My figure](../../images/my-figure.png)
```

You can also use an HTML `<figure>` block for captions.

## Portfolio

The article site's Portfolio link points to:

`https://kartikjbsky.github.io/`
