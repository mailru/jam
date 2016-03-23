(function (global) {
	 var packages = "{data}"; // placeholder for jam config

	 if (typeof module === 'object' && module.exports) {
		 // Node. Does not work with strict CommonJS, but
		 // only CommonJS-like environments that support module.exports,
		 // like Node.
		 module.exports = packages;
	 } else if (typeof require === 'function' && require.config) {
		 // RequireJS.
		 global.require = packages;
		 require.config("{data}"); // don't "optimize" it!!! or rjs will be broken
	 } else if (typeof global === 'object') {
		 global.require = packages;
	 }
 })(this);

