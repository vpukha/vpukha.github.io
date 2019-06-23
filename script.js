var lastDate = new Date("06/22/2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = now - lastDate;
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'> годин</span>";
        document.getElementById("minutes").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'> хвилин</span>";
        document.getElementById("seconds").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'> секунд</span>";
    
}, 1000);