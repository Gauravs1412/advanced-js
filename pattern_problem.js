class students {
    static count = 0;
    constructor(name,age,phoneNumber,marks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber
        this.marks = marks
        students.count++;


    }

    numberOfstudent(){
        console.log(`${students.count} students are present` )
    }


    checkEligibility(){
        if(this.marks > 40){
            console.log(`${this.name } is eligible for a college`)
        }
        else{
            console.log(`${this.name} is not eligible for a college`)
        }
    }
}

var student1 = new students("N1", 45,43229,89)
var student2 = new students("n2", 40,34323,33)
var student3 = new students("n3", 35,3332434, 90)
var student4 = new students("n4", 90,2342343,56)
var student5 = new students("n5", 100,34343,78)

student3.checkEligibility()
student1.numberOfstudent()