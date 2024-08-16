{
    //Interface : A brother of type Alias,
    interface User{
        name: string,
        age: number
    }
    const User1: User = {
        name: 'John',
        age: 40
    }
    //if want to extend any property using interface
    interface UserWithAddress extends User{
        address: string
    }

    const User2: UserWithAddress ={
        name: 'John2',
        age: 50,
        address: 'Dhaka'
    }

    console.log(User2)

    //Array declaration using interface
    // interface ArrayName{[index type]: value type}

    interface Rolls {
        [index: number]:number
    }

    const Rolls6: Rolls = [1,2,3,3,4,54,5] 

    console.log(Rolls6)


    //function using interface
    interface Add{
        (num1: number, num2: number): number
    }
    const Add1:Add =(num1,num2)=>num1+num2
    console.log(Add1(1,4))
    
}