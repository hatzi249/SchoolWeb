export class Classs {
    id:number;
    title:string;
    price:number;
    teacherId:number;
    minAge:number;
    maxAge:number;
    description:string;
    time:number;
    date:number;
    teacher:string;

    constructor(classs:any){
        this.id = classs.Id;
        this.title = classs.Title;
        this.price = classs.Price;
        this.teacherId = classs.TeacherId;
        this.minAge = classs.MinAge;
        this.maxAge = classs.MaxAge;
        this.description = classs.Description;
        this.time = classs.Time;
        this.date = classs.Date;
        this.teacher = classs.Teacher;
        
    }

    public html(events:string){
        return `
        <div class="class-card d-flex flex-column flex-wrap justify-content-center">
            <img src="images/events/${events}.jpg" class="w-100">
            <div class="d-flex flex-column text-white bg-info p-4">
                <div class="display-8 heading-font mb-3">${this.title}</div>
                <div><i class="far fa-calendar-alt mr-2 mb-2"></i>${this.minAge} to ${this.maxAge} years</div>
                <div><i class="far fa-clock mr-2 mb-4"></i>${this.time}</div>
                <div class="mb-4">${this.description}</div>
                <button class="btn btn-lg btn-warning text-uppercase text-white my-1">Learn More</button>
            </div>
            <div class="date d-flex flex-column justify-content-center align-items-center px-2 bg-info text-white font-weight-bold display-9">
                <div>${this.date}</div>
            </div>
        `;
    }
}