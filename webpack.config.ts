import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import devConfig from './webpack.dev.config'
import prodConfig from './webpack.prod.config'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const isDevelopmentMode = process.env.NODE_ENV === 'development'

const webpackConfig = isDevelopmentMode ? devConfig : prodConfig

export interface IConfiguration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: IConfiguration = {
  ...webpackConfig,

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  entry: ['./src/index.tsx'],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              compilerOptions: { noEmit: false },
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  stats: 'minimal',
}

export default config
