# Jeffrey Siu's personal github page

## Purpose

This repo contains the source code for my personal github page.

## Built With

- [React](https://reactjs.org/)
- [create-react-app](https://create-react-app.dev/)
- [react router](https://reactrouter.com/)
- [MUI](https://mui.com/)

## gh-pages Branch

the `gh-pages` branch contains the production build of the project. The Github action runs automatically when changes are merged into the `main` branch.

## Experience

I started this project to learn more about React. It was a fun and fulfilling experience as I did not have a ton of front-end development experience.

I initially chose to create the application with [Next.js](https://nextjs.org/), as it's a React framework with a bunch of features, such as image optimization and file-system routing, built in. 

However, I encountered some issues after I deployed the code to the `gh-pages` branch: Routing did not work, and Next.js' image loader would not work with `next export`.

I tried to fix the problems with these posts: ["Deploy with Travis"](https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn) and ["Deploy with GitHub Actions"](https://www.linkedin.com/pulse/deploy-nextjs-app-github-pages-federico-antu%C3%B1a/), but I was not able to fix the issues.

In the end, I rewrote the application with plain React and React Router. Fortunately, I did not have to do a ton of refactoring since the code was already split up as components. 