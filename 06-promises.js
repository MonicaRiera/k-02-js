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

getUp()
.then(res => {
	console.log(res)
	haveShower()
	.then(res => {
		console.log(res)
		haveBreakfast()
		.then(res => {
			console.log(res)
			brushTeeth()
			.then(res => console.log(res))
		})
	})
})
.catch(err => console.log(err))
