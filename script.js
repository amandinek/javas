var firstName = 'john';
console.log('firstName');
var lastNmae = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge); 
console.log(firstName + '' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + 'is a ' + age + 'years old' + '.is he married?' + isMarried);
 
var johnYear =2019-28;
console.log(johnYear);
 var now =2019;
 var yearJohn=1989;
 var fullAge =18;
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);
 //*************** challenge one ***********//
 var markHeight = 1.89;// meters
 var johnHeight = 1.85; // meters
 var markWeight = 100;//kgs
 var jobWeight = 120;//kgs
 var markBmi = 100/(1.89*1.89);
 console.log(markBmi);
 var johnBmi = 120/(1.85*1.85);
 console.log(johnBmi) ;
 var isJohnGreater= markBmi>johnBmi;
 console.log(isJohnGreater);
 //******************if statements */
 var firstName = 'john';
 var civilStatus ='single';
 if (civilStatus==='married'){
     console.log(firstName +'is married!');
 } else{
     console.log(firstName + ' hopefully will marry soon.');
 }
 //**********other js operators way of fuctioning */
 var firstName = 'john';
 var age = 16;
 age >=18 ? console.log(firstName + ' drinks beer .') 
 : console.log(firstName + ' drinks juice.');
 //*******truthy and falst valuables */
 // challenge number 2
 //************************************************* */
 var scoreMike = (94+50+123)/3;
 var scoreJohn = (89+120+120)/3;
 var scoreMary =(97+134+105)/3;
 console.log(scoreJohn ,scoreMike);
 
 if (scoreJohn>scoreMike && scoreMary){
     console.log('John win');
 }else if(scoreMike > scoreJohn && scoreMary) {
     console.log('Mike win');
 }else if (scoreMary>scoreJohn&&scoreMike){
     console.log('mary win');
 }
 else{
     console.log('there is a draw');
 }

 /******************functions */

 function calculateAge(birthYear){
     return 2019- birthYear
 }
 var ageSean = calculateAge(1990);
 console.log(ageSean);

 function retirementYears(year, name){
     var age= calculateAge(year);
     var retirement=65-age;
     console.log(name +' '+  'retires in ' + retirement + ' years');
 }
 retirementYears(1990,'Paul');
 
