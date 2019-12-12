var attempt = 5;
function validate(){
var Username = document.getElementById("Username").value;
var Password = document.getElementById("password").value;
if ( Username == "ADMIN" && Password == "ADMIN"){
window.location = "admin.html";
return false;
}
else if ( Username == "USER" && Password == "USER"){
window.location = "home.html";
return false;
}
else{
attempt --;
alert("Login gagal, tersisa "+attempt+" attempt");
if( attempt == 0){
document.getElementById("Username").disabled = true;
document.getElementById("Password").disabled = true;
document.getElementById("Login").disabled = true;
return false;
}
}
}
