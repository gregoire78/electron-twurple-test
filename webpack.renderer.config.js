const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  exclude: /node_modules/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.js?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
  }]
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
