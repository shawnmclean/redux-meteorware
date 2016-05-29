Package.describe({
  name: 'shawnmclean:redux-meteorware',
  version: '0.0.1',
  summary: 'Meteor middleware for Redux',
  git: 'https://github.com/shawnmclean/redux-meteorware',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('tracker');
  api.use('ecmascript');
  api.mainModule('client/index.js', 'client');
});

Package.onTest(function(api) {
  api.use('shawnmclean:redux-meteorware');
  api.use(['tracker', 'ecmascript', 'practicalmeteor:chai', 'practicalmeteor:sinon']);
  api.addFiles('tests/index.js', 'client');
});
