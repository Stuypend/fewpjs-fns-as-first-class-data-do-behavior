/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(time)
{
  const hours = parseInt(time.split(0, 2));

  if (hours < 12)
  {
    return "Good Morning"
  }
  else
  {
    if(hours <= 17) {
      return "Good Afternoon"
    }
    else
      return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */


function displayMessage(text)
{
   document.getElementById('greeting').textContent = 'TEST';
   console.log(document.getElementById('greeting').textContent)
  return console.log(document.getElementById('greeting').textContent)
}