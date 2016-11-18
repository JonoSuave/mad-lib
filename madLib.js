var nounPossibilities = [
	'time',
	'year',
	'people',
	'way',
	'day',
	'man',
	'thing',
	'woman',
	'life',
	'child',
	'world',
	'school',
	'country',
	'problem',
	'hand',
	'part',
	'place',
	'case',
	'week',
	'company',
	'system',
	'program',
	'question',
	'work',
	'government',
	'number',
	'night',
	'point',
	'home',
	'water',

	'room',
	'mother',
	'area',
	'money',
	'story',
	'fact',
	'month',
	'lot',
	'right',
	'study',
	'book',
	'eye',
	'job',
	'word',
	'business',
	'issue',
	'side',
	'kind',
	'head',
	'house',
	'service',
	'friend',
	'father',
	'power',
	'hour'
];

var adverbPossibilities = [
	'very',	
	'often',	
	'however',	
	'too',	
	'usually',	
	'really',	
	'early',	
	'never',	
	'always',	
	'sometimes',	
	'together',	
	'likely',	
	'simply',	
	'generally',	
	'instead',	
	'actually',	
	'again',	
	'rather',	
	'almost',	
	'especially',	
	'ever',	
	'quickly',	
	'probably',	
	'already',	
	'below',	
	'directly',	
	'therefore',	
	'else',	
	'thus',	
	'easily',	
	'eventually',	
	'exactly',	
	'certainly',	
	'normally',	
	'currently',	
	'extremely',	
	'finally',	
	'constantly',	
	'properly',	
	'soon',	
	'specifically',	
	'ahead',	
	'daily',	
	'highly',	
	'immediately',	
	'relatively',	
	'slowly',	
	'fairly',	
	'primarily',	
	'completely',	
	'ultimately',	
	'widely',	
	'recently',	
	'seriously',	
	'frequently',	
	'fully',	
	'mostly',	
	'naturally',	
	'nearly',	
	'occasionally',	
	'carefully',	
	'clearly',	
	'essentially',	
	'possibly',	
	'slightly',	
	'somewhat',	
	'equally',	
	'greatly',	
	'necessarily',	
	'personally',	
	'rarely',	
	'regularly',	
	'similarly',	
	'basically',	
	'closely',	
	'effectively',	
	'initially',	
	'literally',	
	'mainly',	
	'merely',	
	'gently',	
	'hopefully',	
	'originally',	
	'roughly',	
	'significantly',	
	'totally',	
	'twice',	
	'elsewhere',	
	'everywhere',	
	'obviously',	
	'perfectly',	
	'physically',	
	'successfully',	
	'suddenly',	
	'truly',	
	'virtually',	
	'altogether',	
	'anyway',	
	'automatically',	
	'deeply',	
	'definitely',	
	'deliberately',	
	'hardly',	
	'readily',	
	'terribly',	
	'unfortunately',	
	'forth',	
	'briefly',	
	'moreover',	
	'strongly',	
	'honestly',	
	'previously'	
];

var adjectivePossibilities = [
	'different',
	'used',
	'important',
	'every',
	'large',
	'available',
	'popular',
	'able',
	'basic',
	'known',
	'various',
	'difficult',
	'several',
	'united',
	'historical',
	'hot',
	'useful',
	'mental',
	'scared',
	'additional',
	'emotional',
	'old',
	'political',
	'similar',
	'healthy',
	'financial',
	'medical',
	'traditional',
	'federal',
	'entire',
	'strong',
	'actual',
	'significant',
	'successful',
	'electrical',
	'expensive',
	'pregnant',
	'intelligent',
	'interesting',
	'poor',
	'happy',
	'responsible',
	'cute',
	'helpful',
	'recent',
	'willing',
	'nice',
	'wonderful',
	'impossible',
	'serious',
	'huge',
	'rare',
	'technical',
	'typical',
	'competitive',
	'critical',
	'electronic',
	'immediate',
	'aware',
	'educational',
	'environmental',
	'global',
	'legal',
	'relevant',
	'accurate',
	'capable',
	'dangerous',
	'dramatic',
	'efficient',
	'powerful',
	'foreign',
	'hungry',
	'practical',
	'psychological',
	'severe',
	'suitable',
	'numerous',
	'sufficient',
	'unusual',
	'consistent',
	'cultural',
	'existing',
	'famous',
	'pure',
	'afraid',
	'obvious',
	'careful',
	'latter',
	'unhappy',
	'acceptable',
	'aggressive',
	'boring',
	'distinct',
	'eastern',
	'logical',
	'reasonable',
	'strict',
	'administrative',
	'automatic',
	'civil',
	'former',
	'massive',
	'southern',
	'unfair',
	'visible',
	'alive',
	'angry',
	'desperate',
	'exciting',
	'friendly',
	'lucky',
	'realistic',
	'sorry',
	'ugly',
	'unlikely',
	'anxious',
	'comprehensive',
	'curious',
	'impressive',
	'informal',
	'inner',
	'pleasant',
	'sexual',
	'sudden',
	'terrible',
	'unable',
	'weak',
	'wooden',
	'asleep',
	'confident',
	'conscious',
	'decent',
	'embarrassed',
	'guilty',
	'lonely',
	'mad',
	'nervous',
	'odd',
	'remarkable',
	'substantial',
	'suspicious',
	'tall',
	'tiny'
];

