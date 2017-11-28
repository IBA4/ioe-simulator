$(document).ready(function(){
    var auth = Cookies.getJSON('auth');
    console.log(auth);
    if(auth.auth){
        $("h4").text("Welcome "+auth.user+"!");
    }else{
        location.replace("../index.html");//In case someone gets access to this page without auth
    };
});

//Take examination still left.