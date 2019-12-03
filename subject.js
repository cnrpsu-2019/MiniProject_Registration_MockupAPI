var subject = [
	{
		'id':1,
		'subjectCode':'240-461',
		'subjectName':'Enterprise Network Managing',
		'subjectRegisAmount':2,
		'subjectAllAmount':30
	},
	{
		'id':2,
		'subjectCode':'240-460',
		'subjectName':'Internet Programing',
		'subjectRegisAmount':3,
		'subjectAllAmount':30
	}
]

exports.findAll = ()=>{
	return subject;
}

exports.findByCode =(code)=>{
	for (var i=0;i<subject.length;i++){
		if(subject[i].subjectCode == code)
			return subject[i]
	}
}
