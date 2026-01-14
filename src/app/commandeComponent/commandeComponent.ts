import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { Customer } from '../models/customer';
import { CardItem } from '../models/card-item';
import Toast from "bootstrap/js/dist/toast"
import { CustomerService } from '../Services/customer-service';
import { Commande } from '../models/commande';
import { CommandeService } from '../Services/commande-service';
import { CardService } from '../Services/card-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Commande-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './commandeComponent.html',
  styleUrl: './commandeComponent.css'
})
export class CommandeComponent {

  validForm: boolean = true;
  customer: Customer = new Customer('', '', '', '', '');
  private customerId: number = 0;

  
  constructor(private customerServ: CustomerService, private cmdServ: CommandeService, private cardServ: CardService, private router: Router){

    let savedCustomerJson = sessionStorage.getItem('customer');
    let savedCustomerIdJson = sessionStorage.getItem('customerId');
    if(savedCustomerJson && savedCustomerIdJson){
      let savedCustomer = JSON.parse(savedCustomerJson) as Customer;
      let savedCustomerId = JSON.parse(savedCustomerIdJson) as number;
      this.customer = new Customer(savedCustomer.first_name, savedCustomer.last_name, savedCustomer.phone
        , savedCustomer.city, savedCustomer.address);
      this.customerId = savedCustomerId;
    }

  }


  sendCommande(f: NgForm){


    if(this.cardServ.itemsNb == 0) this.router.navigate(['/prods']);


    let customer = new Customer(f.value['fname'], f.value['lname'], f.value['phone'], f.value['city'], f.value['address']);
    if(!customer.isValid()) {
      this.validForm = false;
      return;
    }
   
    let commandeDetails: any[] = [];

    let cartItems = JSON.parse(sessionStorage.getItem('items') || '[]') as CardItem[];
    cartItems.forEach(i => {
      commandeDetails.push({
        'watchId' : i.prodId,
        'color' : i.color,
        'quantity' : i.quantity
      })
    });

    if(cartItems.length == 0) return;
    
    if(sessionStorage.getItem('customer') == JSON.stringify(customer)){
      
      this.post_cmd(this.customerId, commandeDetails);
    }else{
      
      sessionStorage.setItem('customer', JSON.stringify(customer));
      
      this.customerServ.addCustomer(customer).subscribe(
        res => {
          this.customerId = res.id;
          sessionStorage.setItem('customerId', this.customerId.toString());
          this.post_cmd(this.customerId, commandeDetails);
        },err => {
          console.log(err);
        }
      );
    }
  }


  private post_cmd(customerId: number, commandeDetails: any[]){
    

    let cmd = new Commande(customerId, commandeDetails);

    this.cmdServ.addCommande(cmd).subscribe(
      res => {
        sessionStorage.removeItem('items');
        sessionStorage.removeItem('itemsNb');
        this.cardServ.items = [];
        this.cardServ.itemsNb = 0;
        
        const toastLiveExample = document.getElementById('liveToast')
        const toast = new Toast(toastLiveExample || '');
        toast.show()
        this.router.navigate(['/prods']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
