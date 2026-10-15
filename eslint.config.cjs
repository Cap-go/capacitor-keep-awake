const ionic = require('@ionic/eslint-config/recommended');

module.exports = [
  {
    ignores: [
      'build/**',
      'dist/**',
      'example-app/**',
      'docs/**',
      'android/build/**',
      'node_modules/**',
      'eslint.config.cjs',
    ],
  },
  ...ionic,
];
