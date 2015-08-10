var exec = require('cordova/exec');

var nativeclick = {

	watch: function(classes){
		document.body.onclick = function(e) {
			e=window.event? event.srcElement: e.target;

			classes = classes || [];

			for(var i = 0; i < clasess.length; i++) {
				if(e.className && e.className.indexOf(classes[i]) != -1) {
					exec(successCallback, errorCallback, "NativeClick", "click", options);
				}
			}
		};
	}
};

module.exports = nativeclick;
