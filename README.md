# Portfolio - Igor Carvalhaes

## Overview

This is a personal portfolio website for Igor Carvalhaes, a front-end developer and Computer Engineering student. The site showcases his skills, projects, and provides contact information through a clean, responsive interface with a modern dark theme.

## Live Demo

[Portfolio Website](www.igorcarvalhaes.com)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile and desktop
- **Dark Theme**: Modern dark color scheme with subtle hover effects
- **Project Showcase**: Dynamic project cards displaying personal work with descriptions
- **Social Media Links**: Direct links to GitHub, LinkedIn, Twitter and email
- **Smooth Navigation**: Anchor links for single-page navigation
- **Mobile Menu**: Collapsible hamburger menu for mobile devices

## Technologies Used

- **React 19**: UI component library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **TailwindCSS 4**: Utility-first CSS framework
- **Lucide React**: Lightweight icon library

## Project Structure

```
portfolio/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ProjetosCard.tsx
│   ├── App.tsx        # Main application component
│   ├── App.css        # App-specific styles
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## Components

### Navbar

Navigation component with:

- Desktop horizontal menu
- Mobile hamburger menu that opens a drawer-style navigation
- Smooth scrolling anchor links

### ProjetosCard

Project display card with:

- Project title
- Project description
- Links to live demo and GitHub repository
- Hover effects for interactive elements

### Footer

Simple footer with copyright information.

## Main Application

The App component contains:

- Profile section with photo and introduction
- Social links section with icon buttons
- Projects section displaying work in card format

## Setup and Installation

1. Clone the repository

```bash
git clone https://github.com/igcarvalhaes/portifolio.git
cd portifolio
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Design Decisions

- **Dark Theme**: Professional modern look with dark background and light text
- **Minimalist Aesthetic**: Clean interface without unnecessary elements
- **Responsive Design**: Mobile-first approach with tailored layouts for different screen sizes
- **Accessibility**: Proper semantic elements and aria attributes for screen readers
- **Performance**: Optimized component rendering and efficient Tailwind utility usage

## Future Enhancements

- Add blog section to showcase writing
- Implement dark/light theme toggle
- Add animations for smoother transitions
- Include filters for project categories
- Add language selection for internationalization
- Implement contact form

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome. Please open an issue to discuss potential changes.

## License

[MIT](#) - Add your preferred license

---

Created by Igor Carvalhaes | [GitHub](https://github.com/igcarvalhaes) | [LinkedIn](https://www.linkedin.com/in/igor-carvalhaes/)
