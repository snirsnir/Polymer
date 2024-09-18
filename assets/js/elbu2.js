var upgradeTime = localStorage.getItem("timeLeft");
var seconds = upgradeTime;
var vid = document.getElementById("vid");
var counter= 0
var player;
var flag = 0
var thropyFlag = 0
 localStorage.setItem("name",name);
document
    .getElementById("correctanswer2")
    .addEventListener("click", function( e ){ //e => event
        if( thropyFlag == 0 && ! confirm("האם אתם בטוחים שברצונכם לוותר על הגביע?") ){
         
        } else {
         lastbutton()
          
        }
    });
    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '7XyhX8owG4Y',
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
				document.getElementById("textspain").style.visibility="visible";
	document.getElementById("textspain").style.display = "block";
			document.getElementById("monkey").style.display="block";
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
                 document.getElementById("natbag").style.visibility="visible";
		document.getElementById("natbag").style.display="block";
			
}
	  function lastbutton(){
		  		  var time = document.getElementById("countdown").innerHTML
var res = time.split(":");
var resInt = res.map(Number); //convert to int
var timeLeft = (3600+resInt[1]*60)+resInt[2]
	  localStorage.setItem("timeLeft",timeLeft);
	  localStorage.setItem("name",name);
	  window.location.href = "stats.html";
}
function showbut(){
		document.getElementById("answerdayelet").style.visibility= "visible";
	document.getElementById("answerdayelet").style.display = "block";
}

function ans(){
	var a1 = document.getElementById("textspain").value
	var firebaseRef = firebase.database().ref();
		firebaseRef.once('value', function(snapshot) {
	var a = snapshot.child('polymers').child('elbu').val();
       if (a1.toLowerCase() == a) {
		   	var firebaseRef = firebase.database().ref('polymers/teams');
			
	var newpoint = document.getElementById("points").innerHTML
	var numb = newpoint.match(/\d/g);
numb = numb.join("");
	firebaseRef.child(name).set(parseInt(numb)+10);
     document.getElementById("correct").style.visibility="visible";
		   document.getElementById("correct").style.display = "block";
		   document.getElementById("wrong").style.visibility="hidden";
		   document.getElementById("wrong").style.display = "block";
		   document.getElementById("answerdayelet").style.visibility="hidden";
		   document.getElementById("answerdayelet").style.display = "block";
		   document.getElementById("correctanswer").style.visibility="visible";
				document.getElementById("correctanswer").style.display = "block";
		   document.body.style.background = "#f3f3f3 url('assets/img/elbuli.jpg') cover";
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
				document.getElementById("correctans").innerHTML = ":התשובה " + "<br>" + a + "<br>" + "יש לרשום את התשובה בתיבת הטקסט";
				}
			}
	


		}) 

}
function throphy(){
	document.getElementById("box").style.visibility="visible";
				document.getElementById("box").style.display = "block";
}
function trophy2(){
	var pnt
	var a1 = prompt('נסו לפתוח את התיבה, היעזרו במספרים אשר אספתם');
	var firebaseRef = firebase.database().ref();
		firebaseRef.once('value', function(snapshot) {
	var a = snapshot.child('polymers').child('thropy').val();
       if (a1 == a) {
		   thropyFlag = 1
		    document.getElementById("throphyBut").style.visibility= "invisible";
	      document.getElementById("throphyBut").style.display = "none";
		  document.getElementById("pauseimg").style.visibility= "invisible";
	      document.getElementById("pauseimg").style.display = "none";
		   document.getElementById("monkey").style.visibility= "visible"
		   document.getElementById("monkey").style.display = "block";
		   document.getElementById("textgavia").style.visibility= "visible"
		   document.getElementById("textgavia").style.display = "block";
		   var firebaseRef = firebase.database().ref();
		firebaseRef.on('value', function(snapshot) {
		pnt = snapshot.child('polymers').child('teams').child(name).val();	
			 
		})
		 var firebaseRef2 = firebase.database().ref('polymers/teams');
	       firebaseRef2.child(name).set(pnt + "🏆");	
          
}
			else{
				if (flag < 2){
				alert("טעות! נסו שנית")
			}
				if (flag >=2){
				alert("טעות! רמז: השתמשו בגימטריה")
				}
				flag = flag+1
		}
		})
}
	