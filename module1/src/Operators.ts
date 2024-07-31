{
    // spread Operator
    const bros1:string[]=["Abul","kabul","babul"]
    const bros2:string[]=["Azim","Nazim","Shazim"]
    bros1.push(...bros2)
    console.log(bros1)

    // Rest Operator
    const mentor1 ={
        typescript : "Fahim",
        express:"Muntasir",
    }

    const mentor2 ={
        react:"Rakib",
        next:"Tanmoy",
    }

    const mentor3={
        dbms:"Sarjil",
        mongo:"Yasin",
    }

    const allMentors = {...mentor1, ...mentor2, ...mentor3}
    console.log(allMentors)

    const greetFriends =(...friends:string[])=>{
        friends.forEach(friend=>{
            console.log(`Hi ${friend}`)
        })
    }

    greetFriends("Abul","kabul","babul")
}