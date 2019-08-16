let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

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

//console.log(flipPhrase(phrase))
//console.log(splitCurrencies(prices))
