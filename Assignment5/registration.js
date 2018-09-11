/*
 Md Mehedi Haque
    student # 154908172
    date: July 31 2018
    mmhaque7@myseneca.ca
*/
function validateForm() {

    var msgError = [];

    clearerrors();
    valPassword(msgError);
    valUserName(msgError);
    valUnitNum(msgError);
    valStNumber(msgError);
    valStreet(msgError);
    valZip(msgError);
    valCity(msgError);
    valPhone(msgError);

    if (msgError.length == 0) {
        return true;
    } else {
        printError(msgError);
        return false;
    }

}

function clearerrors() {
    document.querySelector("#errors").innerHTML = "";
}
//Validation of Phone Number
function valPhone(msgError) {

    var phone = document.forms["signup"]["phone"].value;
    var phoneNo=/^([0-9]{3}[-]){2}[0-9]{4}$/;
   
    if (phone.match(phoneNo)){
        return true;
        
    }else{
        msgError.push("Phone must have 3 digits (dash) 3 digits (dash) 4 digits.");
        }
    return msgError;
}
//validating the username!
function valUserName(msgError) {

    var name = document.forms["signup"]["name"].value;

    if (name.length != 6) {
        msgError.push("Name must be 6 long.");
    }
    var test = name.match(/^[a-zA-Z]{1}.*$/);
    if (test === null) {
        msgError.push("Username must begin with letter. ");
    }
    return msgError;
}


//VALIDATE CITY
function valCity(msgError) {

    var zip = document.forms["signup"]["cit"].value;
    var cityMa = /^[a-zA-Z].*$/
    
    if (zip.match(cityMa)) {
        return true;
        
    }else{
        msgError.push("City can only have letters.");
    }
    return msgError;
}


//VALIDATE zipcode (canadian eh!)
function valZIP(msgError) {

    var zip = document.forms["signup"]["zip"].value;

    var test = zip.match(/[a-zA-Z][0-9][a-zA-Z] ?[0-9][a-zA-Z][0-9]/);
    if (test === null) {
        msgError.push("Zip Code must follow the rule 'letter-number-letter number-letter-number'.");
    }
    return msgError;
};


//Validate Unit number 
function valUnitNum(msgError) {

    var num = document.forms["signup"]["unitNum"].value;
    var numChk = /^[0-9].*$/
    
    if (num.match(numChk)) {
        return true;
        
    }else{
        msgError.push("Unit Number can only have numbers.");
    }
    return msgError;
}

//Validate street number *extra precaution cause my input type for this is numbers* or using an older browser where number is not accepted and switches to text. this function will be used!
function valStNumber(msgError) {

    var srtNum = document.forms["signup"]["stNum"].value;
    var srtNumChk = /^[0-9].*$/
    
    if (srtNum.match(srtNumChk)) {
        return true;
        
    }else{
        msgError.push("Street Number can only have numbers.");
    }
    return msgError;
};

//validate street name!
function valStreet(msgError) {

    var srtName = document.forms["signup"]["street"].value;
    var srtNameChk = /^[a-zA-Z].*$/
  
    if (srtName.match(srtNameChk)) {
        return true;
        
    }else{
        msgError.push("Street Name can only have letters.");
    }
    return msgError;
};





//VALIDATE PASSWORD
function valPassword(msgError) {

    var pass = document.forms["signup"]["psw1"].value;
    var rePass = document.forms["signup"]["psw2"].value;

    var passChk= /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

    if (pass.length != 8) {
        msgError.push("Password must be 8 characters long.");
    }else{
        return true;
    }
    
    if (pass.match(passChk)) {
        return true;
        
    }else{
        msgError.push("Password must have at least one capital letter and one digit.");
    }
    if (pass !== rePass) {
        msgError.push("You must type the Password on field Retype Password.");
    }

    return msgError;
};

//PRINT ON RIGHT PANEL THE INPUT ERRORS
function printError(msgError) {

   //this if there are more than 8 errors it wouuld show only 8 errors
    
    var errors = msgError.length;
    if (errors > 8) {
        errors = 8;
    }

    

  
    for (var i = 0; i < errors; i++) {
        var errorList = document.getElementById("errors");
        var itemUL = document.createElement("ul");
        var itemLI = document.createElement("li");

        var itemTxt = document.createTextNode(msgError[i]);
     itemLI.setAttribute("id", "errorList");
        itemLI.appendChild(itemTxt);
        itemUL.appendChild(itemLI);
        errorList.appendChild(itemUL);

    }
}
