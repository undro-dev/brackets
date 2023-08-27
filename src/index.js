module.exports = function check(str, bracketsConfig) {
	let brackets = bracketsConfig.map(el => el.join('')).join('');

	let stack = [];

	for (let bracket of str) {
		let bracketsIndex = brackets.indexOf(bracket);

		let isSimilar = brackets[bracketsIndex] === brackets[bracketsIndex + 1];

		if (isSimilar && stack[stack.length - 1] !== bracket) {
			stack.push(bracket);
		} else if (isSimilar && stack[stack.length - 1] === bracket) {
			stack.pop();
		} else if (bracketsIndex % 2 === 0 && !isSimilar) {
			stack.push(bracketsIndex + 1);
		} else {
			if (stack.pop() !== bracketsIndex) {
				return false;
			}
		}
	}

	return stack.length === 0;
};
