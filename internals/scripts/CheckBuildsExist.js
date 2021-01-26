// Check if the renderer and main bundles are built
import path from 'path';
import chalk from 'chalk';
import fs from 'fs';

const webPath = path.join(__dirname, '..', '..', '/build/', 'main.bundle.js');

// const mainPath = path.join(
//   __dirname,
//   '..',
//   '..',
//   'app/dist/electron/',
//   'main.prod.js'
// );
// const rendererPath = path.join(
//   __dirname,
//   '..',
//   '..',
//   'app',
//   'dist',
//   'renderer.prod.js'
// );

if (!fs.existsSync(webPath)) {
  throw new Error(
    chalk.whiteBright.bgRed.bold(
      'The web app is not built yet. Build it by running "yarn build-web"'
    )
  );
}

// if (!fs.existsSync(mainPath)) {
//   throw new Error(
//     chalk.whiteBright.bgRed.bold(
//       'The main process is not built yet. Build it by running "yarn build-main"'
//     )
//   );
// }

// if (!fs.existsSync(rendererPath)) {
//   throw new Error(
//     chalk.whiteBright.bgRed.bold(
//       'The renderer process is not built yet. Build it by running "yarn build-renderer"'
//     )
//   );
// }
