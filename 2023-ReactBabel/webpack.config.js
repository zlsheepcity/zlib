const path = require('node:path')
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Path settings

const alias = {
  Assets:     path.resolve(__dirname, 'src/assets/'),
  Auth:       path.resolve(__dirname, 'src/auth/'),
  Data:       path.resolve(__dirname, 'src/data/'),
  Components: path.resolve(__dirname, 'src/components/'),
  Interfaces: path.resolve(__dirname, 'src/interfaces/'),
  Pages:      path.resolve(__dirname, 'src/pages/'),
  Utils:      path.resolve(__dirname, 'src/utils/'),
  Src:        path.resolve(__dirname, 'src/'),
};
const appPath = {
  outputPublicPath: '/',  // Option 1 (host based)
//outputPublicPath: './', // Option 2 (html build)
  outputFilename:   './app.js',
  entry:            './src/index.jsx',
  htmlTemplate:     './src/index.html',
  public:           './public',
  env:              './.env',
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Webpack exports

module.exports = (env) => {
  return {
    mode: 'development',
    devServer: {
    //port: 8080, // by default
      historyApiFallback: true,
    },

    entry: appPath.entry,
    output: {
      publicPath: appPath.outputPublicPath,
      filename:   appPath.outputFilename,
    },

    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      alias,
    },

    module: {
      rules: [
        {
          use: { loader: 'babel-loader' },
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/,
        },
      ],
    },

    plugins: [
      new DotenvPlugin({
        path: appPath.env,
      }),
      new CopyWebPackPlugin({
        patterns: [{from:appPath.public}],
      }),
      new HtmlWebPackPlugin({
        title: 'WebPackApp',
        template: path.resolve(__dirname, appPath.htmlTemplate),
      }),
    ],

  }
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
