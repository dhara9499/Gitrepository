var Admin = function (name, email, password, city, state) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.city = city;
  this.state = state;
};
var registrationForm = document.getElementById("registrationForm");

function validate() {
  var adminDetails = [];
  if (nameValidation() && emailValidation() && checkPassword() && termsandconditions()) {
    adminDetails.push(new Admin(registrationForm.name.value, registrationForm.email.value, registrationForm.password.value, registrationForm.cities.value, registrationForm.states.value));
    localStorage.setItem('admin', JSON.stringify(adminDetails));
    location.replace("Login.html");
    var check = localStorage.getItem('flagForHideRegisterButton');
    localStorage.setItem('forHideRegisterButton', check);
  }
}

/* validation function */

function nameValidation() {
  nameExp = /^[a-zA-Z]+$/;
  return (nameExp.test(registrationForm.name.value)) ? true : alert("Enter Valid name");
}

function emailValidation() {
  emailExp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?/;
  return (emailExp.test(registrationForm.email.value)) ? true : alert("Enter valid email id eg: abc@gmail.com ");
}

function checkPassword() {
  return (registrationForm.password.value === registrationForm.confirmPassword.value) ? true :
    alert("please enter same password as above");
}

function termsandconditions() {
  var termsandconditions = document.getElementById('termsandconditions').checked;
  return (termsandconditions === true) ? true : alert("please check terms and condtions");
}

