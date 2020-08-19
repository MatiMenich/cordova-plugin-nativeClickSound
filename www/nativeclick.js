var exec = require('cordova/exec');

var nativeclick = {

  watch: function(classes){
    var clickyClasses = classes || [];

    for(var i = 0; i < clickyClasses.length; i++) {
      watchClass(clickyClasses[i]);
    }

    function watchClass(name){
        document.addEventListener('click', function(event) {
        if (event.target.classList.contains(name) || event.target.parentElement.classList.contains(name) || event.target.parentElement.parentElement.classList.contains(name) || event.target.parentElement.parentElement.parentElement.classList.contains(name)) {
          exec(null, errorCallback, "NativeClick", "click", []);
        }
      });
    }    
  },
  watchByTagName: function(tags){
    var clickyTags = tags || [];

    for(var i = 0; i < clickyTags.length; i++) {
      watchTag(clickyTags[i]);
    }

    function watchTag(tag){
        document.addEventListener('click', function(event) {
        if (event.target.tagName == tag || event.target.parentElement.tagName == tag || event.target.parentElement.parentElement.tagName == tag || event.target.parentElement.parentElement.parentElement.tagName == tag) {
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
