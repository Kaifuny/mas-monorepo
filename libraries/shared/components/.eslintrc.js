module.exports = {
    extends: [require.resolve("@mas/configs/src/eslint.react")],
    parserOptions: {
        project: require.resolve("./tsconfig.eslint.json"),
        tsconfigRootDir: require.resolve(__dirname)
    }
};
