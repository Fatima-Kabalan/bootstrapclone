const submit = document.getElementbyID("submit");
window.onload = () => {
    console.log("hello:")
//tocheck if the letters are 5 letters
function myFunction() {
    // Get the value of the input field with id="submit"
    let x = document.getElementById("submit").value;
    // If x is 5
    let text;
    if ( x = 5 ) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("text").innerHTML = text;
  }

//to check if the input is filled with the name
function validate() {
    if (document.myForm.name.value == "") {
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
}
   submit.addEventListener('click',validate);
}