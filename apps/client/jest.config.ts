module.exports = {
  displayName: 'client',
  preset: '../../jest.preset.ts',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/client',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  // transformIgnorePatterns: [`<rootDir>/node_modules/(?!.*\\.mjs$|swiper)`],
  moduleNameMapper: {
    swiper_angular: 'node_modules/swiper',
  },
  transformIgnorePatterns: [
    `node_modules/(?!(@angular|@testing-library|swiper|ssr-window|dom7))`,
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
