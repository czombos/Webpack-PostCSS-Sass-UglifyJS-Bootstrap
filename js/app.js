import 'bootstrap';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-brands';

var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

jQueryBridget( 'flickity', Flickity, $ );

$(function() {
	console.log('Page Loaded');
});