import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/tests/unit/components/**/*.test.tsx"],
  moduleNameMapper: {
    "/^@/(.*)$/": "C:Git\\testing-jest-app$1",
  },
  resolver: undefined,
};

export default createJestConfig(config);
