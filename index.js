/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time_str) {
    let hour = parseInt(time_str.split(':')[0]);
    if (hour <= 11 ) {
        return "Good Morning";
    }
    else if (hour <= 17 ) {
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }
}


/* Write your implementation of displayMessage() */
function displayMessage(str) {
    let grt = document.getElementById("greeting");
    grt.innerText = str;
}
