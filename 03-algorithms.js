let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']
let romanNumerals = [{v:1000, s:'M'}, {v:900, s:'CM'}, {v:500, s:'D'}, {v:100, s:'C'}, {v:90, s:'XC'}, {v:50, s:'L'}, {v:40, s:'XL'}, {v:10, s:'X'}, {v:9, s:'IX'}, {v:5, s:'V'}, {v:4, s:'IV'}, {v:1, s:'I'}]

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
		let reverse = flipPhrase(n)
		if (n == reverse) {
			output.push(n)
		}
	})
	return output
}

// 20304. Create a function that, given any number (positive integer) returns the number in Roman numerals.
const getRomans = x => {
	let output = []
	i = 0
	while (i < romanNumerals.length) {
		if (x > romanNumerals[i].v) {
			x = x - romanNumerals[i].v
			output.push(romanNumerals[i].s)
		} else {
			i++
		}
	}
	return output.join('')
}

//console.log(flipPhrase(phrase))
//console.log(splitCurrencies(prices))
//console.log(findPalindromes(names))
console.log(getRomans(1994)) //Missing last number
