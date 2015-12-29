Package.describe({
  name: 'skys215:bootstrap-material-datetimepicker',
  summary: 'Material Datetimepicker',
  version: '2.0.0',
  git: 'https://github.com/skys215/bootstrap-material-datetimepicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use('momentjs:moment@2.9.0');
  api.use('jquery');
  api.use('fezvrasta:bootstrap-material-design@0.3.0');

  api.addFiles('css/bootstrap-material-datetimepicker.css', 'client');
  api.addFiles('js/bootstrap-material-datetimepicker.js', 'client');
});
