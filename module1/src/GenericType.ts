{

    //Generic Type
    
    //array
    type GenericArray<T> = Array<T>;
    const rollsNumbers : GenericArray<number> = [12,13,14]
    console.log(rollsNumbers)

    //string
    const mentors : GenericArray<string> = ["Fahim","Muntasir","Akib"]
    console.log(mentors)

    //object
    type GenericObjectArray<T> = Array<T>
    
    const user : GenericObjectArray<{name: string,age:number}> = [
        {name: "Fahim",age: 20},
        {name: "Muntasir",age: 30},
    ]
    console.log(user)
    
    //Tuple
    type GenericTuple<X,Y> = [X,Y]
    const manush:GenericTuple<string,number> = ["Fahim", 20]
    console.log(manush)

    const userWithId : GenericTuple<number,{name:string,age:number}> =[12,{name:"Fahim",age:20}]
    console.log(userWithId)



    // ## Generic Type with Interface ===========
    
    
    interface Developer <T,X=null> {
        name: string,
        computer: {
            brand:string;
            model:string;
            releaseYear:string;
        }
        smartWatch:T
        bike?:X
    } 

    type watch = {
        brand:string;
        model:string;
        releaseYear:string;
    }

    const poorDeveloper : Developer<watch> = {
        name: "Fahim",
        computer: {
            brand:"Apple",
            model:"Macbook",
            releaseYear:"2020"
        },
        smartWatch:{
            brand:"Apple",
            model:"Macbook",
            releaseYear:"2020"
        }
    }
    console.log(poorDeveloper)

    interface bike{
        brand:string;
        engineCapacity:number;
    }

    const RichDeveloper : Developer<watch,bike> = {
        name: "Muntasir",
        computer: {
            brand:"Apple",
            model:"Macbook",
            releaseYear:"2020"
        },
        smartWatch:{
            brand:"Apple",
            model:"Macbook",
            releaseYear:"2020"
        },
        bike:{
            brand:"Yamaha",
            engineCapacity:150
        }
    }
    console.log(RichDeveloper)










}