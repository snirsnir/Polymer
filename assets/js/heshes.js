var upgradeTime = localStorage.getItem("timeLeft");
var seconds = upgradeTime;
var vid = document.getElementById("vid");


    


var name = localStorage.getItem("name");
document.getElementById("name").innerHTML = "שם התלמיד: " + name 
var firebaseRef = firebase.database().ref();
		firebaseRef.on('value', function(snapshot) {
	var points = snapshot.child('polymers').child('teams').child(name).val();
	document.getElementById("points").innerHTML = "נקודות : " + points 	
		})
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);

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

// Play Music

console.clear();


console._log_old = console.log
console.log = function(msg) {
console._log_old(msg);
	if (msg == "Audio Started."){
		document.getElementById("desc").style.visibility="visible";
	document.getElementById("desc").style.display = "block";
	}
	if (msg == "Audio finished.")
		document.getElementById("nex2").style.visibility="visible";
	document.getElementById("nex2").style.display = "block";
}
	  function nex1(){
		  		  var time = document.getElementById("countdown").innerHTML
var res = time.split(":");
var resInt = res.map(Number); //convert to int
var timeLeft = (3600+resInt[1]*60)+resInt[2]
	  localStorage.setItem("timeLeft",timeLeft);
	  localStorage.setItem("name",name);
	  window.location.href = "plast.html";
}
