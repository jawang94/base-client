/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';

export default {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'local',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        SERVER_ENDPOINT: JSON.stringify('http://localhost:8080'),
        // SERVER_ENDPOINT: JSON.stringify('https://api-staging.guidelyte.dev'),
        // SERVER_ENDPOINT: JSON.stringify('https://api.guidelyte.dev'),
        // AUTH0_DOMAIN: 'guidelyte-development.us.auth0.com',
        // AUTH0_CLIENT_ID: 'rv0YHbV2QyBe78RcT88fdKBuxP61hQ2f',
      },
    }),

    new webpack.NamedModulesPlugin(),
  ],
};
