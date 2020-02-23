module.exports = {
  env: {
    es6: true,
    node: true
  },

  extends: [
    'airbnb-base',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'class-methods-use-this': 0,
    'no-console': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
