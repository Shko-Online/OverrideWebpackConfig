/**
 * @typedef {import('webpack').Configuration} Configuration
 */

/**
 * @typedef {import('webpack').Compiler} Compiler
 */


module.exports =
    class OverrideWebpackConfigPlugin {
        /** 
         * @type {(webpackConfig: Configuration) => void} 
         */
        options;
        /**
         * 
         * @param {(webpackConfig: Configuration) => void} options 
         */
        constructor(options) {
            this.options = options;
        }

        /**
         * 
         * @param {Compiler} compiler 
         * @returns 
         */
        apply(compiler) {
            if (!this.options) {
                console.warn('OverridePCFWebpackPlugin was registered without passing an Override configuration');
                return;
            }
            this.options(compiler.options);
        }
    }