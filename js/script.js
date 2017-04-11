var theses = [{
				thesis:"Het is belangrijk dat alle kolencentrales zo snel mogelijk worden vervangen/gesloten.",
				scores: [
							[-3,1,3], //D66 NO/NEUTRAL/YES
							[-1,0,2], //50Plus
							[3,0,-3]  //PVV
						],
				response: null
					},
				{thesis:"We moeten zelfstandiger worden, los van de EU.",
				scores: [
							[3,0,-2], //D66 NO/NEUTRAL/YES
							[2,1,-1], //50Plus
							[-3,-1,3] //PVV
						],
				response: null
					},
				{thesis:"De AOW leeftijd moet terug naar 65 jaar oud.",
				scores: [
						 	[2,0,-3], //D66 NO/NEUTRAL/YES
						 	[-3,-1,3],//50Plus
						 	[-2,0,2]  //PVV
						 ],
				response: null
					}];

var parties = [
	{party:'pvda', score:0},
	{party:'vvd', score:0},
	{party:'cda', score:0}
];

var i = 0;
var score = 0;

function pollQuestion(pollInput) {
	console.log('pollInput = ', pollInput);
	//document.getElementById("pollQ").innerHTML = JSON.stringify(theses);
	console.info('Question = ', theses[i]["thesis"]);
	i++;
	console.log('QuestionID = ', i);
	
			
	
	if (i > 2) {
		document.getElementById("pollQ").innerHTML = "Bekijk het resultaat:";
		document.getElementById("buttonsDiv").style.display="none";
		
		document.getElementById("resultaat").style.display="block";
		document.getElementById("score").style.display = "block-inline";
		
		//partij scores:
		document.getElementById("pvda").innerHTML = parties[0]['score'];
		document.getElementById("vvd").innerHTML = parties[1]['score'];
		document.getElementById("cda").innerHTML = parties[2]['score'];
	}
	else {
		for (var p = 0; p <= theses[0]['scores'].length - 1; p++) {
			var mod = theses[i]['scores'][p][pollInput];
			parties[p]["score"] = parties[p]["score"] + mod;
			console.log(parties);
			 
		}
		document.getElementById("pollQ").innerHTML = theses[i]["thesis"];
	}
}