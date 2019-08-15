let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']
let trickyArray = [1, 2, 3, 4, 5, 7, 8, 9, 10]
let currencyDen = [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]

// 20101. Create a function that logs each number individually
const logIndividually = a => {
	a.forEach(n => console.log(n))
}

// 20102. Create a function that logs each student's name
const extractNames = a => {
	a.forEach(s => console.log(s.name))
}

// 20103. Create a function that adds 1 to each number and returns a new array
const addOne = a => {
	return a.map(n => n + 1)
}

// 20104. Create a function that returns an array of all the students' names
const getAllNames = a => {
	return a.map(s => s.name)
}

// 20105. Create a function that returns an array with only numbers equal to or greater than 22
const greaterThan22 = a => {
	return a.filter(n => n >= 22)
}

// 20106. Create a function that returns an array with only numbers greater than the parameter passed onto the function
const greaterThan = (x, a) => {
	return a.filter(n => n > x)
}

// 20107. Create a function that returns an array with only students whose name is more than 6 characters long
const longNames = a => {
	return a.filter(s => s.name.length > 6)
}

// 20108. Create a function that returns an array with only strings from mix
const getStrings = a => {
	return a.filter(e => typeof e == 'string')
}

// 20109. Create a function that returns the first number greater than 100
const getGreaterThan100 = a => {
	return a.find(n => n > 100)
}

// 20110. Create a function that returns the first student whose name is Bob
const getBob = a => {
	return a.find(s => s.name == 'Bob')
}

// 20111. Create a function that returns the sum of all numbers using reduce()
const sumAll = a => {
	return a.reduce((c, i) => { return c + i })
}

// 20112. Create a function that returns the sum of all numbers without using reduce()
const sumAllWithoutReduce = a => {
	let sum = 0
	a.forEach(n => sum += n)
	return sum
}

// 20113. Create a function that returns the difference of all numbers, using reduce()
const subtractAll = a => {
	return a.reduce((c, i) => { return c - i })
}

// 20114. Create a function that returns the product of all numbers
const multiplyAll = a => {
	return a.reduce((c, i) => { return c * i })
}

// 20115. Create a function that returns an array with numbers sorted in descending order
const sortDescending = a => {
	return a.sort((a, b) => a - b).reverse()
}

// 20116. Create a function that returns an array with students sorted by ascending length of their names
const sortByLength = a => {
	return a.sort((a, b) => a.name.length - b.name.length)
}

// 20118. Using numbers and students, create a function that outputs the following array:
const insertAge = (a1, a2) => {
	let shortArray
	a1.length < a2.length ? shortArray = a1 : shortArray = a2
	return shortArray.map( (e, i) => {
		return {
			name: a2[i].name,
			age: a1[i]
		}
	} )
}

// 20119. In the following array, number 6 is missing. Create a function that returns the missing number.
const findMissingNum = a => {
	let output = []
	for (var i = 0; i < a.length; i++) {
		if (a[i] != i+1) {
			return i+1
		}
	}
}

// 20120. Given the following currency denominations create a function that returns an array with separate denominations needed to reach the amount passed into the function. Optimize for higher denominations.
const getDenominations = x => {
	let output = []
	// currencyDen.forEach(n => {
	// 	let times = (x - (x%n))/n
	// 	for (var i = 0; i < times; i++) {
	// 		output.push(n)
	// 	}
	// 	x = x%n
	// })
	i = 0
	while (i <= currencyDen.length) {
		if (x > currencyDen[i]) {
			x = x - currencyDen[i]
			output.push(currencyDen[i])
		} else {
			i++
		}
	}
	return output
}



//logIndividually(numbers)
//extractNames(students)
//console.log(addOne(numbers))
//console.log(getAllNames(students))
//console.log(greaterThan22(numbers))
//console.log(greaterThan(70, numbers))
//console.log(longNames(students))
//console.log(getStrings(mix))
//console.log(getGreaterThan100(numbers))
//console.log(getBob(students))
//console.log(sumAll(numbers))
//console.log(sumAllWithoutReduce(numbers))
//console.log(subtractAll(numbers))
//console.log(multiplyAll(numbers))
//console.log(sortDescending(numbers))
//console.log(sortByLength(students))
//console.log(insertAge(numbers, students))
console.log(findMissingNum(trickyArray)) //How to skip the last one?
//console.log(getDenominations(27.58))
