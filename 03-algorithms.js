let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']
let romanNumerals = [{v:1000, s:'M'}, {v:900, s:'CM'}, {v:500, s:'D'}, {v:400, s:'CD'}, {v:100, s:'C'}, {v:90, s:'XC'}, {v:50, s:'L'}, {v:40, s:'XL'}, {v:10, s:'X'}, {v:9, s:'IX'}, {v:5, s:'V'}, {v:4, s:'IV'}, {v:1, s:'I'}]

// 20301. Flip each word in phrase and return a single string
const flipPhrase = p => {
	let words = p.split(' ')
	let output = words.map(w => {
		return w.split('').reverse().join('')
	})
	return output.join(' ')
}

// 20302. Convert the array of prices into the following array of objects. Make sure that the value property is of type number.
const splitCurrencies = a => {
	return a.map(p => {
		let e = p.split('')
		let c = e.shift()
		let v = e.join('')
		return {
			currency: c,
			value: Number(v)
		}
	})
}

// 20303. From the array names return only the palindromes (a palindrome is a word that reads exactly the same from left to right and backwards).
const findPalindromes = a => {
	let output = []
	a.forEach(n => {
		let reverse = flipPhrase(n.toLowerCase())
		if (n.toLowerCase() == reverse) {
			output.push(n)
		}
	})
	return output
}

// 20304. Create a function that, given any number (positive integer) returns the number in Roman numerals.
const getRomans = (x, a) => {
	let output = ''
	i = 0
	while (i < a.length) {
		if (x >= a[i].v) {
			x = x - a[i].v
			output += a[i].s
			//output.push(romanNumerals[i].s)
		} else {
			i++
		}
	}
	return output
}

// 20305. Create a function that loops numbers from 0 to 20. For each number, if the number is a multiple of 3, log fizz; if the number is a multiple of 5, log buzz; if the number is a multiple of both 3 and 5, log fizzbuzz; for all other numbers, log the number itself.
const fizzBuzz = (init, fin) => {
	for (var i = init; i <= fin; i++) {
		let mul3 = i%3
		let mul5 = i%5

		if (!mul3 && !mul5) {
			console.log(`${i} fizzbuzz`)
		} else if (!mul3) {
			console.log(`${i} fizz`)
		} else if (!mul5) {
			console.log(`${i} buzz`)
		} else {
			console.log(i);
		}
	}
}

// 20306. Create a function a that takes 2 numbers as parameters and returns their sum. Create a function b that takes 4 parameters, the first is a function that takes itself 2 parameters, the other 3 are numbers. Call function b and pass as parameters function a and 3 numbers. function b should trigger function a passing as parameters the first 2 numbers, therefore getting their sum, then subtract the last number and return the result.
const a = (x, y) => x + y
const b = (f, x, y, z) => f(x, y) - z


//console.log(flipPhrase(phrase))
//console.log(splitCurrencies(prices))
console.log(findPalindromes(names))
//console.log(getRomans(1994, romanNumerals))
//fizzBuzz(0, 20)
//console.log(b(a, 8, 2, 4))
