const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/hooks/**/*.{ts,tsx}",
    "src/lib/**/*.{ts,tsx}",
    "src/stores/**/*.{ts,tsx}",
    "src/utils/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*/*.stories.tsx",
  ],

  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/stores/(.*)$": "<rootDir>/stores/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
