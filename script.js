let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;


function start(){
    timer = true;
    stopwatch();   
}

function stop(){
       timer = false;
}

function restart(){
      timer = false;
        hour = 0;
        minute = 0;
        second = 0;
        count = 0;
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("count").innerHTML = "00";
}
function stopwatch(){
       if (timer == true){
          count = count+1;
          if(count == 100){
              second = second+1;
              count = 0;
          }
          if (second == 60){
              minute = minute+1;
              second = 0;
          }
          if(minute == 60){
              hour = hour+1;
              minute = 0;
          }

          let hourS = hour;
          let minuteS = minute;
          let secondS = second;
          let countS = count;

          if(hour<10){
              hourS ="0" + hourS;
          }
          if(minute<10){
            minuteS ="0" + minuteS;
        }
        if(second<10){
            secondS ="0" + secondS;
        }
        if(count<10){
            countS ="0" + countS;
        }
          document.getElementById("count").innerHTML = countS;
          document.getElementById("second").innerHTML = secondS;
          document.getElementById("minute").innerHTML = minuteS;
          document.getElementById("hour").innerHTML = hourS;

         setTimeout("stopwatch()" , 10)
       }
}
