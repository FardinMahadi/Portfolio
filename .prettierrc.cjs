module.exports = {
  // Line length matches common practice for readability
  printWidth: 100,

  // Standard indentation
  tabWidth: 2,
  useTabs: false,

  // Semicolons for consistency and safety
  semi: true,

  // Single quotes align with most React/JS style guides
  singleQuote: true,

  // Trailing commas for cleaner git diffs
  trailingComma: 'es5',

  // Spacing for readability
  bracketSpacing: true,

  // Arrow function parens - 'avoid' is more common in modern JS
  arrowParens: 'avoid',

  // JSX specific settings
  jsxSingleQuote: false,
  bracketSameLine: false,

  // Prose wrap - 'preserve' is better for markdown/comments
  proseWrap: 'preserve',

  // Line endings
  endOfLine: 'lf',

  // HTML whitespace sensitivity
  htmlWhitespaceSensitivity: 'css',

  // Embedded language formatting
  embeddedLanguageFormatting: 'auto',

  // Plugins - Tailwind plugin must be last
  plugins: ['prettier-plugin-tailwindcss'],

  // File-specific overrides for special cases
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
        printWidth: 80,
      },
    },
  ],
};
