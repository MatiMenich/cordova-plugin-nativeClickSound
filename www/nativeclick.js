var exec = require('cordova/exec');

var nativeclick = {

	watch: function(classes){

    var errorCallback = function(error){
      console.error("Native Click Error:"+error);
    };

		document.body.onclick = function(e) {
			e=window.event? event.srcElement: e.target;

			var clickyClasses = classes || [];

			for(var i = 0; i < clickyClasses.length; i++) {
				if(e.className && e.className.indexOf(clickyClasses[i]) != -1) {
					exec(null, errorCallback, "NativeClick", "click", options);
				}
			}
		};
	}
};

module.exports = nativeclick;
