import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser' // ✅ IMPORTAR el parser

export default [
  {
    files: ['src/**/*.{js,vue}'],
    languageOptions: {
      parser: vueParser, // ✅ usar el módulo importado, no un string
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      vue,
      prettier
    },
    rules: {
      'no-console': 'warn',
      'prettier/prettier': 'error'
    }
  },
  prettierConfig
]
