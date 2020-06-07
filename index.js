/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (string) {
  
  let hour = parseInt(string)
  let greeting = ""

  if (hour < 12) {
   return greeting = "Good Morning"
  } else if ( hour >= 12 && hour < 17 ) {
  return greeting = "Good Afternoon"
  } else if ( hour > 17 && hour < 24) {
  return greeting = "Good Evening"
  }

}

function displayMessage(string) {
   let greet = document.getElementById("greeting")
    greet.innerText = string
    
}




/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
