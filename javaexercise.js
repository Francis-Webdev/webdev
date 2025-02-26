const student = [
{
    Name: "diego",
    IDnum:101010,
    Year:2020,
    Grade:92,
},
{
    Name: "Shane",
    IDnum:1011010,
    Year:2020,
    Grade:93,
},
{
    Name: "francis",
    IDnum:101910,
    Year:2020,
    Grade:100,
},
{
    Name: "torcey",
    IDnum:108010,
    Year:2020,
    Grade:95,
},
{
    Name: "dineesh",
    IDnum:107010,
    Year:2020,
    Grade:96,
},
{
    Name: "althea",
    IDnum:106010,
    Year:2020,
    Grade:91,
},
{
    Name: "keith",
    IDnum:105010,
    Year:2020,
    Grade:89,
},
{
    Name: "julia",
    IDnum:104010,
    Year:2020,
    Grade:98,
},
{
    Name: "sean",
    IDnum:103010,
    Year:2020,
    Grade:92,
},
{
    Name: "boni",
    IDnum:102010,
    Year:2020,
    Grade:99,
},
];

function findTopAndLowestStudent(students){
    if (student.length === 0){
        console.log("No students available.");
        return; 
    }

    let highestStudent = students[0];
    let lowestStudent = students[0];
  
    
    for (let student of students){
        if(student.Grade > highestStudent.Grade){
            highestStudent = student;
        }
        if(student.Grade < lowestStudent.Grade){
            lowestStudent = student;
    }
}
  console.log(`Highest Grade: ${highestStudent.Grade} - ${highestStudent.Name}`);
  console.log(`Lowest Grade: ${lowestStudent.Grade} - ${lowestStudent.Name}`);
}

findTopAndLowestStudent(student);