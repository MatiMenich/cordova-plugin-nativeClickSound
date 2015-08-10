document.body.onclick = function(e){
   e=window.event? event.srcElement: e.target;console.log(e);
   if(e.className && e.className.indexOf('button')!=-1){
   	cordova.exec(function () { },
                function () { },
                "SoundEffects",
                "click",
                []);

   }
   else if(e.className && e.className.indexOf('sound-click')!=-1){
   		cordova.exec(function () { },
                function () { },
                "SoundEffects",
                "click",
                []);

   }
};
