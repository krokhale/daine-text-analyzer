// this listens for the click of the button to pull the text in the box into an array of words and characters.  Then 
// splits averages the arrays and passes results to other functions
$('.js-button').click(function() {
	var uText = $('#js-user-text').val();
	var wordArray = uText.split(" ");
	var charArray = uText.split("");
	var avgCharAnswer = charArray.length/wordArray.lenght;
	var wordsTotal = wordArray.lenght;
	avgChar(avgCharAnswer, wordsTotal);
	uniqueWordsFunc(wordArray);

	});


// this takes the first array of words and calculates the number of unique words by looping through the array 
// and creating a new array of words that dont already exist in the new array.
function uniqueWordsFunc(wordArray2){
	var uniqueArray = [];
	for (var i = 0; i<wordArray2.length; i=i+1)  {
		if (uniqueArray.indexOf(wordArray2[i]) == -1) {
			uniqueArray.push(wordArray2[i]);
		}
	}
	var numUWords = uniqueArray.length;
	uniqueAnswer(numUWords);
}


// post results and remove hidden class.
function avgChar(avgCharAnswer2, wordsTotal2){
	$('js-resluts').find('Average word count').text(avgCharAnswer2 + ' characters');
	$('js-results').find('Word Count').text(wordsTotal2 + ' words'); 
	$('js-results').removeClass('.hidden');
}

// post results of uniqueWordsFunc.
function uniqueAnswer(numUWords2){
	$('js-resluts').find('Unique word count').text(numUWords2 + ' unique words');

}