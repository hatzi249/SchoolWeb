import { Teacher } from "./teacher";

export const displayTeachers = (teachers:Array<Teacher>):void => {
    const teachersElement = document.getElementById('teacher-avatars');

    if(teachersElement !== null){
        teachers.forEach((t:Teacher, idx:number)=> {
            teachersElement.innerHTML += t.html(`avatar-${idx + 1}`);
        });
    }
}

import { Classs } from "./classs";

export const displayClasses = (classes:Array<Classs>):void => {
    const classesElement = document.getElementById('class-details')!;

    /* if(classesElement !== null){ */
        classes.forEach((c:Classs, idx:number)=> {
            classesElement.innerHTML += c.html(`events-img${idx + 1}`);
        });
    }


import { Cart } from "./cart";

export const displayCarts = (cartCount:number = 0):void => {
    const cartElement = document.getElementById('cart')!; 
    cartElement.innerHTML = `${cartCount}`;
}




