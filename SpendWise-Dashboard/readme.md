````markdown
# SpendWise Dashboard

A responsive financial dashboard shell built using HTML and CSS.

This project was created as the foundation for the SpendWise capstone project. The focus is on building a clean, modern, and responsive dashboard layout using CSS Grid, Flexbox, CSS custom properties, and responsive design techniques.

## Project Features

- Responsive dashboard layout
- Sidebar navigation menu
- Dashboard header
- Six financial category cards
- Realistic static financial information
- CSS Grid for the overall page and card layout
- Flexbox for navigation, header, and card content
- CSS custom properties for consistent theming
- Responsive layout for screens below 768px
- Hover and keyboard focus micro-interactions
- Dark theme using `prefers-color-scheme`

## Financial Categories

The dashboard includes six financial categories:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each card displays static financial information such as monthly spending, budget, and percentage used.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- CSS Media Queries

## Project Structure

```text
SpendWise-Dashboard/
│
├── index.html
├── style.css
└── README.md
````

### `index.html`

Contains the structure of the dashboard, including:

* Sidebar navigation
* Header
* Dashboard content
* Financial category cards

### `style.css`

Contains all visual styling and layout rules, including:

* CSS variables
* Grid layouts
* Flexbox layouts
* Colors and typography
* Card styling
* Hover and focus animations
* Responsive design
* Dark theme

### `README.md`

Provides an overview of the project and explains its structure and implementation.

## Layout

The main dashboard uses CSS Grid to create two primary sections:

```text
+-------------------+-----------------------------+
|                   |                             |
|     Sidebar       |          Header             |
|                   |-----------------------------|
|     Navigation    |                             |
|                   |      Dashboard Cards        |
|                   |                             |
+-------------------+-----------------------------+
```

On smaller screens below 768px, the layout changes to a single-column structure.

## Responsive Design

A media query is used to adapt the dashboard for smaller screens:

```css
@media (max-width: 768px) {
    /* Responsive layout */
}
```

The dashboard changes from a two-column layout to a single-column layout, and the financial cards are displayed in one column.

The responsive layout was designed to be tested using the browser's DevTools Device Toolbar.

## CSS Custom Properties

The color theme is controlled using CSS custom properties:

```css
:root {
    --brand-color: #2563eb;
    --accent-color: #22c55e;
    --background-color: #f1f5f9;
    --surface-color: #ffffff;
    --primary-text: #1e293b;
    --secondary-text: #64748b;
}
```

This makes it easier to maintain and change the application's visual theme.

## Card Micro-interactions

The dashboard cards include hover and keyboard focus effects.

The transition duration is 200ms, which satisfies the requirement that the animation should last no longer than 250ms.

```css
.category-card:hover,
.category-card:focus {
    transform: translateY(-4px);
}
```

The cards also use `tabindex="0"` so they can receive keyboard focus.

## Dark Theme

As a stretch goal, the project supports the user's system dark-mode preference using:

```css
@media (prefers-color-scheme: dark) {
    :root {
        /* Dark theme variables */
    }
}
```

Only the CSS custom property values are overridden for the dark theme.

## Accessibility

Basic accessibility considerations were included:

* Semantic HTML elements such as `<header>`, `<main>`, `<nav>`, `<aside>`, and `<article>`
* Keyboard focus support for dashboard cards
* Visible focus indicators
* Responsive layout
* Descriptive text for dashboard sections

## How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Make sure `index.html` and `style.css` are in the same folder.
4. Open `index.html` using Live Server, or open the HTML file directly in a browser.

## Author

Created as part of a web development capstone project.

## License

This project is created for educational purposes.

````

### Your final GitHub repository should look like this

```text
spendwise-dashboard
│
├── index.html
├── style.css
└── README.md
````

Before submitting, **open the GitHub repository and make sure all three files are visible**. Then test the live page at mobile width using Chrome DevTools.
