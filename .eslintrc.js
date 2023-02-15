module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/essential",
    //   'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  // plugins: [
  //   'vue'
  // ],
  rules: {
    // 必须加分号
    semi: "error",
    quotes: ["error", "double"],
    "no-var": 2
  },
  globals: {
    var1: "writable",
    var2: "readonly"
  },
};
