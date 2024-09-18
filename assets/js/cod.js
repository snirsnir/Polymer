var upgradeTime = localStorage.getItem("timeLeft");
var seconds = upgradeTime;
var vid = document.getElementById("vid");
var flag = 0;

 window.onload = function () {
 
	  setTimeout(function() {
		   var bg = document.getElementById("zoom");
               bg.style.backgroundImage = "url('assets/img/bikta3.jpg')"; 
		document.getElementById("imgs").style.visibility="visible";
	document.getElementById("imgs").style.display = "block";
        },2800);

  }
   function myMove() {
	     var elem = document.getElementById("slime");
	   if (flag == 0){
		 
  var pos = 78;
  var pos2 = 48;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos2 == 24) {
      clearInterval(id);
    } else {
      pos=pos-0.34;
		pos2--;
      elem.style.top = pos+'%'; 
      elem.style.left = pos2+'%'; 
    }
  }
		  
	   }
	if (flag == 1){
		  var pos = 78;
  var pos2 = 24;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos2 == 48) {
      clearInterval(id);
    } else {
    
		pos2++;
      elem.style.top = pos+'%'; 
      elem.style.left = pos2+'%'; 
    }
  }
		
	}
	   flag++
	if (flag == 2){
		document.getElementById("slime").src='./assets/img/slime2.png';
	}
}

function door(){
	if(flag >= 2){
	let a2 = prompt('הכניסו את הקוד');
	var firebaseRef = firebase.database().ref();
		firebaseRef.once('value', function(snapshot) {
	var a = snapshot.child('polymers').child('cod').val();
    
	if (a2 == a){
			alert("מצוין הדלת נפתחה!! ")
		 var bg = document.getElementById("zoom");
               bg.style.backgroundImage = "url('assets/img/bikta4.jpg')"; 
		setTimeout(function(){ document.getElementById("zoom").style.transform = "scale(1.4)";}, 2000);
		
		setTimeout(function(){ nex1() }, 5000);
		}
	else{
		alert("טעיתם! נסו שוב")
	}
	
})
	}
	else{
		alert("אין ברשותכם את הקוד. נסו למצוא אותו")
	}
}


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
	  window.location.href = "elbu2.html";
}
