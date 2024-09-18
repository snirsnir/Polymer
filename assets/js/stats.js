var query = firebase.database().ref("polymers").child("teams").orderByKey();
query.once("value")
  .then(function(snapshot) {
	var table = document.getElementById("ex-table");
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
		var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);	
       cell1.innerHTML = key ;
	   cell2.innerHTML = childData;
           
  });
});

setTimeout(function() {
  location.reload();
}, 20000);