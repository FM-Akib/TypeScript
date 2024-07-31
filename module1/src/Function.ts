{
    function add( num1:number, num2:number ):number {
        return num1 + num2;
    }
    const res=add(1,2)
    console.log(res)
    
    //Arrow function
    const add2 =(num1:number, num2:number):number =>num1 + num2;
    const res2=add2(5,6)
    console.log(res2)

    //Method
    const poorUser = {
        name:"Fahim",
        balance: 0,
        addBalance(money:number):string{
           return `My new Balance is ${this.balance += money}` 
        }
    }
    
    console.log(poorUser.addBalance(100))


}