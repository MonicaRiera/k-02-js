// 20501. Create a class Car. Create a buildCar function that takes make, model and color and returns a new instance of Car
let Car = class {
	constructor(maker, model, color) {
		this.maker = maker
		this.model = model
		this.color = color
	}
}

let buildCar = (maker, model, color) => {
	return new Car(maker, model, color)
}

//console.log(buildCar('Toyota', 'Avensis', 'Blue'))

// 20502. Create a class Employee with properties name and job. Create a makeEmployees function that takes the 2 arrays of matching names and jobs as parameters and, using the Employee class, returns an array of objects
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

let Employee = class {
	constructor(name, job) {
		this.name = name
		this.job = job
	}
}

let makeEmployees = (n, j) => {
	return n.map( (e, i) => {
		return new Employee(e, j[i])
	})
}

//console.log(makeEmployees(names, jobs))

// 20503.
// 1. Create a class Karateka, that takes a name as parameter and has the belt property set to the first belt in belts by default.
// 2. Karateka should also have an increaseRank function that upgrades the belt by 1 step (from the array belts)
// 3. Create an instance of Karateka with your name
// 4. Create a fight function that takes your instance of Karateka as a parameter
// 5. Within the fight function, every second, for a maximum of 20 seconds, draw a random score between 1 and 10
// 6. If the score is higher than 8, upgrade the belt of your Karateka instance, by calling the increaseRank function
// 7. Every second, within the fight, log the score and the instance of Karateka
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

let Karateka = class {
	constructor(name) {
		this.name = name
		this.belt = belts[0]
	}

	increaseRank() {
		if (this.belt != 'black') {
			this.belt = belts[belts.indexOf(this.belt) + 1]
		}
	}
}

let fight = (fighter) => {
	let interval = setInterval(() => {
		let random = Math.round(Math.random()*9+1)
		if (random > 8) {
			fighter.increaseRank()
		}
		console.log(random)
		console.log(fighter.belt)
	}, 1000)
	setTimeout(f => clearInterval(interval), 21000)
}

let karateka = new Karateka('Monica')
//fight(karateka)


// 20504.
// 1. Create a class Product with parameters name and price
// 2. Also add the function applyDiscount() inside Product that takes a parameter discount and applies the discount to the Product's price (discount should be a number, where 10 represents 10% discount)
// 3. Create a class Receipt that takes an array of objects called products as a parameter
// 4. Also add the function calcTotal() inside Receipt that takes products and returns the sum of the products' prices.
// 5. Create a function getReceipt() that takes names, prices and discounts as parameters, then
// i. Creates objects with name and price using the Product class as factory
// ii. Applies the discounts using the applyDiscount() function within products
// iii. Creates a receipt using the Receipt class
// iv. logs the receipt and the total using the calcTotal function within Receipt
let prodNames = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prodPrices = [20, 12, 24, 53, 32, 15]
let prodDiscounts = [0, 0, 10, 25, 0, 5]

let Product = class {
	constructor(name, price) {
		this.name = name
		this.price = price
	}

	applyDiscount(discount) {
		this.price = this.price*(1-discount/100)
		return this
	}
}

let Receipt = class {
	constructor(products) {
		this.products = products
	}

	calcTotal() {
		let sum = 0
		this.products.forEach(p => {
			sum += p.price
		})
		//return `Total: ${sum}`
		return sum
	}
}

let getReceipt = (names, prices, discounts) => {
	let products = names.map((e, i) => {
		return new Product(e, prices[i]).applyDiscount(discounts[i])
	})
	// let receipt = new Receipt(products)
	// console.log(receipt)
	// console.log(receipt.calcTotal())
	return new Receipt(products)
}

let printReceipt = (receipt) => {
	let horizontalLine = generatePrintLine('', '-', 26)
	console.log(horizontalLine)

	receipt.products.forEach(p => {
		let productLine = generatePrintLine(`| ${p.name}`, ' ', 10-p.name.length) +
		generatePrintLine(`| $${p.price.toFixed(2)}`, ' ', 10-(String(p.price.toFixed(2)).length)) + '|'
		console.log(productLine)
	})

	console.log(horizontalLine)
	let totalLine = generatePrintLine(`| Total`, ' ', 5) +
	generatePrintLine(`| $${receipt.calcTotal().toFixed(2)}`, ' ', String(receipt.calcTotal()).length - 1) + '|'
	console.log(totalLine)
	console.log(horizontalLine)
}

let generatePrintLine = (string, separator, length) => {
	for (var i = 0; i < length; i++) {
		string += separator
	}
	return string
}

let receipt = getReceipt(prodNames, prodPrices, prodDiscounts)
printReceipt(receipt)
