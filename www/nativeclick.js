var exec = require('cordova/exec');

var nativeclick = {

  watch: function(classes){
    var clickyClasses = classes || [];

    for(var i = 0; i < clickyClasses.length; i++) {
      watchClass(clickyClasses[i]);
    }

    function watchClass(name){
      document.body.addEventListener( 'click' , function(e) {
        e = window.event? event.srcElement: e.target;
        if(e.className && e.className.indexOf(name) != -1) {
          exec(null, errorCallback, "NativeClick", "click", []);
        }
      });
    }    
  },

  trigger: function () {
    exec(null, errorCallback, "NativeClick", "click", []);
  }
};

module.exports = nativeclick;

var errorCallback = function(error){
  console.error("Native Click Error:"+error);
};