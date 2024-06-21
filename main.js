var title="";
title+=" <h2>MY FAVOURITE PROGRAMMING LANGUAGES </h2>";
document.querySelector("div").innerHTML+=title;


var lang=['C++' , 'JAVA SCRIPT' , ' HTML'];
var result="";


for(var i=0 ; i<3 ;i++){
     result+="<li>" + lang[i] + "</li>";

}
document.querySelector("ul").innerHTML=result;