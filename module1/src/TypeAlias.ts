{
    type Student = {
        name:string
        roll:number
        contact?:string
        gender:string
    }

    const student1:Student = {
        name:"Fahim",
        roll: 12,
        contact:"01912345678",
        gender:"Male"
    }

    console.log(student1)
    
    // function alias

    type Add = (num1:number, num2:number)=>number
    const add:Add = (num1,num2)=>{
        return num1+num2
    }
    console.log(add(12,12))


}