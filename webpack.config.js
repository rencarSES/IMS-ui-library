const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = pkg.name + (isProduction ? '.min' : '');

const config = {
  // entry: './src/ts/index.ts',
  entry: {
    main: {
      import: './src/rencar-ui/index.tsx',
      library: {
        name: 'rencar-UI', 
        type: 'umd'
      }
    },
    another: {
      import: './src/ims-ui/index.tsx',
      library: {
        name: 'IMS-UI',
        type: 'umd'
      }
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: FILENAME + '.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader']
      }
    ]
  },
  devServer: {
    // contentBase: __dirname + "/dist/",
    // inline: true,
    hot: true,
    host: "localhost",
    port: 5500
  },
};

module.exports = config;