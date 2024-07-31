{
    let firstName: string = "Fahim"
    let roll:number = 12
    let isAdmin:boolean = true
    let x:undefined = undefined
    let y:null = null

    // Array
    let friends:string[] = ["Fahim", "Muntasir","Akib"]
    let rolls:number[] = [12,13,14]
    // Tuple
    let coordinates:[number,number] =[12,13]
    let persons:[string,number] = ["Fahim", 12]

    console.log(persons)
    console.log(firstName,roll)

    // Object
    const person:{
        company: "Apple";
        firstName:string;
        middleName?:string;
        lastName:string;
        isMarried:boolean;
    }={
        company:"Apple",
        firstName:"Fahim",
        lastName:"Muntasir",
        isMarried:true
    }
    console.log(person)
}