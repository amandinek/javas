          function dayNames(){
      var input =document.getElementById('bday').value;
      var DD,MM,YY;
      var d =new Date (input);
      
      YY = d.getFullYear();
      MM = d.getMonth();
      MM=MM+1;
      DD = d.getDate();
      
      
            
      
          var century = (YY-1)/100+1;
          var CC=parseFloat(century);
          var names=['akosua','adwoa','abenaa','akua','yaa','afua','ama'] ;
          var dayOfBirth=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
          var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
          var day = parseFloat ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
          var day= (day.toFixed(0));

            if( document.getElementById("female").checked = true && day==1){
              alert(' document.getyou were born on '+ dayOfBirth[1]  + ' your akana name is '+ names[1]);
              } else if( document.getElementById("female").checked = true && day==2){
                alert(' you were born on '+ dayOfBirth[2]  + ' your akana name is '+ names[2]);
              } else if( document.getElementById("female").checked = true &&day==3 ){
                alert(' you were born on '+ dayOfBirth[3] +' your akana name is '+ names[3]);
              } else if(document.getElementById("female").checked = true &&day==4){
                alert(' you were born on '+ dayOfBirth[4] +' your akana name is '+ names[4]);
              } else if(document.getElementById("female").checked = true &&day==5){
                alert(' you were born on '+ dayOfBirth[5] +' your akana name is '+ names[5]);
              } else if(document.getElementById("female").checked = true &&day==6){
                alert(' you were born on '+ dayOfBirth[6] +' your akana name is '+ names[6]);
              }else if(document.getElementById("female").checked = true &&day==0){
                alert(' you were born on '+ dayOfBirth[0] +' your akana name is '+ names[0]);
              }else if(document.getElementById("female").unchecked = true &&day==1){
                alert(' you were born on '+ dayOfBirth[1] +' your akana name is '+ maleNames[1]);
              } else if(document.getElementById("female").unchecked = true &&day==2){
                alert(' you were born on '+ dayOfBirth[2] +' your akana name is '+ maleNames[2]);
              } else if(document.getElementById("female").unchecked = true &&day==3){
                alert(' you were born on '+ dayOfBirth[3] +' your akana name is '+ maleNames[3]);
              } else if(document.getElementById("female").unchecked = true &&day==4){
                alert(' you were born on '+ dayOfBirth[4] +' your akana name is '+ maleNames[4]);
              } else if(document.getElementById("female").unchecked = true &&day==5){
                alert(' you were born on '+ dayOfBirth[5] +' your akana name is '+ maleNames[5]);
              } else if(document.getElementById("female").unchecked = true &&day==6){
                alert(' you were born on '+ dayOfBirth[6] +' your akana name is '+ maleNames[6]);
              }else if (document.getElementById("female").unchecked = true &&day==0){
                alert(' you were born on '+ dayOfBirth[0] +' your akana name is '+ maleNames[0]);
              }
            }
            
            

            

