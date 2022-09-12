const submit = document.getElementById("submit");
window.onload = () => {

console.log("hello:")

//tocheck if the letters are 5 letters
function myFunction() {
    // Get the value of the input field with id="submit"
    let x = document.getElementById("submit").value;
    // If x is 5
    let text;
    if ( x > 5 ) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("text").innerHTML = text;
  }
   submit.addEventListener('click',myFunction);
}

