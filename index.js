/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let hhMMArray = string.split(":");

  const hours = parseInt(hhMMArray[0], 10);

  if (hours < 12) {
    return "Good Morning"
  } else if (hours < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greetingNode = document.querySelector("h1#greeting")
  greetingNode.innerText = string;
}