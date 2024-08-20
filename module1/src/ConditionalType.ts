{
    type a1 = number;
    type a2 = string;

    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : a2 extends null ? true : false;

    type Sheikh = {
        bike:string;
        car:string;
        ship:string;
    } 

    type CheckVehicle<T> = T extends keyof Sheikh?true:false;

    type HasPlane = CheckVehicle<"plane">
}