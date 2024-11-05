const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = defineConfig({
  transpileDependencies: true,
  
  productionSourceMap: process.env.NODE_ENV === 'development',

  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV === 'development',
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },

  configureWebpack: config => {
    const baseConfig = {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
          __VUE_OPTIONS_API__: JSON.stringify(true),
          __VUE_PROD_DEVTOOLS__: JSON.stringify(process.env.NODE_ENV === 'development')
        }),
        
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css',
        }),
      ],

      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 250000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `vendor.${packageName.replace('@', '')}`;
              },
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      },

      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm-bundler.js',
          '@': require('path').resolve(__dirname, 'src'),
        },
        fallback: {
          "path": false,
          "fs": false,
        }
      }
    };

    if (process.env.NODE_ENV === 'development') {
      baseConfig.devtool = 'source-map';
      baseConfig.optimization.minimize = false;
      
      baseConfig.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }

    if (process.env.NODE_ENV === 'production') {
      baseConfig.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path][base].gz',
          test: /\.(js|css|html)$/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );
    }

    return baseConfig;
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool('source-map');
      config.optimization.set('moduleIds', 'named');
    }

    // Enable minification only in production
    config.optimization.minimize(process.env.NODE_ENV === 'production');

    // Handle worker files
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .options({
        inline: 'fallback'
      });
  },

  devServer: {
    hot: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
});