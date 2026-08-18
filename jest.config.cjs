module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json"
      }
    ]
  },
  moduleNameMapper: {
    // Resolve @ path alias same as Vite
    "^@/(.*)$": "<rootDir>/src/$1",
    // Strip .js extensions from relative imports (TypeScript ESM style)
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};

