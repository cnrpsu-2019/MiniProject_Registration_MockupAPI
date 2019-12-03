var app = require('express')()
var port = 3000
var subject = require('./subject')
app.get('/',(req,res)=>{
	res.send('Welcome to API Server')
})
app.get('/subject/',(req,res)=>{
	console.log('User Request All Subject')
	res.json(subject.findAll())
})
app.get('/subject/:code',(req,res)=>{
	res.json(subject.findByCode(code))
})

app.listen(port,()=>{
	console.log('App is run at port '+port)
})

