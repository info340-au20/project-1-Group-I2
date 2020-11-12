'use strict';

function search(e) {
	let searched = document.getElementById("search").value.trim();
  	if (searched !== "") {
  		let text = document.getElementById("text").innerHTML;
  		let re = new RegExp(searched,"g"); // search for all instances
		let newText = text.replace(re, `<mark>${searched}</mark>`);
		document.getElementById("text").innerHTML = newText;
  }
}

let demo = [
	{"race":"white", "new_cancer_rate":438.8, "death_rate":153.6},
	{"race":"black", "new_cancer_rate":429.1, "death_rate":173.7},
	{"race":"Asian/Pacific Islander", "new_cancer_rate":284.2, "death_rate":95.6},
	{"race":"Amrican Indian/Alaska Native", "new_cancer_rate":269, "death_rate":100.1},
	{"race":"Hispanic", "new_cancer_rate":333, "death_rate":109.5}
];

let alcohol = [
	{"cancer_type":"all", "alcohol-associated":128.9},
	{"cancer_type":"Female Breast", "alcohol-associated":125.1},
	{"cancer_type":"Colon and Rectum", "alcohol-associated":36.8},
	{"cancer_type":"Lip, Oral Cavity and Pharynx", "alcohol-associated":11.7},
	{"cancer_type":"Liver", "alcohol-associated":6.8},
	{"cancer_type":"Esophagus", "alcohol-associated":4.4},
	{"cancer_type":"Larynx", "alcohol-associated":3}
];

let tobacco = [
	{"cancer_type":"all", "":181.1},
	{"cancer_type":"Trachea, Lung and Bronchus", "tobacco-associated":55.3},
	{"cancer_type":"Colon and Rectum", "tobacco-associated":36.8},
	{"cancer_type":"Urinary Bladder", "tobacco-associated":19.1},
	{"cancer_type":"Kidney and Renal Pelvis", "tobacco-associated":16.9},
	{"cancer_type":"Pancreas", "tobacco-associated":12.9},
	{"cancer_type":"Lip, Oral Cavity and pharynx", "tobacco-associated":11.7},
	{"cancer_type":"Cervix", "tobacco-associated":7.5},
	{"cancer_type":"Liver", "tobacco-associated":6.8},
	{"cancer_type":"Stomach", "tobacco-associated":6.3},
	{"cancer_type":"Esophagus", "tobacco-associated":4.4},
	{"cancer_type":"Acute Myeloid Leukemia", "tobacco-associated":4.1},
	{"cancer_type":"Larynx", "tobacco-associated":3.0}
];
console.log(demo, tobacco, alcohol);



 // when clicking the button of know more about risk factor, show some statistics
let buttonRisk = document.querySelector('#riskbutton');
buttonRisk.addEventListener('click', function(event) {
	document.querySelector('.information').textContent = '';

	for (let j = 0; j < 4; j ++) {
		renderInformation(j);
	}

	document.querySelector('.data_visualization').style.display = "block";

	event.preventDefault();
});


function renderInformation(i) {
	let paragraph = document.createElement('p');
	document.querySelector('.information').append(paragraph);
	d3.csv("/data/fetchData.csv").then(function(data) {
		// let stats = JSON.stringify(data[0]);
		paragraph.textContent = renderStats(
			JSON.stringify(data[i].Risk), 
			JSON.stringify(data[i].Cancer), 
			JSON.stringify(data[i].numOfType),
			JSON.stringify(data[i].cancer1),
			JSON.stringify(data[i].cancer2),
			JSON.stringify(data[i].cancer3))[0];
			
	})
	.catch(renderError);

	let paragraph2 = document.createElement('p');
	document.querySelector('.information').append(paragraph2);
	d3.csv("/data/fetchData.csv").then(function(data) {
		paragraph2.textContent = renderStats(
			JSON.stringify(data[i].Risk), 
			JSON.stringify(data[i].Cancer), 
			JSON.stringify(data[i].numOfType),
			JSON.stringify(data[i].cancer1),
			JSON.stringify(data[i].cancer2),
			JSON.stringify(data[i].cancer3))[1];	
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




