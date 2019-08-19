// 20601.
// 1. Create a function brushTeeth that resolves with ready after 1 second.
// 2. Create a function getUp that resolves with awake after 1 second.
// 3. Create a function haveBreakfast that resolves with eaten after 2 seconds.
// 4. Create a function haveShower that resolves with showered after 2 seconds.
// 5. Call the functions in the following order:
// 	i. getUp
// 	ii. haveShower
// 	iii. haveBreakfast
// 	iv. brushTeeth
// 6. Make sure one doesn't start before the previous one is finished and logs its result
let brushTeeth = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('Ready')}, 1000)
	})
}

let getUp = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('Awake')}, 1000)
	})
}

let haveBreakfast = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('Eaten')}, 2000)
	})
}

let haveShower = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('Showered')}, 2000)
	})
}

// getUp()
// .then(res => {
// 	console.log(res)
// 	haveShower()
// 	.then(res => {
// 		console.log(res)
// 		haveBreakfast()
// 		.then(res => {
// 			console.log(res)
// 			brushTeeth()
// 			.then(res => console.log(res))
// 		})
// 	})
// })
// .catch(err => console.log(err))

// 20602.
// 1. Create a function makeCoffee that resolves with coffee after 10 seconds.
// 2. Create a function makeEggs that resolves with eggs after 5 seconds.
// 3. Create a function makeToast that resolves with toast after 6 seconds.
// 4. Create a function makeBacon that resolves with bacon after 8 seconds.
// 5. Call all the functions at once and when all have resolved, log a string containing an array with all the responses.
let makeCoffee = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('coffee')}, 10000)
	})
}

let makeEggs = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('eggs')}, 5000)
	})
}

let makeToast = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('toast')}, 6000)
	})
}

let makeBacon = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('bacon')}, 8000)
	})
}

// Promise.all([makeCoffee(), makeEggs(), makeToast(), makeBacon()])
// .then(res => console.log(res))

// 20603. Create 3 racing horses: "Speedy", "Jackpot" and "Red". Each one will finish the race and resolve with its name after a random time between 1 and 4 seconds. Start the race and log the winning horse:
let Horse = class {
	constructor(name) {
		this.name = name
		this.time = Math.random()*3+1
	}
}

let run = (horse) => {
	return new Promise((res, rej) => {
		setTimeout(() => {res(`The winner is ${horse.name}`)}, horse.time*1000)
	})
}

Promise.race([run(new Horse('Speedy')), run(new Horse('Jackpot')), run(new Horse('Red'))])
.then(res => console.log(res))
