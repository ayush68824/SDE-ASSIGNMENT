# Personalized Content Dashboard

A modern, interactive dashboard for personalized news, recommendations, and social feeds. Built with Next.js, TypeScript, Redux Toolkit, Tailwind CSS, and RTK Query.

## Features
- Personalized news feed (NewsAPI)
- Trending news
- Movie recommendations (TMDB)
- Social feed (mock)
- Favorites (persisted)
- Search, infinite scroll, drag-and-drop
- Dark mode

## Setup
1. **Clone the repo:**
   ```sh
   git clone <your-repo-url>
   cd personalized-dashboard
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up API keys:**
   - NewsAPI: Edit `src/features/news/newsApi.ts` and add your API key.
   - TMDB: Edit `src/features/recommendations/tmdbApi.ts` and add your API key.
4. **Run the app:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

## Testing
- **Unit tests:**
  ```sh
  npm test
  ```
- **E2E Testing (Cypress):**

  1. **Start your development server:**
     ```sh
     npm run dev
     ```

  2. **Open Cypress:**
     ```sh
     npm run cypress
     ```
     This will open the Cypress Test Runner UI.

  3. **Run the E2E tests:**
     - In the Cypress UI, select `dashboard.cy.js` under the `cypress/e2e/` folder.
     - The tests will check dashboard load, dark mode toggle, and search functionality.

> Cypress is already set up in this project. You can add more E2E tests in the `cypress/e2e/` directory.

## Deployment
- Deploy easily to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

## License
MIT
