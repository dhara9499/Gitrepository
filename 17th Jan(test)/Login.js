var loginForm = document.getElementById("loginForm");

//var loginForm = document.getElementsByName("loginForm");
function Login() {
  var emailid = JSON.parse(localStorage.getItem('admin'))[ 0 ].email;
  var i = 0;
  var pwd = JSON.parse(localStorage.getItem('admin'))[ 0 ].password;
  var inputEmail = loginForm.email.value;
  var inputPassword = loginForm.password.value
  var subuser = JSON.parse(localStorage.getItem('subUserKey'));
  if (inputEmail === emailid && inputPassword === pwd) {
    window.location.replace("Dashboard.html");
  }
  while (i < subuser.length) {
    if (inputEmail === subuser[ i ].email && inputPassword === subuser[ i ].password) {
      window.location.replace("Subuser.html");
      sessionStorage.setItem('logedInUsername', subuser[ i ].name);
      var birthday = JSON.parse(localStorage.getItem('Birthday'))[i];
      sessionStorage.setItem('birthday', birthday); 
      break;
    }
    i++;
  }
}
var flagForHideRegisterButton = false;
function Registration() {
  flagForHideRegisterButton = true;
  localStorage.setItem('flagForHideRegisterButton', flagForHideRegisterButton);
  location.replace("Registration.html");
}

if (localStorage.getItem('forHideRegisterButton')) {
  document.getElementById('btnRegistration').hidden = true;
  document.getElementById('or').hidden = true;
}
//localStorage.clear();