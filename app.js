const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("start", () => console.log("Started"))

eventEmitter.emit("start")