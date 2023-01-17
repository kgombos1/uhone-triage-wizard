module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      sourceType: 'module',
      ecmaVersion: 'latest',
      ecmaFeatures: {jsx: true},
      warnOnUnsupportedTypeScriptVersion: true,
    },
}