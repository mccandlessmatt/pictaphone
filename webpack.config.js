const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/client/js/main.js',
	output: {
		path: '/dist',
		filename: 'pictaphone.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0'],
				}
			},
			{
        test: /\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
			{
		    test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
		    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	},
	sassLoader: {
    indentedSyntax:false,
		includePaths:[
			'src/styles',
			'src/fonts'
		]
  },
	resolve: {
    extensions: ['', '.js', '.sass']
	},
	plugins: [
    new ExtractTextPlugin("pictaphone.css")
	]
}
