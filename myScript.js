//log
console.log("tian long is so suck")
document.getElementById("time").onclick = function GetClock(){
var d=new Date();
var nmonth=(d.getMonth()+1),ndate=d.getDate(),nyear=d.getFullYear();
if(nmonth<=9) nmonth="0"+nmonth;
if(ndate<=9) ndate="0"+ndate;
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+nyear+"-"+nmonth+"-"+ndate+" "+nhour+":"+nmin+":"+nsec+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);
console.log("tianlong is suck")