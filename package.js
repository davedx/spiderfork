Package.describe({
  summary: "A more resilient spiderable package with better error reporting"
});

Package.on_use(function (api) {
  api.use('webapp', 'server');
  api.use(['templating'], 'client');
  api.use(['underscore'], ['client', 'server']);

  api.export('Spiderfork', 'server');

  api.add_files('spiderfork.html', 'client');
  api.add_files('spiderfork.js', 'server');
});
