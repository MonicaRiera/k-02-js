// 20401. Create a function a that logs 'Hello'. Create a function b that takes 2 parameters: function a and a number in seconds, then triggers function a after the number of seconds passed as parameter.
const a = () => console.log('Hello!')
const b = (f, t) => {
	setTimeout(f, t*1000)
}

// 20402. Create a function that logs 'Hello' and the number of seconds elapsed, every second, then stops after 5 seconds.
const greeting = () => {
	console.log('Hello ' + i)
	i++
}

const greetingCounter = () => {
	i = 1;
	let interval = setInterval(f => greeting(i), 1000)
	setTimeout(f => clearInterval(interval), 6000)

}

//b(a, 3)
greetingCounter()
