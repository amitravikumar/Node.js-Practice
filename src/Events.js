var events = require("events");
var eventEmitter = new events.eventEmitter();

var Mumbai = function() {
  console.log("Mumbai is the finance capital of India");
};

var Delhi = function() {
  console.log("Delhi is capital of India");
};

eventEmitter.on("MumbaiIn", Mumbai);

eventEmitter.on("DelhiIn", Delhi);

eventEmitter.emit("MumbaiIn");
eventEmitter.emit("DelhiIn");
