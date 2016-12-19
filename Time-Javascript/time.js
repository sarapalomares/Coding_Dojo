var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function time(){

if (MINUTE < 30){
      MINUTE = "just after";
}
else if(MINUTE > 30){
      MINUTE = "almost after";
}
else if(MINUTE === 30){
      MINUTE === "half past";
}
if(PERIOD = "AM" ){
      PERIOD = "AM";
}
else if(PERIOD = "PM"){
      PERIOD = "PM";
}
console.log("It's "+MINUTE+" "+HOUR+PERIOD);
}
time();
