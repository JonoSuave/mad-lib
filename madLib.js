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
'school']

var adverbPossibilities = [
'so',
'out',
'just',
'now',
'how',
'then',
'more',
'also',
'here',
'well',
'only',
'very'
]

var adjectivePossibilities = [
'new',
'good',
'high',
'old',
'great',
'big',
'American',
'small',
'large',
'national',
'young',
'different'
]

function storyTime(){
	var newNounArray = [];
	var newAdverbArray = [];
	var newAdjArray = [];
	var randomNumberTwo = Math.floor(Math.random()*11);
	var randomNumberThree = Math.floor(Math.random()*11);
	var randomNumberFour = Math.floor(Math.random()*11);
	nounInput = document.getElementById("noun");
	nounSelector = document.getElementById("noun-possibilities");
	// var newNounDiv = document.createElement('div');



	if(nounInput.value.trim() === ""){
		for(i = 0; i < 4; i++){
			var randomNumberOne = Math.floor(Math.random()*11);
			var newNoun = nounPossibilities[randomNumberOne];
			// newNounDiv.innerHTML = newNoun;
			// newNounArray.push(nounPossibilities[randomNumberOne]);
			// newNounDiv.appendChild(newNoun);
			var nounOption = document.createElement("OPTION"); 
			nounOption.textContent = newNoun;
			nounOption.value = newNoun;
			nounSelector.appendChild(nounOption);
		}



		// var newNounDiv = document.createElement('div');
		// Make a new noun array of four random nouns from the nounPossibilities array
		// newNounArray.push(nounPossibilities[randomNumberOne]);
		// newNounDiv.innerHTML = newNounArray;
		// nounSelector.appendChild(newNounDiv);

		// newNounArray.push(nounPossibilities[randomNumberTwo]);
		// newNounDiv.innerHTML = newNounArray;
		// nounSelector.appendChild(newNounDiv);

		// newNounArray.push(nounPossibilities[randomNumberThree]);
		// newNounDiv.innerHTML = newNounArray;
		// nounSelector.appendChild(newNounDiv);

		// newNounArray.push(nounPossibilities[randomNumberFour]);
		// newNounDiv.innerHTML = newNounArray;
		// Dump it into the selector (maybe use getElementByID)	
	}
	// var nounOption = document.createElement("OPTION"); 
	// nounOption.textContent = newNounArray;
	// nounOption.value = newNounArray;
	// nounSelector.appendChild(nounOption);
}

