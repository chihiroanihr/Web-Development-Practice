// pages/_app.js overrides the default App.

// The default export of _app.js is a top-level React component that wraps all the pages in your application.
// You can use this component to keep state when navigating between pages, or to add global styles.

// - Create a shared layout between page changes
// - Inject additional data into pages
// - Add global CSS

// You can add global CSS files by importing them from pages/_app.js.
// You cannot import global CSS anywhere else.
// The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

// IMPORTANT: You need to restart the development server when you add pages/_app.js.
// Press Ctrl + c to stop the server and run: "npm run dev"

import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
