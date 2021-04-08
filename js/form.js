var x = document.forms["myForm"]["name"].value;
var y = document.forms["myForm"]["subject"].value;
var z = document.forms["myForm"]["email"].value;
var t = document.forms["myForm"]["message"].value;

function validateForm(){
    if (x === '' || y === '' || z === '' || t === ''){
        alert("Form must be full filled out");
        return false;
    }
}