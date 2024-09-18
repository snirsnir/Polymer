var upgradeTime = localStorage.getItem("timeLeft");
var seconds = upgradeTime;
var vid = document.getElementById("natbagvid");

var counter = 0;
 var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('playerhide', {
          height: '390',
          width: '640',
          videoId: 'l0dAnmqCUM0',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }

    // autoplay video
    function onPlayerReady(event) {
      
    }

    // when video ends
    function onPlayerStateChange(event) {  
        if(event.data === 0) {            
            document.getElementById("ansdiv").style.visibility="visible";
	document.getElementById("ansdiv").style.display = "block";
        }
    }
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
function nex1(){

	document.getElementById("nex2").style.visibility="visible";
	document.getElementById("nex2").style.display = "block";
	document.getElementById("playerhide").style.visibility="visible";
	document.getElementById("playerhide").style.display = "block";
	document.getElementById("tut").style.visibility="visible";
	document.getElementById("tut").style.display = "block";

		document.getElementById("nextb").style.visibility= "hidden";
	document.getElementById("nextb").style.display = "none";
	
}

var name = localStorage.getItem("name");
document.getElementById("name").innerHTML = "שם התלמיד: " + name 
var firebaseRef = firebase.database().ref();
		firebaseRef.on('value', function(snapshot) {
	var points = snapshot.child('polymers').child('teams').child(name).val();
	document.getElementById("points").innerHTML = "נקודות : " + points 	
		})

function ans(){
	var a1 = document.getElementById("textnatbag").value
	var firebaseRef = firebase.database().ref();
		firebaseRef.once('value', function(snapshot) {
	var a = snapshot.child('polymers').child('natbag').val();
       if (a1 == a) {
		   	var firebaseRef = firebase.database().ref('polymers/teams');
			
	var newpoint = document.getElementById("points").innerHTML
	var numb = newpoint.match(/\d/g);
numb = numb.join("");
	firebaseRef.child(name).set(parseInt(numb)+10);
     document.getElementById("correct").style.visibility="visible";
		   document.getElementById("correct").style.display = "block";
		   document.getElementById("wrong").style.visibility="hidden";
		   document.getElementById("wrong").style.display = "block";
		   document.getElementById("answer").style.visibility="hidden";
		   document.getElementById("answer").style.display = "block";
		   document.getElementById("correctanswer").style.visibility="visible";
				document.getElementById("correctanswer").style.display = "block";
	   }
			else {
	var firebaseRef = firebase.database().ref('polymers/teams');
			
	var newpoint = document.getElementById("points").innerHTML
	var numb = newpoint.match(/\d/g);
numb = numb.join("");
	firebaseRef.child(name).set(parseInt(numb)-1);
    document.getElementById("wrong").style.visibility="visible";
				document.getElementById("wrong").style.display = "block";
			counter +=1;
				document.getElementById("wrong").innerHTML = "טעות מספר "+ counter;
				if(counter == 2){
			    document.getElementById("clue1").style.visibility="visible";
				document.getElementById("clue1").style.display = "block";
				}
				if(counter == 4){
			    document.getElementById("clue2").style.visibility="visible";
				document.getElementById("clue2").style.display = "block";
				}
				if(counter == 6){
			    document.getElementById("correctans").style.visibility="visible";
				document.getElementById("correctans").style.display = "block";
				document.getElementById("correctans").innerHTML = "התשובה: " + a + "<br>" + "יש לרשום את התשובה בתיבת הטקסט";
				}
			}
	


		}) 

}
	  function lastbutton(){
		  var time = document.getElementById("countdown").innerHTML
var res = time.split(":");
var resInt = res.map(Number); //convert to int
var timeLeft = (3600+resInt[1]*60)+resInt[2]
	  localStorage.setItem("timeLeft",timeLeft);
	  localStorage.setItem("name",name);
	  window.location.href = "hes.html";
}

	  
