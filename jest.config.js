module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  testRegex: 'src(/tests/|/.*/tests/).*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./.config/testing/setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
};
