var textInput = document.getElementById('textInput');
var btn = document.getElementById('btn');

textInput.addEventListener('keyup', function () {
	if (event.keycode < 64 || event.keycode > 90) {
		textInput.value = textInput.value.replace(event.keycode, "");
	}
	doStuff(textInput.value);
});


function reversal(testString) {
	var reverseDiv = document.getElementById('reversal');
	reverseDiv.innerHTML = testString.split('').reverse().join('');
}

function alphabits(testString) {
	var alphabitsDiv = document.getElementById("alphabits");
	alphabitsDiv.innerHTML = testString.split("").sort(function (a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    return a < b ? -1 : 1;
	}).join("");
}

function palindrome(testString) {
	var palindromeDiv = document.getElementById('palindrome');
	if (testString.split('').reverse().join('').toLowerCase() === testString.toLowerCase()) {
		palindromeDiv.innerHTML = "Your word is a palindrome.";
	} else {
		palindromeDiv.innerHTML = "Your word is NOT a palindrome.";
	}
}

function doStuff (testString) {
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
};