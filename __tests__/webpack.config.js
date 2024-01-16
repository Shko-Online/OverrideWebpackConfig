const path = require('path');
const OverrideWebpackConfigPlugin = require('../index');

module.exports = {
    mode: 'development',
    entry: './foo.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'foo.bundle.js',
    },
    plugins: [
        new OverrideWebpackConfigPlugin((config)=>{
            console.log('Shko Online Rocks');
        })
    ]
  };