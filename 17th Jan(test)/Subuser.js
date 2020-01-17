document.getElementById("welcomemessage").innerHTML = 'Hello' + ' ' + sessionStorage.getItem('logedInUsername');

if(sessionStorage.getItem('birthday') != "false") {
  document.getElementById("Birthday").innerHTML = sessionStorage.getItem('birthday');
}
 