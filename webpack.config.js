const path = require('path');
const fs = require('fs');

config = {
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'imsDesign'),
    library: {
      name: 'IMS-design',
      type: 'umd',
    }
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 5000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ]
  }
}

const setEntry = () => {
  const entry = {};
  const components = fs
    .readdirSync(`./components/${process.env.CLIENT}`, { withFileTypes: true })
    .filter(name => {
      return name.isDirectory() === true
    });

  components.forEach(component => {
    entry[`${process.env.CLIENT}`] = {
      import: `./components/${process.env.CLIENT}/${component.name}/index.tsx`,
      filename: `${process.env.CLIENT}/${component.name}/index.js`
    }
  })

  // entry.index = './index.jsx';
  // entry.rencar = './components/rencar/index.jsx'

  return config.entry = entry;
}

setEntry();

module.exports = config;
