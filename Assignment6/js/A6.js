/********************************************************************************* 
*
* WEB222 – Assignment #6
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Md Mehedi HaqueStudent ID: 154908172 Date: AUGUST 2018 
* 
********************************************************************************/// set a global httpRequest object
var pg;
var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = function(){
	makeRequest(1);
}




function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	pg = pageNum;
	var url = "https://reqres.in/api/users?page="+pg; 



	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
		var table=document.querySelector("#data");
		table.innerHTML="";
		 
		

		for (var i = 0; i < jsData.per_page; i++) {
			var tr = document.createElement("tr");
		var IdTD = document.createElement("td");
		var f_nametTD = document.createElement("td");
		var l_nameTD  = document.createElement("td");
		var avtTD = document.createElement("td");
		var imgSrc= document.createElement("img");
		var IDp = document.createElement("p");
		var f_nameP = document.createElement("p");
		var l_nameP = document.createElement("p");

			IDp.append(jsData.data[i].id);	
			f_nameP.append(jsData.data[i].first_name);
			l_nameP.append(jsData.data[i].last_name);
			IdTD.appendChild(IDp);
			f_nametTD.appendChild(f_nameP);
			l_nameTD.appendChild(l_nameP);
			
			imgSrc.src = jsData.data[i].avatar;
			avtTD.appendChild(imgSrc);

			tr.append(IdTD, f_nametTD, l_nameTD, avtTD);
			table.appendChild(tr);
		}


		} else {
			console.log('There was a problem with the request.');
		}
	}
}	