import github from 'eslint-plugin-github'

let react = github.getFlatConfigs().react
export default [
  react,
  {
    // This lets your .eslintrc.js handle most configuration
    ignores: ['.cache/**', 'public/**'],
  },
]
