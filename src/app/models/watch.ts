import { Category } from "./category";

export class Watch {

    public id!: number;
    public name: string;
    public description: string;
    public price: number;
    public category: Category;
    public images: string[];
    public colors: string[];

    constructor(name:string, desc:string, price:number, category:Category, 
        images: string[], colors: string[]){
        this.name = name;
        this.description = desc;
        this.price = price;
        this.category = category;
        this.images = images;
        this.colors = colors;
    }
}
