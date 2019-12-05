/**-------Express Dependencies----------- */
var app = require("express")()
var port = 8080
var faculty = require("./faculty")
var bodyParser = require("body-parser")
const EventEmitter = require("events")
const pusherEventLoop = new EventEmitter()
/**---------ZeroMQ Dependencies ---------------- */
const zmq = require("zeromq")
var zmqPushSock = new zmq.Push()
/**---------Function------------------ */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Methods",
    "POST,GET,PUT,PATCH,DELETE,OPTIONS"
  )
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Option,Authorization"
  )
  next()
})
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

/**-----Data Fetching-------- */
app.get("/", (req, res) => {
  res.send("Welcome to API Server")
})

app.get("/all/", (req, res) => {
  console.log("User Request All Subject")
  res.json(faculty.findAll())
})
app.get("/:faculty", (req, res) => {
  var thisFaculty = req.params.faculty
  res.json(faculty.findByFaculty(thisFaculty))
})
app.get("/:faculty/:subject", (req, res) => {
  var thisFaculty = req.params.faculty
  var subject = req.params.subject
  res.json(faculty.findBySubject(thisFaculty, subject))
})

/**----Registration---------------- */
app.post("/register/", (req, res) => {
  //Input using type JSON
  let input = req.body
  console.log("post request has arrive at the server")
  res.send("Register " + input.StudentID + "is come to process")
  console.log("User Want to Enroll " + input.SubjectToEnroll.length)
  console.log(input.SubjectToEnroll)
  //Push to Message Queue
  zmqPushSock.bind("tcp://127.0.0.1:8090").then(() => {
    pusherEventLoop.emit("push", input.StudentID, input.SubjectToEnroll)
  })
  res.end()
})

/**-----ZeroMQ Request handle--------------- */
pusherEventLoop.on("push", (student, subject) => {
  let dataObj = {
    StudentID: student,
    SubjectToEnroll: subject
  }
  console.log("Push To Unprocessed Queue is ready")
  console.log(dataObj)
  zmqPushSock.send(JSON.stringify(dataObj))
})

/**-------Port Listening------- */
app.listen(port, () => {
  console.log("App is run at port " + port)
})
