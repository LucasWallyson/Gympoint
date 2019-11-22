module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [ 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error", // dar error de acordo com os pre-requisitos do prettier
    "class-methods-use-this": "off", // toda classe usar o this
    "no-param-reassign": "off",  // manipular dados recebidos como parametro
    "camelcase": "off", //variavel!
    "no-unused-vars": ["error",{"argsIgnoreàttern": "next" }], // ignorar o 'next' do midllewares




  },
};
