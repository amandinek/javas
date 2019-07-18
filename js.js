function dayNames(){

  var gender,DD,MM,YY;
  var gender = prompt('choose your gender');
  var DD = parseInt(prompt('choose your day'));
  var MM = parseInt(prompt('choose your month'));
  var YY = parseInt(prompt('choose your year'));
  
var century = (YY-1)/100+1;
var CC=parseFloat(century);
var names=['akosua','adwoa','abenaa','akua','yaa','afua','ama'] ;
var dayOfBirth=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var day = parseFloat ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
var day= (day.toFixed(0));

  if(day==1 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[1]  + ' your akana name is '+ names[1]);
    } else if(day==2 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[2]  + ' your akana name is '+ names[2]);
    } else if(day==3 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[3] +'your akana name is '+ names[3]);
    } else if(day==4 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[4] +'your akana name is '+ names[4]);
    } else if(day==5 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[5] +'your akana name is '+ names[5]);
    } else if(day==6 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[6] +'your akana name is '+ names[6]);
    }else if(day==0 && gender=='female'){
      alert(' you were born on '+ dayOfBirth[0] +'your akana name is '+ names[0]);
    }else if(day==1 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[1] +'your akana name is '+ maleNames[1]);
    } else if(day==2 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[2] +'your akana name is '+ maleNames[2]);
    } else if(day==3 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[3] +'your akana name is '+ maleNames[3]);
    } else if(day==4 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[4] +'your akana name is '+ maleNames[4]);
    } else if(day==5 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[5] +'your akana name is '+ maleNames[5]);
    } else if(day==6 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[6] +'your akana name is '+ maleNames[6]);
    }else if (day==0 && gender=='male'){
      alert(' you were born on '+ dayOfBirth[0] +'your akana name is '+ maleNames[0]);
    }
  }
  
  

   

