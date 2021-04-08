/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
// our user input get submited and greet takes that input as a string
function greet(string){
  //we create a variable that represent that string after its been parsed and turned an integer
  let time = parseInt(string)
  // need to take this string and we need to parse it 
  if (time < 12){
    return('Good Morning')
  }
  else if (time > 17){
    return('Good Evening')
  }
  else{
    return('Good Afternoon')
  }
  // console.log('Goood Afternoon!')
  // return console.log('Good Morning!')
  // }
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById('greeting').innerText = string
}