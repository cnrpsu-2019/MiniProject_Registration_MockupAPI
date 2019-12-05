const EventEmitter = require("events")
const pusherEventLoop = new EventEmitter()

const zmq = require("zeromq")
var zmqPushSock = new zmq.Push()

pusherEventLoop.on("push", i => {
  let dataObj = {
    StudentID: "5910110150"
  }
  zmqPushSock.send(JSON.stringify(dataObj)).then(() => {
    setTimeout(() => {
      pusherEventLoop.emit("push", i + 1)
    }, 5000)
  })
})

zmqPushSock.bind("tcp://127.0.0.1:3030").then(() => {
  pusherEventLoop.emit("push", 0)
})
