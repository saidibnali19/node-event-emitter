const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("start", () => console.log("Started"))

eventEmitter.emit("start")

eventEmitter.on("continue", number => console.log(`Continuing with ${number}`))

eventEmitter.emit("continue", 20)

eventEmitter.on("end", (number1, number2) => console.log(`Ending with ${number1} and ${number2}`))

eventEmitter.emit("end", 99, 100)