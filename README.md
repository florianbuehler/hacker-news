# Hacker News Clone

This is a Hacker News Clone based on the open [API](https://github.com/HackerNews/API) provided by Hacker News / Y Combinator.
The "official" Hacker News page provided by Y Combinator can be found [here](https://news.ycombinator.com/).


## General

The project is a [React](https://reactjs.org/) Single Page Application (SPA), which was bootstrapped using [Create React App](https://github.com/facebook/create-react-app). 

It uses [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), [Redux](https://redux.js.org/) for state management and [tailwindcss](https://tailwindcss.com/) (and some [Sass](https://sass-lang.com/)) for styling. 

Additionally it uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to ensure a high quality and consistent code style.


## Getting started

To get started, first clone the project using
```shell script
git clone https://github.com/florianbuehler/hacker-news.git
```
Alternatively you can also clone it using SSH `git@github.com:florianbuehler/hacker-news.git`.

Once you cloned the project successfully, navigate into the root project folder and run
```shell script
npm install
```
to install all required packages in the `node_modules` folder.


## Development

```shell script
npm run start
```
To run the project locally in development mode you can execute `npm run start` in the project directory.
The result can then be observed in the browser at [http://localhost:3000](http://localhost:3000).

Thanks to CRA the page is configured to offer hot reloading. Thus any edits you make in the code will directly be visible in the browser. You will also see any lint errors in the console.

```shell script
npm run test
```
Launches the test runner in the interactive watch mode. For a detailed explanation see the [Create React App - Running Tests](https://facebook.github.io/create-react-app/docs/running-tests) section.

```shell script
npm run eslint
```
To see all formatting and code snippets which do not fit the code quality standards specified in the Eslint & Prettier configurations you can use `npm run eslint`. The command outputs a list of all violations in the terminal.

```shell script
npm run fix-eslint
```
If you don't want to fix the code quality issues found by Eslint & Prettier by hand you can simply run `fix-eslint`. 
It will try to fix all violations and output the violations which couldn't be fixed automatically.

```shell script
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

From the CRA documentation:

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Production

To build a production ready version of the app in the `build` folder use
```shell script
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

For more information about how the bundled app can be deployed, check out the [Create React App - Deployment](https://facebook.github.io/create-react-app/docs/deployment) documentation.
