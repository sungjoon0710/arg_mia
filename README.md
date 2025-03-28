# ARG MIA React Frontend

This is a basic React frontend structure that can be run locally and deployed to GitHub Pages.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment to GitHub Pages

1. Make sure you have the `gh-pages` package installed:
```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The application will be available at [https://sungjoonpark.github.io/arg_mia](https://sungjoonpark.github.io/arg_mia).

## Project Structure

- `src/` - Contains the source code
  - `App.js` - Main application component
  - `index.js` - Application entry point
  - `App.css` - Styles for the App component
  - `index.css` - Global styles
  - `reportWebVitals.js` - Performance monitoring

- `public/` - Contains static files
  - `index.html` - HTML template 