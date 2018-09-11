/*******************************************************************************
*                     
WEB222
–
Assignment
2
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy.  No part of this assignment has be
en copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students.
* 
* Name: ____Mehedi Haque_________________ Student ID: ____154908172__________ Date: __2018-06-11_____________
/*****************************
* Step 1 
*****************************/
var e1;
var e2;
var e3;
var e4;
var e5;
var e6;
var e7;
var str;
/*****************************
* Step 2 
*****************************/
function capFirstLetter(myString) {
    
  first = (myString.substring(0,1)).toUpperCase();
  
  rest = (myString.substring(1, myString.length)).toLowerCase();
    
  return first + rest;
  
}

e1 = capFirstLetter(prompt("Please Enter Your First Name: "));
console.log(e1);

/*****************************
* Step 3
*****************************/
e2 = prompt ("Enter the year you were born: : ",)
var getAge  = function  (year){
var today = new Date;  
var age = today.getFullYear()-year;
return age;
}
console.log(getAge(e2));

/****************************
* Step 4
*****************************/

function capFirstLetter(m_string) {
    
  first = (m_string.substring(0,1)).toUpperCase();
  
  rest = (m_string.substring(1, m_string.length)).toLowerCase();
    
  return first + rest;
  
}

e3 = prompt("Please Enter The Name of Your College: ", "seneca college");

var college = e3.split(' ');
var i;
var caps= []; 

for (i =0; i < college.length ; i++){
    
    caps[i] = capFirstLetter(college[i]);
}

e3 = caps.join(' ');

/*****************************
* Step 5
*****************************/
e4 = prompt("Please Enter Your 5 Favorite Sports(in lower case separated by comma): ", "hockey,football,basketball,tennis,golf");

if (/football/g.test(e4) == true)
  e4 = e4.replace(/football/g, "soccer");

var e4 = e4.split(',');

e5 = prompt("Please Enter an Extra Favorite Sport: " , "formula 1");
            
e4.push(e5);
/*****************************
* Step 6
*****************************/
for (i=0 ; i< e4.length; i++){
  e4[i] = e4[i].toUpperCase(); 
}

e4 = e4.sort();

/*****************************
* Step 7
*****************************/
function getDateString(myDate) {
  
  var year = myDate.getFullYear();
  
  var month = myDate.getMonth() + 1;
  
  if (Number(month) < 10)
    month = "0" + month;
  
  var date = myDate.getDate();
  
   if (Number(date) < 10)
     date = "0" + date;
  
  return year + "-" + month + "-" + date;
}

e6 = new Date();
e7 = getDateString(e6);

/*****************************
* Step 8
*****************************/

str = "User info: \n\n" 
  + "name (e1): " + e1 + "\n" 
  + "age (e2): " + e2 + "\n" 
  + "school (e3): " + e3 + "\n" 
  + "favorite sports (e4):\n";

for(var i = 0; i < e4.length; ++i){
  str += "\t" + e4[i] + '\n';
}

  str += "current date (e7): " + e7

console.log(str);
