//  getting the element whih is used to displayed
const clock = document.getElementById('clock');

// setinterval is used which we have show each n every second
setInterval(function(){

// to get the date
    let date = new Date()
    // writing inside the empty id clock- 
clock.innerHTML = date.toLocaleTimeString();

}, 1000)


