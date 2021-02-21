const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[contenthash:10].js',
	},
	plugins: [
		new HtmlWebPackPlugin({
			chunks: ['main'], // 要加载的js
			template: './src/index.html', // 要使用的模板
			minify: {
				removeAttributeQuotes: true,
				removeComments: true,
				removeRedundantAttributes: true,
				useShortDoctype: true
			},
			hash: true
		})
	],
	watch: true,
	watchOptions: {
		aggregateTimeout: 200 // 延时200ms构建
	}
}