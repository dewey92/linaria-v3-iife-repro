const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = (_env, { mode = 'development' }) => ({
	mode,
	entry: {
		home: resolve('src/App.tsx'),
	},
	devtool: 'source-map',
	output: {
		filename: '[name]-bundle.js',
		path: resolve('./js-bundles'),
		sourceMapFilename: '[name]-bundle.js.map',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'].reverse(),
		modules: ['node_modules'],
	},
	module: {
		rules: [
			{
				include: [resolve('src')],
				test: /\.(j|t)sx?$/,
				use: ['babel-loader', '@linaria/webpack-loader'],
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	],
	performance: false,
})
