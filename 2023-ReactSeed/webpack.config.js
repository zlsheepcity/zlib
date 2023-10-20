const path = require('node:path')
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')

//nom: adsf
module.exports = (env) =>{
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      filename: './app.js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      alias: {
        Assets: path.resolve(__dirname, 'src/assets/'),
        Auth: path.resolve(__dirname, 'src/auth/'),
        Data: path.resolve(__dirname, 'src/data/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Interfaces: path.resolve(__dirname, 'src/interfaces/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Utils: path.resolve(__dirname, 'src/utils/'),
        Src: path.resolve(__dirname, 'src/')
      },
    },
    plugins: [
      new DotenvPlugin({ path:'./.env' }),
      new CopyWebPackPlugin({ patterns:[{from:'public'}] }),
      new HtmlWebPackPlugin({
        title: 'WebPackApp',
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(ts|js|tsx|jsx|mjs|css|scss)$/,
          use: 'source-map-loader',
        },
        {
          test: /\.([cm]?ts|tsx)$/,
          loader: 'ts-loader'
        },
        {
          test:/\.css$/,
          use:['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
  }
}
