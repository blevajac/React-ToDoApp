var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        //prije se trebalčo sve bacati u alias sada samo navedeš u kojem file us nalaze komponente i on ih sam nađe
        modulesDirectories: [
              //components
              'node_modules',
              './app/components',
              './app/api'
        ],
        alias: {
              applicationStyles: 'app/styles/app.scss',
              actions: 'app/redux/actions/actions.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015','stage-0'],
            //za grešku u webpacku postavi compact: false
            //http://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
            compact: false
          },
          test: /\.jsx?$/,
          exclude: /(node_modules | bower_components)/
        }
      ]
    },
    sassLoader: {
      includePaths: [
          path.resolve(__dirname, './node_modules/foundation-sites/scss')
      ]
    },
    devtool: 'inline-source-map'
    //devtool: 'cheap-module-eval-source-map'
};
