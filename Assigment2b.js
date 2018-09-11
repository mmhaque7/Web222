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
*
*********************************************
*********************************/
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

//a
var pop =courses.pop();

//b

console.log("*** Task 1 ***\n\n" 

+ "Course " + pop.code + " was deleted from the array (courses)");

console.log("Adding new course objects into the array (courses)\n\n");

//c

var ibc233 = Object.create(courses);
ibc233.code = "IBC233";
ibc233.name = "iSERIES Business Computing"
ibc233.hours = 4;
ibc233.url = "http://scs.senecac.on.ca/~ibc233/";  
    
    
var oop244 = Object.create(courses);

oop244.code = "OOP244";
oop244.name = "Introduction to Object Oriented Programming";
oop244.hours = 4;
oop244.url = "http://scs.senecac.on.ca/~oop244/";


var web222 = Object.create(courses);

web222.code = "WEB222";
web222.name = "Internet I - Internet Fundamentals";
web222.hours = 4;
web222.url = "http://scs.senecac.on.ca/~web222/";

var dbs201 = Object.create(courses);

dbs201.code = "DBS201";
dbs201.name = "Introduction to Database Design and SQL";
dbs201.hours = 4;
dbs201.url = "http://scs.senecac.on.ca/~dbs201/" ;

//d
courses.push(ibc233);
courses.push(oop244);
courses.push(web222);
courses.push(dbs201);

//e

console.log("Course objects in the array (courses):\n");

for (var i =0 ; i < courses.length; i++){
    
    console.log('"' + courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, " + "website: " + courses[i].url + '"');
}


// task 2

//a

var stu1 = Object.create(student);
stu1.name = "John Smith";
stu1.dob = new Date(1999,8,10);
stu1.sid = "010456101";
stu1.program = "CPA";
stu1.gpa = 4;
stu1.toString();

var stu2 = Object.create(student);

stu2.name = "Jim Carrey";
stu2.dob = new Date(1992,0,17);
stu2.sid = "012345678";
stu2.program = "CPD";
stu2.gpa = 3.5;
stu2.toString();

var stu3 = Object.create(student);

stu3.name = "Justin Bieber";
stu3.dob = new Date(1994,2,1);
stu3.sid = "0987654321";
stu3.program = "CAN";
stu3.gpa = 3;
stu3.toString();

var stu4 = Object.create(student);

stu4.name = "Justin Trudeau";
stu4.dob = new Date(1992,0,12);
stu4.sid = "123456789";
stu4.program = "CAN";
stu4.gpa = 4;
stu4.toString();

//b

var students = [stu1, stu2, stu3, stu4];

//c

console.log("\n\n*** Task 2 ***\n\n");

for (var i in students){
    console.log (i + ": " + students[i].toString());
}

