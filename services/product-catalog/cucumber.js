module.exports = {
  default: {
    import: ['@cucumber/cucumber'],
    format: [
      '@cucumber/pretty-formatter',
      'html:test/reports/cucumber-report.html',
    ],
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['test/features/**/*.feature'],
    require: ['test/steps/**/*.ts', 'test/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    publisher: [],
    dryRun: false,
    strict: false,
    worldParameters: {},
    tags: '',
    parallel: 0,
  },
};
