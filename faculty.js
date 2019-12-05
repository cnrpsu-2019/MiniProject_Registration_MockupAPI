var faculty = [
	{
		'id':1,
		'facultyName':'engineering',
		'subject':[
			{
				'id':1,
				'subjectCode':'240-461',
				'subjectName':'Enterprise Network Managment',
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
	},
	{
		'id':2,
		'facultyName':'science',
		'subject':[
			{
				'id':1,
				'subjectCode':'332-104',
				'subjectName':'General Physic II',
				'subjectRegisAmount':45,
				'subjectAllAmount':50
			}
		]
	}
]

exports.findAll = ()=>{
	return faculty;
}

exports.findByFaculty =(thisFaculty)=>{
	for (var i=0;i<faculty.length;i++){
		if(faculty[i].facultyName == thisFaculty)
			return faculty[i]
	}
}
exports.findBySubject = (thisFaculty,subject) => {
for (var i=0;i<faculty.length;i++){
		if(faculty[i].facultyName == thisFaculty)
		{
			for (var j=0;j<faculty[i].subject.length;j++){
				if(faculty[i].subject[j].subjectCode == subject)
					return subject[j]
			}
		}
	}
}
