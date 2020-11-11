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
/*
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
*/
var cancerDeath = [{
	values: [153.6, 173.7, 95.6, 100.1, 109.5],
	labels: ['white', 'black', 'Asian/Pacific Islander', 'Amrican Indian/Alaska Native', 'Hispanic'],
	type: 'pie'
}];

var demoNewCancer = [{
	values: [438.8, 429.1, 284.2, 269, 333],
	labels: ['white', 'black', 'Asian/Pacific Islander', 'Amrican Indian/Alaska Native', 'Hispanic'],
	type: 'pie'
}];

var alcoholData = [{
	x:["Female Breast", "Colon and Rectum", "Lip, Oral Cavity and Pharynx", "Liver", "Esophagus", "Larynx"],
	y:[128.9, 125.1, 36.8, 11.7, 6.8, 4.4, 3],
	type: 'bar'
}];

var tobaccoData = [{
	x:["Trachea, Lung and Bronchus", "Colon and Rectum", "Urinary Bladder", "Kidney and Renal Pelvis", "Pancreas", "Lip, Oral Cavity and pharynx", 
	"Cervix", "Liver", "Stomach", "Esophagus", "Acute Myeloid Leukemia", "Larynx"],
	y:[55.3, 36.8, 19.1, 16.9, 12.9, 11.7, 7.5, 6.8, 6.3, 4.4, 4.1, 3.0],
	type: 'bar'
}];

var layoutPie = {
	height: 500,
	width: 600
};
Plotly.newPlot('newCancerPie', demoNewCancer, layoutPie);
Plotly.newPlot('deathPie', cancerDeath, layoutPie);
Plotly.newPlot('alcohol', alcoholData);
Plotly.newPlot('tobacco', tobaccoData);