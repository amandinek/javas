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

var person;
var gender = prompt('choose your gender');
var DD = parseInt(prompt('choose your day'));
var MM = parseInt(prompt('choose your month'));
var YY = parseInt(prompt('choose your year'));
var CC= parseInt(prompt('choose your century'));
var names=['akosua','adwoa','abenaa','akua','yaa','afua','ama'] ;
var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;



    if(day==1 && gender=='female'){
      alert(names[1]);
    } else if(day==2 && gender=='female'){
      alert(names[2]);
    } else if(day==3 && gender=='female'){
      alert(names[3]);
    } else if(day==4 && gender=='female'){
      alert(names[4]);
    } else if(day==5 && gender=='female'){
      alert(names[5]);
    } else if(day==6 && gender=='female'){
      alert(names[6]);
    }else{
      alert(names[0]);
    }

    if(day==1 && gender=='male'){
      alert(maleNames[1]);
    } else if(day==2 && gender=='male'){
      alert(maleNames[2]);
    } else if(day==3 && gender=='male'){
      alert(maleNames[3]);
    } else if(day==4 && gender=='male'){
      alert(maleNames[4]);
    } else if(day==5 && gender=='male'){
      alert(maleNames[5]);
    } else if(day==6 && gender=='male'){
      alert(maleNames[6]);
    }else{
      alert(maleNames[0]);
    }

   

