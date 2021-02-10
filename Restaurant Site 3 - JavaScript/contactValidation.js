var contactForm = document.forms["contactForm"];
var inputPhone = document.getElementById("inputPhone");

function validate() {
  document.getElementById("wrongLengthMessage").style.display = "none";
  var phone = inputPhone.value;
  if (phone.length < 10 || phone.length > 11){
    document.getElementById("wrongLengthMessage").style.display = "block";
    return false;
  }
  else {
    alert("All inputs are valid and have been submitted, thank you.")
    return false;
  }
}

function resetView() {
  document.getElementById("wrongLengthMessage").style.display = "none";
  return false;
}