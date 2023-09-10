# Landing Page with Dynamic Navbar and Collapsible Sections

This project is a landing page with dynamic navigation and collapsible sections. It's built using HTML, CSS, and JavaScript.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [Additional Sections](#additional-sections)
- [Collapsible Sections](#collapsible-sections)
- [Fireworks Effect](#fireworks-effect)
- [Navbar Visibility](#navbar-visibility)

## Features

- Dynamic navigation bar generated based on the sections present in the HTML.
- Sections are collapsible, allowing users to hide or show content.
- Fireworks animation triggered on hover over Section 2.
- Navbar automatically hides when not scrolling and reappears on mouseover.

## Usage

This landing page can be used as a template for any project requiring a similar structure. Simply replace the content in the sections with your own.

## Installation

No special installation is required. Just clone or download the repository to your local machine.

## How to Run

Open the `index.html` file in your preferred web browser.

## Additional Sections

To add more sections, simply copy and paste the existing section structure in the `index.html` file. Remember to update the section IDs and data attributes.

## Collapsible Sections

To make a section collapsible, add a button with the class `collapsible` at the beginning of the section content. The content to be collapsed should be placed within a `div` element with the class `content`.

Example:

```html
<section>
  <button class="collapsible">Toggle Content</button>
  <div class="content">
    <!-- Your content goes here -->
  </div>
</section>
