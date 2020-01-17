var subUser = function (name, email, password, birthdate) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.birthdate = birthdate;

};

function splitDate(date) {
  var result = date.split('-');
  return result;
}
subUser.prototype.calculateAge = function () {
  var splittedDate = splitDate(this.birthdate);
  var year = splittedDate[ 0 ];
  return Number(new Date().getFullYear()) - year;
}
subUser.prototype.isBirthday = function () {
  var splittedDate = splitDate(this.birthdate);
  var month = splittedDate[ 1 ];
  var day = splittedDate[ 2 ];
  return (new Date().getMonth() + 1 == month && new Date().getDate() == day) ? 'today' + ' '+ this.name + '\'s Birthday' :false;
}

var subUserForm = document.getElementById('Subusers');
var subUsers = [];
function addUser() {
  if (nameValidation() && emailValidation()) {
    if (localStorage.getItem('subUserKey') === null) {
      subUsers.push(new subUser(subUserForm.name.value, subUserForm.email.value, subUserForm.password.value, subUserForm.birthdate.value));
      localStorage.setItem('subUserKey', JSON.stringify(subUsers));
      showUser();
    }
    else {
      subUsers = JSON.parse(localStorage.getItem('subUserKey'));
      subUsers.push(new subUser(subUserForm.name.value, subUserForm.email.value, subUserForm.password.value, subUserForm.birthdate.value));
      localStorage.setItem('subUserKey', JSON.stringify(subUsers));
      showUser();
    }
    ages();
    Birthdays();
  }
}

function showUser() {
  subUsers.forEach(function (element, index) {
    return subUsers[ index ] = Object.assign(new subUser, element);
  });
  var subUserList = "";
  subUsers.forEach(function (element) {
    return subUserList += (`<tr>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.password}</td>
                        <td>${element.birthdate}</td>
                        <td>${element.calculateAge()}</td>
                        <td><a href='#' onclick = 'EditUser()'>Edit</a></td>
                        <td><a href="#" onclick ='DeleteStudent()'>Delete</a></td>
                      </tr>`);
  });
  if (subUserList != "") {
    var resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = `<table border="1">
                                  <tr>
                                
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>Password</th>
                                      <th>Birthdate</th>
                                      <th>Age</th>
                                      <th>Actions</th>
                                  </tr>
                                  ${subUserList}
                              </table>`;
  }
}

function ages() {
  var subUser2 = [];
  subUser2 = JSON.parse(localStorage.getItem('subUserKey'));
  subUser2.forEach((element, index) => {
    subUser2[ index ] = Object.assign(new subUser, element);
  });
  var ages = [];
  subUser2.forEach(element => {
    ages.push(element.calculateAge());
  });
  localStorage.setItem('Ages', JSON.stringify(ages));
}
function Birthdays() {
  var subUser2 = [];
  subUser2 = JSON.parse(localStorage.getItem('subUserKey'));
  subUser2.forEach((element, index) => {
    subUser2[ index ] = Object.assign(new subUser, element);
  });
  var Birthday = [];
  subUser2.forEach(element => {
    Birthday.push(element.isBirthday());
  });
  localStorage.setItem('Birthday', JSON.stringify(Birthday));
}
/* validation */
function nameValidation() {
  nameExp = /^[a-zA-Z]+$/;
  return (nameExp.test(subUserForm.name.value)) ? true : alert("Enter Valid name");
}

function emailValidation() {
  emailExp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?/;
  return (emailExp.test(subUserForm.email.value)) ? true : alert("Enter valid email id eg: abc@gmail.com ");
}
