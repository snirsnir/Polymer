
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


// Clue 1
$("#startJourney").click(function () {
var a1 = document.getElementById("teams").value
var firebaseRef = firebase.database().ref('polymers/teams');
	firebaseRef.child(a1).set(1000);	
var param = 1; 
var today = new Date();
var newDate = today.setHours(today.getHours() + param);
var lastDate = newDate + 1800000	
$('#countdown').countdown(lastDate, function(event) {
  $(this).html(event.strftime('%H:%M:%S'));

});
	
  setTimeout(function() {  
var time = document.getElementById("countdown").innerHTML

var res = time.split(":");
var resInt = res.map(Number); //convert to int
var timeLeft = (3600+resInt[1]*60)+resInt[2]
	  localStorage.setItem("timeLeft",timeLeft);
	  localStorage.setItem("name",a1);
    window.location.href = "clue2.html";
  }, 2000);
	
});

console.clear();