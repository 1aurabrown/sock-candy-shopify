const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');

var config = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          name: 'vendor',
          // sync + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules(?!\/tailwindcss)/,
          minSize: 0
        }
      }
    },
    minimizer: [
      new CssnanoPlugin({
        test: /.s?css?$/,
        sourceMap: true
      }),
      new TerserPlugin({
        sourceMap: true
      })
    ]
  },

  entry: './scripts/index.js',

  output: {
    path: path.join(__dirname, 'dist/assets/'),
    filename: '[name].js',
  },

  context: path.resolve(__dirname, 'src'),

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      sourceMap: true
    }),
    new CopyWebpackPlugin([{
      from: '**/*',
      to: path.join(__dirname, 'dist'),
      ignore: ['styles/', 'scripts/', '*.js', '*.scss', '*.sass', '*.css', ],
    }], {}),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { sourceMap: true }},
          { loader: 'css-loader', options: { sourceMap: true }},
          { loader: 'postcss-loader', options: { sourceMap: true }}
        ]
      },
      {
        // Don't process vendor css with postcss.
        test: /\.(sa|sc|c)ss$/,
        include: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { sourceMap: true }},
          { loader: 'css-loader', options: { sourceMap: true }}
        ]
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  target: 'web'
};


module.exports = (env, argv) => {
  console.log(argv.mode)
  if (argv.mode === 'development') {
    config.devtool = "inline-source-map"
  }
  return config
}
