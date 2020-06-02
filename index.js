/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {

    if (parseInt(string, 10) < 12) {
        return 'Good Morning';
    } else if (parseInt(string, 10) > 17) {
        return 'Good Evening';
    } else {
        return 'Good Afternoon';
    }



};
/* Write your implementation of displayMessage() */
function displayMessage(input) {
    document.getElementById('greeting').innerText = input;

}