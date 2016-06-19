var test = require ('ava');
var helpers = require('./helpers');
var boilerplates = [
  'foo', 'bar'
];

test('get option', t => {
  var options = {'foo': true};
  var option = helpers.getOption(boilerplates, options);
  t.is(option, 'foo');
});

test('get option throws error', t => {
  t.throws(helpers.getOption, 'Wrong boilerplate type was set');
});

test('get right path', t => {
  var path = 'test/app/templates';
  var type = 'foo';
  var sourcePath = helpers.getSourcePath(path, type);
  t.is(sourcePath, 'test/foo');
});