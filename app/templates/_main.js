/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'samplePlugin': 'lib/jquery-plugins/jquery.sampleplugin'
	},
	// Remove the following to enable caching
	'urlArgs': 'cachebust=' + new Date().getTime()
});

/* -- Initialize App (app.js) -- */
requirejs(['app']);
