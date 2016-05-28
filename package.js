Package.describe({
  name: 'shawnmclean:redux-meteorware',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/shawnmclean/redux-meteorware',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('redux-meteorware.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shawnmclean:redux-meteorware');
  api.mainModule('redux-meteorware-tests.js');
});
