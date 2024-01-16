# Shko Online's Override Webpack Config Plugin

This is a Webpack plugin that allows overriding the Webpack config for PCF components.

1. Install the package as a dev dependency on your project.
2. Require the plugin in your `webpack.config.js`, 
 ```javascript
 const OverrideWebpackConfigPlugin = require('@shko.online/overridewebpackconfig');
 ```
3. Configure the plugin with your override:

```javascript
//...
plugins: [
  new OverrideWebpackConfigPlugin((config) => {
    console.log("Shko Online Rocks");
  }),
];
//...
```

# License
The owners of the license are Betim Beja and Shko Online LLC. If you want to help with the development of this library and all the other Open Source products by Betim Beja (under the brand AlbanianXrm) and Shko Online LLC you can buy consulting services by contacting us at sales@shko.online

## Contributing
Contributions are welcome. Before contributing please check that you don't violate any IP, and consider that your contribution will be public, but you would be transfering ownership of the code to us.