module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-css-modules", "stylelint-prettier/recommended"],
  plugins: [
    "stylelint-no-unsupported-browser-features",
    "stylelint-no-browser-hacks/lib",
    "stylelint-selector-no-empty",
    "stylelint-no-unused-selectors",
  ],
  rules: {
    /**
     * Camel case regex
     * `([a-z][a-z0-9]+)`
     * word starts with a lower case letter and has lower case letters and numbers
     * (i.e `foo` or `bar123`)
     * `([A-Z][a-z0-9]*)*`
     * All continuous words starts with capital case and proceed with lower case letters and numbers
     * (i.e `Foo` or `Bar123`)
     */
    "selector-class-pattern": /^([a-z][a-z0-9]+)([A-Z][a-z0-9]*)*?$/,
    "plugin/stylelint-selector-no-empty": true,
  },
};
