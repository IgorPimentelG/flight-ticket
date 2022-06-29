/* eslint-disable no-undef */
module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@components': './src/components',
						'@shared': './src/shared',
						'@store': './src/store',
						'@screens': './src/screens',
						'@routes': './src/routes',
						'@theme': './src/theme',
						'@assets': './assets'
					}
				},
			],
			'react-native-reanimated/plugin',
		]
	};
};
