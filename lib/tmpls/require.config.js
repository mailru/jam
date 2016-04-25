(function (global) {
	 var packages = "{data}";

	 if (typeof module === 'object' && module.exports) {
		 module.exports = packages;
	 } else if (typeof require === 'function' && require.config) {
		 require.config("{data}");
	 } else if (typeof global === 'object') {
		 global.require  = packages;
		
		 //@deprecated
		 global.jam = packages;
	 }
 })(this);

