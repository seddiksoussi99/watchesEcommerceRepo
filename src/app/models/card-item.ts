export class CardItem {
    prodId: number;
    prodName: string;
    color: string;
    quantity: number;
    price: number;

    constructor(id: number, name: string, color: string, qty: number, price: number){
        this.prodId = id;
        this.prodName = name;
        this.color  = color;
        this.quantity = qty;
        this.price = price;
    }

}
