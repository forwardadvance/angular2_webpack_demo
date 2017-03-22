module.exports = {
  entry: {
    app: './source/app.js'
  },
  output: {
    filename: './build/app.js',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?presets[]=es2015' }
    ]
  }
};
