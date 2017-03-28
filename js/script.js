var theses = [
	"Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
	"Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
	"Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn."
];

function createThesis(thesis, alignment, opposing) {
	this.thesis = thesis;
	this.alignment = alignment;
	this.opposingAlignment = opposing;
	theses.push(this);
}

function party(name, alignment) {
	this.partyName = name;
	this.score = 0;
	this.alignment = alignment; 
}

var i = 0;
var score = 0;
function pollQuestion(pollOption) {
	console.log('PollOption = ', pollOption);
	document.getElementById("pollQ").innerHTML = question[i];
	console.info('Question = ', question[i]);
	i++;
	console.log('QuestionID = ', i);
	
	if(pollOption == -1) {
		score--;
		console.log(score);
	}

	if(pollOption == 1) {
		score++;
		console.log(score);
	}
	
	if (i === 29) {
		document.getElementById("pollQ").innerHTML = "Bekijk het resultaat:";
		document.getElementById("buttonsDiv").style.display="none";
		
		document.getElementById("resultaat").style.display="block";
		document.getElementById("score").style.display = "block-inline";
		console.log(score);
		document.getElementById("score").innerHTML = "Score: "+ score;
		//partij scores:
		document.getElementById("groenlinks").innerHTML = groenlinks;
		document.getElementById("PVV").innerHTML = PVV;
		document.getElementById("CDA").innerHTML = CDA;
		document.getElementById("PvDD").innerHTML = PvDD;
		document.getElementById("SGP").innerHTML = SGP;	
		document.getElementById("CU").innerHTML = CU;
		document.getElementById("VVD").innerHTML = VVD;
		document.getElementById("SP").innerHTML = SP;
		document.getElementById("D66").innerHTML = D66;

	}
	/*If statements waarbij je kijkt welke 'pollOption' je hebt en bij welke vraag je bent en dan arrays(?) van alle partijen met daarin de K->V: questionID->pollOption.
	  Als je dan dezelfde optie hebt als een partij bij een vraag krijg je een punt naar de desbetreffende partij(en), 
	  Je houd het aantal punten bij en displayed ze bij het resultaat.
	  Of je houd bij hoevaak je 1,0 en -1 hebt en dan kijk je bij welke partij je het dichst in de buurt komt.
	  Bijhouden hoevaak je -1,0 en 1 hebt en dan vergelijken met partijen
	*/
}