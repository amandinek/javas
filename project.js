/*function calculateday(bday)
bday= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;



function akanaName (, name){
    var ag= calculateAge(year);
    var retirement=65-age;
    console.log(name +' '+  'retires in ' + retirement + ' years');
}

 CC = 19

 YY = 89

MM =7

DD =31

mod  function ( % )

var mark{
    firstName:Dean;
    v 
 = 1.89;// meters
}
 var johnHeight = 1.85; // meters
 var markWeight = 100;//kgs
 var jobWeight = 120;//kgs
 var markBmi = 100/(1.89*1.89);
 console.log(markBmi);
 var johnBmi = 120/(1.85*1.85);
 console.log(johnBmi) ;
 var isJohnGreater= markBmi>johnBmi;
 console.log(isJohnGreater);*/

 var gender = prompt('choose your gender');
var DD = parseInt(prompt('choose your day'));
var MM = parseInt(prompt('choose your month'));
var YY = parseInt(prompt('choose your year'));
var CC= parseInt(prompt('choose your century'));
var names=['akosua','adwoa','abenaa','akua','yaa','afua','ama'] ;
var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
calcday:function():{
    days=(((this.cc/4)-2*this.cc-1)+((5*this.yy/4))+((26*(this.mm+1)/10))+this.dd)%7;
return days;
}




/*var gender=document.getElementById('male').value;
if(gender=document.getElementById('male').ckecked){
  gender=document.getElementById('male').value;
  alert ([day]);
}*/


/*var gender=prompt('choose your gender');
if (gender==='female' && day>=0){
  alert (names[day]);
} else if(gender==='male' && day>=0){
  alert(maleNames[day])

}*/

/*var gender=document.getElementById('female').value;
if(gender=document.getElementById('female').ckecked){
  gender=document.getElementById('female').value;
  alert (day);
}
document.getElementById('answer').innerHTML=[day]
}*/

/*** var person={
    dd:31,
    mm:7,
    cc:10,
    yy:99,
    calcday:function(){
        this.days=(((this.cc/4)-2*this.cc-1)+((5*this.yy/4))+((26*(this.mm+1)/10))+this.dd)%7;
    return this.days;
    }
}***/

/*function days (){
var input = document.getElementById('bday').value;
var fullDay = new Date(input);
var CC ,DD, MM, YY;
if(!!fullDay.valueof()){
  
  var DD =  fullDay.getFullDate();
  var MM =  fullDay.getFullMont();
  var YY =  fullDay.getFullYear();
}*/

