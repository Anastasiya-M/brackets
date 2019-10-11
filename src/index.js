module.exports = function check(str, bracketsConfig) {
	let openBrackets = ["[", "{", "(", "|", "1", "3", "5", "7", "8"];
	let closeBrackets = ["]", "}", ")", "|", "2", "4", "6", "7", "8"];
	let testArr = [];
	let arr = str.split("");

	for(let i=0; i<arr.length; i++){
		if(openBrackets.includes(arr[i])){
			testArr.push(arr[i]);
			if(testArr.length>1){
				if((openBrackets.indexOf(testArr[testArr.length-2]) == closeBrackets.indexOf(testArr[testArr.length-1]))){
					testArr.pop();
					testArr.pop();
				}
			}
		} else if (testArr.length == 0){
			return false;

		} else {
			
			if((openBrackets.indexOf(testArr[testArr.length-1]) == closeBrackets.indexOf(arr[i]))){
				testArr.pop();
			}
				else {
					return false;
				}
		}
	}
	if(testArr.length == 0){
		return true;
	} else {
		return false;
	}
}