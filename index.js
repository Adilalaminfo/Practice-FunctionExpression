function login(userName,Password){
    var message;
    if(Password=="Adilalam"){
        message=function(){
            alert("Welcome" + userName + "Bara Chakand");
        };
    }
        else{
        message=function(){
            alert("Incorrect Password");
        };
    }
    return message;
}
var m=login("mdadilalam","Adilalam");
  m();