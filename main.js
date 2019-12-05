var app = require('express')()
var port = 8080
var faculty = require('./faculty')
var bodyParser = require('body-parser')
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods','POST,GET,PUT,PATCH,DELETE,OPTIONS')
	res.header('Access-Control-Allow-Headers','Content-Type,Option,Authorization')
	next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.get('/', (req, res) => {
	res.send('Welcome to API Server')
})

app.get('/all/', (req, res) => {
	console.log('User Request All Subject')
	res.json(faculty.findAll())
})
app.get('/:faculty', (req, res) => {
	var thisFaculty = req.params.faculty
	res.json(faculty.findByFaculty(thisFaculty))
})
app.get('/:faculty/:subject', (req, res) => {
	var thisFaculty = req.params.faculty
	var subject = req.params.subject
	res.json(faculty.findBySubject(thisFaculty, subject))
})

app.post('/register/',(req,res)=>{
	let json = req.body;
	console.log('post request has arrive at the server')
	console.log(json)
	res.send("Register " + json.StudentID + "complete")
	res.end()
})

app.listen(port, () => {
	console.log('App is run at port ' + port)
})

