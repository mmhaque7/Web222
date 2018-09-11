/* Md Mehedi Haque
Student # 154908172
date: July 16 2018
mmhaque7@myseneca.ca
Assingment 4 */

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


function loadTableWithFilters(){
var table = document.querySelector("#main-table-body");
    table.innerHTML = "";

    petData.forEach(pet => {
        if((filterType=="" || pet.type == filterType) 
        && pet.age > filterAgeMin && pet.age < filterAgeMax
    ){
        var tr = document.createElement("tr");
        var imgTD = document.createElement("td");
        var txtTD = document.createElement("td");
        var p = document.createElement("p");
        var span = document.createElement('span');
        var h4 = document.createElement("h4");
        var img = document.createElement("img");

        img.src = pet.image.src;
        img.alt = pet.image.alt;
        img.width = pet.image.width;
        img.height = pet.image.height;
        imgTD.appendChild(img);

        h4.appendChild(document.createElement(pet.name));
        txtTD.appendChild(h4);

        p.innerHTML = pet.description;
        txtTD.appendChild(p);

        var txtspan = document.createTextNode("Age: "+pet.age+ " years old");

        span.appendChild(txtspan);
        txtTD.appendChild(span);
        tr.appendChild(imgTD);
        tr.appendChild(txtTD);
        table.appendChild(tr);

    }        
    });
}
function filterAll(type){
    filterType = type;
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAge( min , max){
    
    filterAgeMax = max;
    filterAgeMin = min;
    loadTableWithFilters();
}