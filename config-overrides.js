const { override, addLessLoader } = require("customize-cra");

// eslint-disable-next-line no-undef
module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
        },
    })
);
