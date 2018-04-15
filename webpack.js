module.exports = {
    entry: __dirname + "/Test/MySpec.ts",

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies

    // webpack configuration
    node: {
      fs: 'empty'
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    devtool: 'inline-source-map',
    output: {
        path: __dirname
    }
  }