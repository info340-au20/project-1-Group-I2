'use strict';
/* global d3*/

function search() {
	let searched = document.getElementById("search").value.trim();
	if(searched !== "") {
		let text = document.getElementById("text").innerHTML;
		let re = new RegExp(searched,"g"); // search for all instances
		let newText = text.replace(re, `<mark>${searched}</mark>`);
		document.getElementById("text").innerHTML = newText;
	}
}
document.querySelector('#highlight').onclick = function() {
	search();
}

// when clicking the button of know more about demographic, show some statistics
let buttonDemo = document.querySelector('#demobutton');
buttonDemo.addEventListener('click', function(event) {
	document.querySelector('.data_visualization1').style.display = "none";
	document.querySelector('.data_visualization2').style.display = "block";
	event.preventDefault();
	document.querySelector('.filter_demo').onclick = function() {
		clickDemo();
	}
});

 // when clicking the button of know more about risk factor, show some statistics
let buttonRisk = document.querySelector('#riskbutton');
buttonRisk.addEventListener('click', function(event) {
	document.querySelector('.information').textContent = '';
	document.querySelector('.data_visualization2').style.display = "none";
	document.querySelector('.data_visualization1').style.display = "block";
	for (let j = 0; j < 4; j ++) {
		renderInformation(j);
	}
	event.preventDefault();
	document.querySelector('.filter_risk').onclick = function() {
		clickRisk();
	}
});

function renderInformation(i) {
	let paragraph = document.createElement('p');
	document.querySelector('.information').append(paragraph);
	d3.csv("./data/fetchData.csv").then(function(data) {
		console.log(data[0].Risk);
		// let stats = JSON.stringify(data[0]);
		paragraph.textContent = renderStats(
			data[i].Risk, 
			data[i].Cancer, 
			data[i].numOfType,
			data[i].cancer1,
			data[i].cancer2,
			data[i].cancer3)[0];
			
	})
	.catch(renderError);

	let paragraph2 = document.createElement('p');
	document.querySelector('.information').append(paragraph2);
	d3.csv("./data/fetchData.csv").then(function(data) {
		paragraph2.textContent = renderStats(
			data[i].Risk, 
			data[i].Cancer, 
			data[i].numOfType,
			data[i].cancer1,
			data[i].cancer2,
			data[i].cancer3)[1];	
	})
	.catch(renderError);
}

function renderStats(risk, numCase, numOfType,cancer1, cancer2, cancer3) {
	let arr = [];
	arr[0] = "In the United States, approximately " + numCase + " new cases of cancer are related to " + risk + ".";
	arr[1] = "Over " + numOfType + " types of cancer can be caused by " + risk + ", including " + cancer1 + ", " 
	+ cancer2 + ", " + cancer3 + ".";
	return arr;
}


function renderError(error) {
	let alert = document.createElement('p');
	document.querySelector('.information').appendChild(alert);
	alert.textContent = error.message;
	alert.classList.add("alert");
	alert.classList.add('alert-danger');
}

/* function for filter */
function clickRisk(){
	var type = document.getElementById ("risk_factor");

	if (type.value == ""){
		alert ("please select an option");
		return false;
	}

	if (type.value == "1"){
		document.getElementById("here1").innerHTML='<img src="img/risk_alchohol.jpg">';
	} else {
		document.getElementById("here1").innerHTML='<img src="img/risk_tobacco.jpg">';
	}

}

/* function for filter */
function clickDemo(){
	var type = document.getElementById ("demo");

	if (type.value == ""){
		alert ("please select an option");
		return false;
	}

	if (type.value == "1"){
		document.getElementById("here2").innerHTML='<img src="img/rateofnewdeath.jpg">';
	} else  {
		document.getElementById("here2").innerHTML='<img src="img/rate_cancer.jpg">';
	}
}