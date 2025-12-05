module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    testMatch: ["**/controllers/task.controller.test.ts"],
    moduleFileExtensions: ["ts", "js"],
    globals: {
        "ts-jest": {
            isolatedModules: true,
        },
    },
};