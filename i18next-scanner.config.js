module.exports = {
  input: [
    "src/**/*.{js,jsx}",
    // Use ! to filter out files or directories
    "!./**/*.spec.{js,jsx}",
    "!./i18n/**",
    "!./node_modules/**",
  ],
  output: "./",
  options: {
    debug: true,
    sort: true,
    plural: true,
    removeUnusedKeys: false,
    attr: {
      list: ["data-i18n"],
      extensions: [".html", ".htm"],
    },
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx"],
    },
    trans: {
      component: "Trans",
      i18nKey: "i18nKey",
      defaultsKey: "defaults",
      extensions: [".js", ".jsx"],
      // @ts-ignore
      fallbackKey: (ns, value) => value,
    },
    lngs: ["ru", "uz", "en"],
    ns: ["translation"],
    defaultLng: "ru",
    defaultNs: "translation",
    defaultValue: (lng = "en", ns = "translation", key = "") => {
      if (lng === "en") {
        return key;
      }
      return "";
    },
    resource: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
      savePath: "src/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: "ns:",
    keySeparator: "yangi so'z",
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
};
