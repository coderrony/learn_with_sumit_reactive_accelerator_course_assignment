import "server-only";

// movies process
export const processJson = () =>
  import("../json_file/movies.json").then((module) => module.default.results);

// language process
const language = {
  en: () => import("../json_file/en.json").then((module) => module.default),
  bn: () => import("../json_file/bn.json").then((module) => module.default),
};

export const getLanguage = async (locale) => language[locale]();