function storyTime(){
	var newNounArray = [];
	var newAdverbArray = [];
	var newAdjArray = [];
	nounInput = document.getElementById("noun");
	adverbInput = document.getElementById("adverb");
	adjInput = document.getElementById("adjective");
	nounSelector = document.getElementById("noun-possibilities");
	adverbSelector = document.getElementById("adverb-possibilities");
	adjSelector = document.getElementById("adjective-possibilities");

	newNounArray = nounInput.value.split(',');
	while(newNounArray.length < 5){
		var randomNumberOne = Math.floor(Math.random()*54);
		newNounArray.push(nounPossibilities[randomNumberOne]);
		var nounOption = document.createElement("OPTION"); 
		nounOption.textContent = nounPossibilities[randomNumberOne];
		nounOption.value = nounPossibilities[randomNumberOne];
		nounSelector.appendChild(nounOption);		
	}

	newAdverbArray = adverbInput.value.split(',');
	while(newAdverbArray.length < 5){
		var randomNumberTwo = Math.floor(Math.random()*110);
		newAdverbArray.push(adverbPossibilities[randomNumberTwo]);
		var adverbOption = document.createElement("OPTION");
		adverbOption.textContent = adverbPossibilities[randomNumberTwo];
		adverbOption.value = adverbPossibilities[randomNumberTwo];
		adverbSelector.appendChild(adverbOption);	
	}

	newAdjArray = adjInput.value.split(',');
	while(newAdjArray.length < 5){
		var randomNumberThree = Math.floor(Math.random()*135);
		newAdjArray.push(adjectivePossibilities[randomNumberThree]);
		var adjOption = document.createElement("OPTION");
		adjOption.textContent = adjectivePossibilities[randomNumberThree];
		adjOption.value = adjectivePossibilities[randomNumberThree];
		adjSelector.appendChild(adjOption);
	}
	// if(nounInput.value.trim() === ""){
	// 	for(i = 0; i < 4; i++){
	// 		var randomNumberOne = Math.floor(Math.random()*54);
	// 		var newNoun = nounPossibilities[randomNumberOne];
	// 		var nounOption = document.createElement("OPTION"); 
	// 		nounOption.textContent = newNoun;
	// 		nounOption.value = newNoun;
	// 		nounSelector.appendChild(nounOption);
	// 	}
	// }
	// else{
	// 	// Two for loops: 1st creates newNounArray() 2nd loops over newNounArray(), creates elements that we can add to the the nounSelector
	// 	// by creating option elements
	// 	// Afterward do the DRY Method via functions. This will assist in shortening code. Will need to know how to pass through parameters
	// 	newNounArray = nounInput.value.split(',');
	// 	for(i = 0; newNounArray.length < 4; i++){
	// 		var randomNumberOne = Math.floor(Math.random()*54);
	// 		newNounArray.push(nounPossibilities[randomNumberOne]);
	// 		var nounOption = document.createElement("OPTION"); 
	// 		nounOption.textContent = nounPossibilities[randomNumberOne];
	// 		nounOption.value = nounPossibilities[randomNumberOne];
	// 		nounSelector.appendChild(nounOption);
	// 	}
	// }
	// if(adverbInput.value.trim() === ""){
	// 	for(i = 0; i<4; i++){
	// 		var randomNumberTwo = Math.floor(Math.random()*110);
	// 		var newAdverb = adverbPossibilities[randomNumberTwo];
	// 		var adverbOption = document.createElement("OPTION");
	// 		adverbOption.textContent = newAdverb;
	// 		adverbOption.value = newAdverb;
	// 		adverbSelector.appendChild(adverbOption);
	// 	}
	// }
	// if (adjInput.value.trim() === "") {
	// 	for(i = 0; i<4; i++){
	// 		var randomNumberThree = Math.floor(Math.random()*135);
	// 		var newAdjective = adjectivePossibilities[randomNumberThree];
	// 		var adjOption = document.createElement("OPTION");
	// 		adjOption.textContent = newAdjective;
	// 		adjOption.value = newAdjective;
	// 		adjSelector.appendChild(adjOption);
	// 	}
	// }
	
	
	

}

function enterKeyPressed(event){
	var keyPressed = event.keyCode;
	if (keyPressed === 13) {
		storyTime();
	}
}

