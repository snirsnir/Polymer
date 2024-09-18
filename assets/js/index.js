var upgradeTime = localStorage.getItem("timeLeft");
var seconds = upgradeTime;
var vid = document.getElementById("vid");

var player;
    
    // create youtube player
    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('playerbig', {
          height: '390',
          width: '640',
          videoId: 'S29q8AzC2Sc',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }

    // autoplay video
    function onPlayerReady(event) {
     event.target.playVideo();
    }

    // when video ends
    function onPlayerStateChange(event) {        
        if(event.data === 0) {            
            document.getElementById("natbag").style.visibility="visible";
			document.getElementById("natbag").style.display = "block";
        }
    }




(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);


	  function natbag2(){

	  window.location.href = "index2.html";
}