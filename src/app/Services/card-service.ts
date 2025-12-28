import { Injectable } from '@angular/core';
import { CardItem } from '../models/card-item';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  items : CardItem[] = new Array();
  itemsNb : number = 0;

  constructor(){
    this.items = JSON.parse(sessionStorage.getItem('items') || '[]') as CardItem[];
    this.itemsNb = parseInt(sessionStorage.getItem('itemsNb') || '0');

  }

  public AddItem(id:number, name: string, color: string, qty: string, price: number){

    let item = this.items.find(i => i.prodId == id && i.color == color);
    if(item){
      item.quantity += parseInt(qty);
    }else{
      this.items.push(
        new CardItem(id, name, color, parseInt(qty), price)
      );
    }
    this.itemsNb += parseInt(qty);
    sessionStorage.setItem('items', JSON.stringify(this.items));
    sessionStorage.setItem('itemsNb', this.itemsNb.toString());
  }

  public RemoveItem(id: number, color: string){
    this.itemsNb -= this.items.find(i => i.prodId == id && i.color == color)!.quantity;
    this.items = this.items.filter(i => i.prodId != id || i.color != color);
    sessionStorage.setItem('items', JSON.stringify(this.items));
    sessionStorage.setItem('itemsNb', this.itemsNb.toString());
  }

  public GetTotal(){
    let total = 0;
    this.items.forEach(
      i => total += (i.quantity * i.price)
    );
    return total;
  }
  
}
