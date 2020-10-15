import { Teacher } from "./teacher";
import { Classs } from "./classs";
import { Cart } from "./cart";
import { DbResult } from "./dbResult";

import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getData = async () => {
    const teachers = await get('teachers');
    const classes = await get('classes');
    const carts = await get('carts/1');
    

    let result = new DbResult();

    result.cartCount = carts.length;
    
    teachers.forEach((t: any) => result.teachers.push(new Teacher(t)));
    classes.forEach((c: any) => result.classes.push(new Classs(c)));
    

    return result;   
};


const get = async (uri:string) => {
    try {
        const result = axios.get(`${baseUrl}${uri}`);
        const { data } = await result;
        return data;
    }
    catch (err) {
        console.log(err);
    }
};

/* export const getDota = async () => {
    
    

    let result2 = new DbResult2();

    
       
    return result2;   
};
export const getDeta = async () => {
    
    

    let result3 = new DbResult3();

    
       
    return result3;   
    console.log(result3);
}; */