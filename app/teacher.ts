export class Teacher {
    id:number;
    firstName:string;
    lastName:string;
    prefixId:number;
    prefix:string;
   

    constructor(teacher:any){
        this.id = teacher.Id;
        this.firstName = teacher.FirstName;
        this.lastName = teacher.LastName;
        this.prefixId = teacher.PrefixId;
        this.prefix = teacher.Prefix;
    }

public html(avatar:string){
        return `
            <div class=" m-3 d-flex flex-column mx-auto text-center display-9 text-white heading-font">
                <img src="images/avatars/${avatar}.jpg" class="rounded-circle avatar-size mx-auto mb-1">
                <div>${this.prefix} ${this.lastName}</div>
            </div>
        `;
    }
}


