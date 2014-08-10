/* jslint browser: true */
/* global define */

/** A sample jQuery plugin. Modify or use as a template for your own plugins. */
define(['jquery'], function ($) {
	'use strict';

	$.fn.samplePlugin = function (options) {
		// The settings object provides default settings.
		// The options argument can override them.
		var settings = $.extend({
			htmlToAdd: '<p>This text was added by a sample plugin.</p>'
		}, options);

		// The meat of the plugin. Here we just append some HTML to the
		// target jQuery object.
		this.append($(settings.htmlToAdd));

		// Always return the target object to allow chaining.
		return this;
	};
});
