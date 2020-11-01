const { override, fixBabelImports, addLessLoader } = require("customize-cra");

// eslint-disable-next-line no-undef
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
        },
    })
);
