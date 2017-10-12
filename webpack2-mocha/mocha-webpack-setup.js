global.expect = require('chai').expect;

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
global.window = window;
global.document = window.document;

var jQuery = require('jquery');
jQuery.window  = window;
