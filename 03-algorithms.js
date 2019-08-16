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

//console.log(flipPhrase(phrase))
