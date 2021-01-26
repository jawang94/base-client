## Guidelyte Client

[![CircleCI](https://circleci.com/gh/guidelyte/guidelyte-client/tree/master.svg?style=shield&circle-token=c8b766741eaab3f5c79aa0d1648f27315e0e9bae)](https://app.circleci.com/pipelines/github/guidelyte/guidelyte-client?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3e85e3b5-578a-495f-81b9-fc305cb37c0d/deploy-status)](https://app.netlify.com/sites/guidelyte-client/deploys)

## Description

This repository houses our entire frontend codebase for both our web app and native desktop apps built with Electron.

## Technologies

**Built with:**

- [React](https://reactjs.org)
- [Electron](https://electron.atom.io)
- [TypeScript](https://www.typescriptlang.org)
- [WebPack](https://webpack.js.org)

For additional technologies please refer to the [Engineering Wiki](https://www.notion.so/guidelyte/Frontend-a2cad29f11f94e06a44de5444b40c852)

## Installation

You must first setup the [server](https://github.com/guidelyte/guidelyte-server) locally for the client to run properly.

Then, from your desktop terminal:

> `git clone <SSH Link>` - Clones the repository to your desktop.

> `cd ./guidelyte-client` - Navigates you to into the cloned directory.

> `yarn` - Installs dependencies

For Electron Dev (which relies on web for dev instance):

> `yarn dev-start` - Concurrently runs the web client on <http://localhost:3000/> and electron renderer on <http://localhost:5000/> with the dev window pointing at 3000.

For Web Dev:

> `yarn dev-web` - Starts the web app on <http://localhost:3000/>

To clean the project and reinstall dependencies:

> `yarn clean-all && yarn`

To only clean build files and rebuild:

> `yarn clean-build && yarn build`

For full list of scripts, refer to the `package.json` file.

## Development

At any time, you can launch a Netlify preview of your local changes with the following commands:

> `yarn clean-build && yarn build` - Rebuild. You may need to do a clean yarn install if you've fiddled with the dependencies.

> `netlify deploy` - Launch a Netlify Preview pointing at your local build files (./app/build/).

For more information including how to set up Netlify, please reference [this document](https://www.notion.so/guidelyte/Netlify-9fdb8384c8c34aa5ad51a2e42a5151bd).

## API Reference

A complete list of our API definitions can be found in the the [here](https://www.notion.so/guidelyte/APIs-b857ca2e5b044bf39accd504ad768638).

## Credits

Big thanks to the hardworking team for making this possible.

## License

Our codebase is unlicensed, proprietary, and private. Distribution, publication, or breach of IP and/or NDA agreements will result in immediate legal action by Guidelyte, Inc against the offending individual(s).
