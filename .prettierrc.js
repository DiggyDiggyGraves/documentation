function extracted() {
  return require('@github/prettier-config')
}

const config = extracted()

module.exports = {
  ...config,
  proseWrap: 'never',
  embeddedLanguageFormatting: 'off',
  overrides: [
    {
      files: ['content/**/*.mdx'],
      printWidth: 99999,
    },
  ],
}
