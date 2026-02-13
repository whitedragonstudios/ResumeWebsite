function updateDateTime() {
    var today = new Date();
    var hours = today.getHours();
     var minutes = today.getMinutes(); 
        if (minutes < 10) {
            minutes = '0' + minutes;
        }   
    var time = hours + ":" + minutes;
    var formattedDate = time + " "+ today.toDateString(); 
    document.getElementById("datetime").textContent = formattedDate;
    console.log("Date and time updated");
    }
updateDateTime();
setInterval(updateDateTime, 60000);
console.log("Note this webpage is for informational purposes only");