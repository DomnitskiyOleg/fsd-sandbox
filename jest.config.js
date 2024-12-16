/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  testPathIgnorePatterns: ['__tests__/mocks/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
