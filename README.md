# Hacker News Clone

This is a Hacker News Clone based on the [API](https://github.com/HackerNews/API) provided by Hacker News.


## General

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

It uses [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), [Redux](https://redux.js.org/) for state management and [tailwindcss](https://tailwindcss.com/) for styling. 

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

The page will reload if you make edits. You will also see any lint errors in the console.

```shell script
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```shell script
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Production

You can use
```shell script
npm run build
```
to build a production ready version of the app in the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## eslint
https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project 