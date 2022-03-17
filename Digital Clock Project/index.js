function digitalClock(){
  let date=new Date();
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let  seconds=date.getSeconds();
  

  let timeFormate="AM";

  if(hours===0){
    hours=12;
  }
  if(hours>12){
    hours=hours-12;
    timeFormate= 'PM';
  }
  //if(hours<10){
    //hours= '0'+hours;
  //}
  hours= hours<10? '0'+hours : hours; //ternari operator use kore 
  minutes= minutes<10? '0'+minutes : minutes;
  seconds = seconds<10? '0'+seconds : seconds;
  
  let finallTime=`${hours}:${minutes}:${seconds}`;
 
  document.getElementById("time").innerHTML=finallTime;
  document.querySelector("small").innerHTML=timeFormate;

  setInterval(digitalClock,1000);

}
digitalClock();
