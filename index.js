function repeatedChars(charArray, numArray) {
	const iterator = numArray.keys();
	const wordup = [];

	for (const key of iterator) {
		//console.log(numArray[key]);
		let i = numArray[key];

		for (incr = 0; incr < i; incr++){
			wordup.push(charArray[key]);

	}


}

return wordup.join('');
}

console.log(repeatedChars(['a','b','c'], [1,2,3])); 
console.log(repeatedChars(['h','e','l','o'], [1,1,2,1])); 
