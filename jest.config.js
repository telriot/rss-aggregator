module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
        "^components(.*)$": "<rootDir>/components$1",
        "^contexts(.*)$": "<rootDir>/contexts$1",
        "^hooks(.*)$": "<rootDir>/hooks$1",
        "^pages(.*)$": "<rootDir>/pages$1",
        "^public(.*)$": "<rootDir>/public$1",
        "^tests(.*)$": "<rootDir>/tests$1",
        "^utils(.*)$": "<rootDir>/utils$1",

      },
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  };