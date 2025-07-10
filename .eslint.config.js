import github from 'eslint-plugin-github'

let react = github.getFlatConfigs().react
let spreadElements = ['.cache/**', 'public/**']
export default [
  react,
  {
    // This lets your .eslintrc.js handle most configuration
    ignores: [...spreadElements],
  },
]
