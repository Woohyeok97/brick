import prettierRecommended from "eslint-config-prettier";

const eslintConfig = defineConfig([{ extends: [prettierRecommended] }]);

export default eslintConfig;
