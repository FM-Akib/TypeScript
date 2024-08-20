{
    //Constraints
    
    const addCourseToStudent = <T extends {name:string, roll: number}>(student:T)=>{
        const course = "Next Level Web Development"
        return {...student, course}
    }

    const student1 = addCourseToStudent({name:"Yamin", roll: 12, contact:"01912345678", gender:"Male"})
    console.log(student1)

    //generic constraint with keyof operator
    type Vehicle = {
        bike:string;
        car:string;
        ship:string;
    }
    type Owner = keyof Vehicle
    const person1:Owner = "bike"


    const getPropertyValue = <X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }
    const user = {
        name: "Mr. Pangash",
        age: 18,
        address: "Ctg"
    }

    const res1 = getPropertyValue(user, "name")
    console.log(res1) 
}