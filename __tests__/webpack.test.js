const webpack = require('webpack');
const options = require('./webpack.config');

test('can modify webpack config', (done) => {
    webpack(options, (err, stats) => {     
        expect(err).toBeNull();
        done();
    });
})
