module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	plugins: ['react', 'prettier', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
