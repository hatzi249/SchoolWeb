import { Teacher } from "./teacher";
import { Classs } from "./classs";
import { Cart } from "./cart";

export class DbResult {
    private _teachers: Array<Teacher> = new Array<Teacher>();

    public get teachers(): Array<Teacher> {
        return this._teachers;
    }
    public set teachers(teachers: Array<Teacher>) {
        this._teachers = teachers;
    }

    private _classes: Array<Classs> = new Array<Classs>();

    public get classes(): Array<Classs> {
        return this._classes;
    }
    public set classes(classes: Array<Classs>) {
        this._classes = classes;
    }

    private _cartCount: number = 0;

    public get cartCount(): number {
        return this._cartCount;
    }
    public set cartCount(count: number) {
        this._cartCount = count;
    }
}




/* export class DbResult2 {
    
    
}

import { Cart } from "./cart";

export class DbResult3 {
    
   
} */