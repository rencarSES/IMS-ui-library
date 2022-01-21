const path = require('path');
const fs = require('fs');

config = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname),
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
    .readdirSync(`./src/${process.env.CLIENT}`, { withFileTypes: true })
    .filter(name => {
      return name.isDirectory() === true
    });

  components.forEach((component, index)=> {
    entry[`${process.env.CLIENT}${index}`] = {
      import: `./src/${process.env.CLIENT}/${component.name}/index.tsx`,
      filename: `${process.env.CLIENT}/${component.name}/index.js`
    }
  })

  entry[`${process.env.CLIENT}`] = {
    import: `./src/${process.env.CLIENT}/index.tsx`,
    filename: `${process.env.CLIENT}/index.js`
  }
  
  return config.entry = entry;
}

setEntry();

module.exports = config;
