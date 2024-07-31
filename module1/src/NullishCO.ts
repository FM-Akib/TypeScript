{

    // Nullish Coalesing Operator
    
    const isAuthenticated = null
    const res = isAuthenticated ?? "Guest"
    console.log(res)


    type User = {
        name: string;
        address:{
            city:string;
            presentAddress:string;
            permanentAddress?:string;
        }
    }


    const user:User = {
        name: "Fahim",
        address:{
            city:"Dhaka",
            presentAddress:"Dhaka",
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address"
    console.log(permanentAddress)
}