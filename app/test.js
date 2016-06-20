var test = require ('ava');
var assert  = require('yeoman-assert');
var helpers = require('./helpers');
var yoHelpers = require('yeoman-test');
var path = require('path');

var tempPath = path.join(__dirname, 'temp');
var filesPath = path.join(tempPath, 'browserify');
var boilerplates = [
  'foo', 'bar'
];
var expectedFiles = [
  '.eslintrc',
  '.gitignore',
  'Makefile',
  'package.json',
  'README.md',
  'vendor/vendor.js',
  'app/initialize.js',
  'app/assets/index.html',
  'app/components/App.js',
  'app/components/ItemView.js',
  'app/styles/app.css',
  'app/templates/item.jst'
];

expectedFiles = expectedFiles.map(function(file) {
  return path.join(filesPath, file);
});

test.cb.before(function(t) {
  var deps = [
    [yoHelpers.createDummyGenerator(), 'ava:app']
  ];

  yoHelpers.run(path.join(__dirname))
    .inDir(tempPath)
    .withOptions({browserify: true})
    .withGenerators(deps)
    .on('end', t.end);
});

test('copy files', function() {
  assert.file(expectedFiles);
});

test('"getOption" return value equal to boilerplate name', function(t) {
  var options = {'foo': true};
  var option = helpers.getOption(boilerplates, options);
  t.is(option, 'foo');
});

test('"getOption" throws error', t => {
  t.throws(helpers.getOption, 'Wrong boilerplate type was set');
});

test('"getSourcePath" get root generator path', t => {
  var path = 'test/app/templates';
  var type = 'foo';
  var sourcePath = helpers.getSourcePath(path, type);
  t.is(sourcePath, 'test/foo');
});