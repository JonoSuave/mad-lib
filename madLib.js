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

var verbPossibilities = [
'be',
'have',
'do',
'say',
'go',
'can',
'get',
'would',
'make',
'know',
'will',
'think',
'take',
'see',
'come',
'could',
'want',
'look',
'use',
'find',
'give',
'tell',
'work',
'may',
'should',
'call',
'try',
'ask',
'need',
'feel',
'become',
'leave',
'put',
'mean',

'keep',
'let',
'begin',
'seem',
'help',
'talk',
'turn',
'start',
'might',
'show',
'hear',
'play',
'run',
'move',
'like',
'live',
'believe',
'hold',
'bring',
'happen',
'must',
'write',
'provide',
'sit',
'stand',
'lose',
'pay',
'meet',
'include',
'continue',
'set',
'learn',
'change',
'lead'
]

function storyTime(){
	var storyContainer = document.getElementById("story-container");
	var storyName = document.getElementById("story-options").value;

	var nounInput = document.getElementById("noun");
	var adverbInput = document.getElementById("adverb");
	var adjInput = document.getElementById("adjective");
	var verbInput = document.getElementById("verb");

	var newNounArray = nounInput.value.trim() === ''? []: nounInput.value.split(',');
	var newAdverbArray = adverbInput.value.trim() === ''? []: adverbInput.value.split(',');
	var newAdjArray = adjInput.value.trim() === ''? []: adjInput.value.split(',');
	var newVerbArray = verbInput.value.trim() === ''? []: verbInput.value.split(',');

	var nounSelector = document.getElementById("noun-possibilities");
	var adverbSelector = document.getElementById("adverb-possibilities");
	var adjSelector = document.getElementById("adjective-possibilities");
	var verbSelector = document.getElementById("verb-possibilities");

	fillArray(newNounArray,nounInput,nounPossibilities,nounSelector);
	fillArray(newAdverbArray,adverbInput,adverbPossibilities,adverbSelector);
	fillArray(newAdjArray,adjInput,adjectivePossibilities,adjSelector);
	fillArray(newVerbArray,verbInput,verbPossibilities,verbSelector);

	// var story = "Every Christmas we #verb0 to a ...";
	
	// for(var i = 0; i < 4; i++){
	// 	story.replace('#verb' + i,verbs[i]);
	// 	story.replace('#noun' + i, nouns[i]);
	// }

	if(storyName === 'Christmas Tree'){
		storyContainer.innerHTML = '';
		var storyDiv = document.createElement("div");
		var christmasStory = "Every Christmas we  (Verb0)  to a   (Adjectives0)   tree farm far away. This is not just any   (Adjectives1)   tree farm. My dad and I    (Verb1)   onto the   (noun0)   to    (Verb2)   for the perfect   (noun1)  .  Some people like them   (Adjectives2)  , but I prefer them   (Adjectives3)  . After  searching for hours I usually   (adverb0)   exclaim \"Dad! The perfect tree is over   there!\" Off we    (Verb3)   to get the tree. The problem is we always forget the  (noun2)   and the  (noun3)  . But at the end of the day we    (adverb1)   get the tree and head home    (adverb2)  . \"I wish it was Christmas all year round\"  I    (adverb3)   think to myself."
		for(var i=0; i<4; i++){
			christmasStory = christmasStory.replace('Verb' + i,newVerbArray[i]);
			christmasStory = christmasStory.replace('Adjectives' + i,newAdjArray[i]);
			christmasStory = christmasStory.replace('adverb' + i, newAdverbArray[i]);
			christmasStory = christmasStory.replace('noun' + i,newNounArray[i]);
		}
		storyDiv.innerHTML = christmasStory;
		storyContainer.appendChild(storyDiv);
	}
	else if(storyName === 'Shopping'){
		storyContainer.innerHTML = '';
		var storyDiv = document.createElement("div");
		var text = document.createTextNode("Shopping:\n" + "Today I went shopping. When I arrived at the store I saw a " + newAdjArray[1] + " "  + newNounArray[1] + ", who upon noticing me " +  newAdverbArray[1] + " said \"I need to " + newVerbArray[1] + "\". \"Well, that was " + newAdjArray[1] + " " + "\" I thought to myself and walked in the store. The store had rearranged its inventory, so I felt " + newAdverbArray[1] + " lost. I   walked up to store clerk and said " + newAdverbArray[2] +  " \"I am looking for a " + newAdjArray[2] + " " + newNounArray[1] + " that doesn\’t " + newVerbArray[1] + " as often as the last one I had.\" The store clerk looked at me with a " + newAdjArray[3] + " look in his eye and said, \"What you are looking for can be found by the " + newNounArray[2] + ", if you see a " + newNounArray[3] + " that " + newAdjArray[2] + " can " + newVerbArray[2] + ", then you've gone too far.\" As I tried to understand his directions, I thought to myself, \"I should have just ordered it on amazon.com, Their products seem to " + newVerbArray[3] + " the perfect amount\"");
		storyDiv.appendChild(text);
		document.body.appendChild(storyDiv);
	}
}
function fillArray(newWordArray,newInput,wordPossArr,wordSelector){
	while(newWordArray.length < 5){
		var randomNumber = Math.floor(Math.random()*54);
		newWordArray.push(nounPossibilities[randomNumber]);
		var wordOption = document.createElement("OPTION"); 
		wordOption.textContent = nounPossibilities[randomNumber];
		wordOption.value = nounPossibilities[randomNumber];
		wordSelector.appendChild(wordOption);		
	}
}

function enterKeyPressed(event){
	var keyPressed = event.keyCode;
	if (keyPressed === 13) {
		storyTime();
	}
}

function removeStory(){
	var storyName = document.getElementById("story-options").value
	index = inexOf(storyName);
	// add stories upon creation to an array, so you can remove them (maybe)
}





