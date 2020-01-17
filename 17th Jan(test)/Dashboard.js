document.getElementById("welcomemessage").innerHTML = 'Hello' + ' ' + JSON.parse(localStorage.getItem('admin'))[0].name;


  //var ages1 = [];
  var j = 0;
  var ages1 = JSON.parse(localStorage.getItem('Ages'))
  var count_lessthen18 = 0, count_18to50 = 0, count_greater50 = 0;
  while (j < ages1.length) {
    if (ages1[ j ] < 18) {
      count_lessthen18++;
    } else if (ages1[ j ] >= 18 && ages1[ j ] < 50) {
      count_18to50++;
    } else {
      count_greater50++;
    }
    j++;
  }

  document.getElementById("lessthen18").innerHTML = 'User < 18' + '<br>' + count_lessthen18;
  document.getElementById("18to50").innerHTML = 'Users in 18 to 50' + '<br>' + count_18to50;
  document.getElementById("greaterthen50").innerHTML = 'Users greaterthen 50' + '<br>' + count_greater50;

  var birthdays = JSON.parse(localStorage.getItem('Birthday'));
  var index = 0;
  while(index < birthdays.length) {
    if(birthdays[index] === false) {

    }
    else {
      document.write(birthdays[index] + '<br>');
    }
    index++;
  }
   