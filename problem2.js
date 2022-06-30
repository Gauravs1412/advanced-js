class student {
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minPlacementAge){
        return (minMarks) => {
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(`${this.name} is ready for placements`)
            }
            else {
                console.log(`${this.name} is not ready for the placements`)
            }
        }
    }


}


const student1 = new student("S1", 23,56)
const student2 = new student("S2", 15, 35)

student2.setPlacementAge(18)(40)
