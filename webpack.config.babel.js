import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import pkg from './package.json';

const cdnjs = '//cdnjs.cloudflare.com/ajax/libs';
const versions = Object.assign({}, pkg.devDependencies, pkg.dependencies);
let env = 'development';
let min = '';
let prod = false;

if (process.env.NODE_ENV === 'production') {
  env = 'production';
  min = '.min';
  prod = true;
}

Object.keys(versions).forEach((key) => {
  versions[key] = versions[key].replace('^', '').replace('~', '');
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    root: [
      path.resolve('.'),
    ],
    modulesDirectories: ['node_modules'],
  },
  externals: {
    moment: 'moment',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
    redux: 'Redux',
    'redux-thunk': 'ReduxThunk',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|target)/,
        loader: prod ? ExtractTextPlugin.extract('style', 'css', 'sass', 'postcss') : 'style!css!sass!postcss',
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|build)/,
        loader: 'babel',
        query: pkg.babel,
      },
    ],
  },
  postcss: () => [
    autoprefixer({ browsers: ['last 2 versions'] }),
    prod ? cssnano() : null,
  ].filter((plugin) => !!plugin),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${env}"`,
    }),
    prod ? new ExtractTextPlugin('styles.css') : null,
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html',
      title: 'Setup',
      favicon: 'src/assets/favicon.ico',
      hash: prod,
      chunksSortMode: 'none',
      vendors: {
        js: [
          `${cdnjs}/moment.js/${versions.moment}/moment${min}.js`,
          `${cdnjs}/react/${versions.react}/react${min}.js`,
          `${cdnjs}/react/${versions['react-dom']}/react-dom${min}.js`,
          `${cdnjs}/redux/${versions.redux}/redux${min}.js`,
          `${cdnjs}/react-redux/${versions['react-redux']}/react-redux${min}.js`,
          `${cdnjs}/redux-thunk/${versions['redux-thunk']}/redux-thunk${min}.js`,
          `${cdnjs}/react-router/${versions['react-router']}/ReactRouter${min}.js`,
        ].map((url) => `<script src="${url}"></script>`).join('\n  '),
        css: [
          `${cdnjs}/normalize/${versions['normalize.css']}/normalize${min}.css`,
        ].map((url) => `<link href="${url}" rel="stylesheet" type="text/css" />`).join('\n  '),
      },
      minify: prod ? {
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeCDATASectionsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        preserveLineBreaks: false,
        collapseBooleanAttributes: true,
        removeTagWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        preventAttributesEscaping: false,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true,
        removeEmptyElements: false,
      } : false,
    }),
  ].filter((plugin) => !!plugin),
  devServer: {
    historyApiFallback: true,
  },
};
