$(document).ready(function() {
	function userInput() {
		var inputNumber = +parseInt(prompt("Enter an integer 1-100"));
		if (inputNumber === 0) {
			console.log('inputNumber')
			return;
		}
		else if (isNaN(inputNumber)) {
			alert ("Not a number!");
			userInput;
		}
		else {
			results(inputNumber);
		}
	}

	
	function results(inputNumber) {
		for (var i=1; i <= inputNumber; i++) {
    		if (i % 3 === 0 && i % 5 === 0) {
        		$('#root').append("FizzBuzz" + "<br />");
    		}
    		else if (i % 5 === 0) {
        		$('#root').append("Buzz" + "<br />");
    		}
    		else if (i % 3 === 0) {
        		$('#root').append("Fizz" + "<br />");   
    		}
    		else if (i % 1 != 0) {
				alert ("No decimals!");
				userInput;
			}
    		else {
        		$('#root').append(i + "<br />");
    		}
		};
	};
	userInput();
});
	

