{

    // Type Assertion
    const KgtoGm = (value: number| string):number|string|undefined =>{
        if(typeof value === 'number'){
            return value*1000;
        }
        else if (typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return `Converted value is: ${convertedValue}`;
        }
    }

    const result = KgtoGm(40) as number;
    const result2 = KgtoGm('70') as string;
    console.log(result)
    console.log(result2)


    type CustomError = {
        message: string,
    }

    try{

    }catch(err){
        console.log((err as CustomError).message)
    }
}