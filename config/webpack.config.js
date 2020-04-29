const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const production = process.env.NODE_ENV === 'production';
const outputDirectory = production ? 'dist' : 'build';


//
// configure the many many many plugins this uses
//
plugins = [
  new CleanWebpackPlugin(
    [`${outputDirectory}/*/*/*`, `${outputDirectory}/*/*`, `${outputDirectory}/*`],
    {
      root: path.resolve(__dirname, '..'),
      verbose: true
    }
  ),
  new CopyWebpackPlugin([
    {
      from: 'src/images',
      to: 'images/',
      flatten: true
    }
  ]),
  new CopyWebpackPlugin([
    {
      from: 'src/fonts',
      to: 'fonts/',
      flatten: true
    }
  ]),
  new CopyWebpackPlugin([
    {
      from: 'src/misc',
      flatten: true
    }
  ]),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    jquery: 'jquery',
    $: 'jquery'   
  }),
  new MiniCssExtractPlugin({
    filename: '[hash].index.css',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/templates/index.js'
  }),
  new HtmlWebpackPlugin({
    filename: 'analyze/index.html',
    template: 'src/templates/analyze.js'
  }),
  new HtmlWebpackPlugin({
    filename: 'faq/index.html',
    template: 'src/templates/faq.js'
  }),
  new HtmlWebpackPlugin({
    filename: 'statistics/index.html',
    template: 'src/templates/statistics.js'
  }),
  new HtmlWebpackPlugin({
    filename: 'terms/index.html',
    template: 'src/templates/terms.js'
  }),
  new SriPlugin({
    hashFuncNames: ['sha256']
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
]

// load the webserver if we're not in analysis mode
if (process.env.NODE_MODE === 'analyze') {
  plugins.push(
    new BundleAnalyzerPlugin({})
  )
} else {
  plugins.push(
    new BrowserSyncWebpackPlugin({
      host: 'localhost',
      port: 5500,
      middleware: (req, res, next) => {
        if (req.url.startsWith('/analyze')) {
          req.url = '/analyze/index.html';
        }

        return next();
      },
      server: {
        baseDir: 'build'
      }
    })
  )
}


module.exports = {
  entry: {
    'index.js': ['babel-polyfill', path.resolve(__dirname, '..', 'src', 'js', 'index.js')]
  },
  output: {
    crossOriginLoading: 'anonymous',
    library: 'Observatory',
    libraryTarget: 'var',
    path: production ? path.resolve(__dirname, '..', 'dist') : path.resolve(__dirname, '..', 'build'),
    filename: '[hash].[name]'
  },
  mode: production ? 'production' : 'development',
  devtool: production ? undefined : 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: !production,
        parallel: true,
        sourceMap: !production,
        terserOptions: {
          compress: {
            passes: 2
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '..', 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: [
              'lodash',
              '@babel/plugin-proposal-object-rest-spread'
            ],
            presets: [
              ['@babel/preset-env', {
                'targets': {
                  'firefox': 57,
                  'ie': 11
                },
                'shippedProposals': true
              }]
            ]
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        'sass-loader'
      ]}
    ]
  },
  plugins: plugins
};
