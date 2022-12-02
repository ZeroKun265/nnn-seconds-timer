window.addEventListener('load', function () {
    // We get all the elements that need to change when the page is loaded
    // If we didn't they wouldn't exist, and there would be big problems (our objects would be undefined)
    const today =  document.getElementById("today");
    const nnn_active = this.document.getElementById("nnn-active");
    const nnn_time_spent = this.document.getElementById("nnn-time-spent");
    const nnn_time_missing = this.document.getElementById("nnn-time-missing");
    const motivational_message = this.document.getElementById("motivational-message");
    motivational_message.innerText = "Hello";
    const year = moment().format("YYYY");
    const first_december = moment(year+"/12/01 00:00:00");
    const first_november = moment(year+"/11/01 00:00:00");
    var next_year = parseInt(year)+1
    var next_year = next_year.toString()
    const first_november_next_year = moment(next_year+"/11/01 00:00:00")

    setInterval(function(){
        var right_now = moment();
        // We update the date
        today.innerHTML = "<b>Date: </b>" + right_now.format("MMMM Do YYYY, h:mm:ss a");

        // We check if it's november
        if (right_now.format("M") === "11") {
            nnn_active.innerHTML = "No";

            var time_missing = right_now.diff(first_december, "seconds");
            nnn_time_missing.innerHTML = `${Math.abs(time_missing)}s`;

            var time_spent = first_november.diff(right_now, "seconds")
            nnn_time_spent.innerHTML = `${Math.abs(time_spent)}s`;

            motivational_message.innerHTML = "Stay Strong Soldier, You can do it!";

        } else {
            nnn_active.innerHTML = "Yes";
            // If it's not november we set both the times to 0 and then place a timer for the next NNN
            nnn_time_missing.innerHTML = "0";
            nnn_time_spent.innerHTML = "0";
            var time_to_next_november = right_now.diff(first_november_next_year, "seconds")
            motivational_message.innerHTML = `It's calm, the next mission will be in ${Math.abs(time_to_next_november)}`;
        }
    
    }, 1000);
})

