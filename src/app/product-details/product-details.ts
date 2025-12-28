import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../Services/product-service';
import { Watch } from '../models/watch';
import { CardService } from '../Services/card-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {


  private productId! : number;
  public product!: Watch;
  public relatedItems!: Watch[];

  constructor(private aRoute : ActivatedRoute, public productService : ProductService, public cardServ: CardService) {}

  ngOnInit(): void {

    this.aRoute.params.subscribe(params => {
      this.productId = parseInt(params['id']);
      this.productService.GetProductById(this.productId).subscribe(
        res => {
          this.product = res;
          
          this.productService.GetRelatedItems(this.productId).subscribe(
            res => {
              this.relatedItems = res;
            },
            err => {
              console.log(err)
            }
          );
        },
        err => {
          console.log(err);
        }
      );
      
      scrollTo(0,0);
    });
    
  }

  changeImg(path : string, Img : HTMLImageElement){
    Img.src = path;
  }

  small_cercle_effect(){
    let cercle = document.getElementById('small-cercle');
    if(cercle){
      cercle.style.width = "1.4rem";
      cercle.style.height = "1.6rem";
      setTimeout(() => {
          cercle.style.width = "1.2rem";
          cercle.style.height = "1.4rem";
      }, 400);
      
    }
  }


}
