# Bookify - Book Rental Platform

Welcome to Bookify, a React application for book rentals.

## Project Overview

Bookify is a front-end platform that allows users to browse, select, and rent books online. The application includes a responsive design with a global navigation bar, multiple pages, and a clean UI.

## Features

- Responsive design that works on mobile and desktop
- Global navigation bar across all pages
- Home page with hero banner and featured sections
- Catalog page for browsing available books
- Basket/cart functionality
- Login/Register pages
- Admin dashboard for managing books and users

## Pages

- **Home**: Landing page with hero banner, featured books, and how it works section
- **Catalog**: Browse available books
- **Basket**: View selected books and checkout
- **Login/Register**: User authentication
- **Admin**: Dashboard for managing books and users (conditionally available)

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

```
/src
  /components      # Reusable components
    Navbar.jsx     # Global navigation bar
    Footer.jsx     # Global footer
    MobileMenu.jsx     # Global navigation bar for mobile screen
  /pages           # Application pages
    HomePage.jsx       # Landing page
    CatalogPage.jsx    # Book catalog
    BasketPage.jsx     # Shopping basket
    LoginPage.jsx      # Authentication
    AdminPage.jsx      # Admin dashboard
    NotFound.jsx   # 404 page
  App.jsx          # Main application component with routing
  index.css        # Global styles
```

## Adding New Pages

To add a new page to the application:

1. Create a new component in the `/pages` directory
2. Add the route to the component in `App.jsx`
3. Update the `Navbar.jsx` component to include a link to the new page

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- Tailwind CSS

## Future Enhancements

- Backend integration
- Search functionality
- Book detail pages
- User profiles
- Payment processing

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
