let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

// 20201. Create a function that rounds any given number passed to the function, removing any decimals
const roundNumber = x => {
	return Math.round(x)
}

// 20202. Create a function that returns all products with their prices rounded
const roundPrices = a => {
	a.forEach(p => p.price = Math.round(p.price))
	return a
}

// 20203. Create a function that takes 2 numbers as parameters and returns the first number rounded to the number of decimals defined by the second parameter.
const roundDecimals = (num, dec) => {
	return num.toFixed(dec)
}

//console.log(roundNumber(3.14))
//console.log(roundNumber(15.9))
//console.log(roundPrices(products))
console.log(roundDecimals(35.158743, 3))
