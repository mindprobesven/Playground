const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js']
    //weather: ['./src/scenes/Weather/weather.js']
  },
  resolve: {
    alias: {
      Root: path.resolve(__dirname, 'src'),
      Components: path.resolve(__dirname, 'src/components/'),
      Scenes: path.resolve(__dirname, 'src/scenes/'),
      Services: path.resolve(__dirname, 'src/services/')
    },
    extensions: ['.js', '.jsx']
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App',
      filename: 'index.html',
      path: path.resolve(__dirname, 'dist'),
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};