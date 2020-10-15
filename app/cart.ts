export class Cart {
    classId:number;
    customerId:number;
    price:number;
    count:number;
    title:number;
    description:string;

    constructor(cart:any){
        this.classId = cart.ClassId;
        this.customerId = cart.CustomerId;
        this.price = cart.Price;
        this.count = cart.Count;
        this.title = cart.Title;
        this.description = cart.Description;
        
    }

    public html(){
        return `
        <span class="badge btn-badge bg-success rounded-100 text-white border border-white position-absolute"></span>
        `;
    }
}