import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ProductService } from '../Services/product-service';
import { Category } from '../models/category';
import { WatchesList } from '../models/watches-list';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {
  watchesList! : WatchesList;
  categories! : Category[];
  isLoading : boolean = true;
  

  constructor(private productService : ProductService, private router : Router){}

  ngOnInit(): void {

    this.activateLink();

    this.productService.GetCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.log(err);
      }
    );
    this.productService.GetWatches().subscribe(
      res => {
        this.watchesList = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = true;
        console.log(err);
      }
    )
  }

  public filterByCategory(selectFilter : HTMLSelectElement){
    this.productService.filterItemsByCategoryId(parseInt(selectFilter.value)).subscribe(
      res => {
        this.watchesList = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = true;
        alert(err);
      }
    );
    this.router.navigate(['/prods']);
  }

  public filterByModel(searchInput : HTMLInputElement){
    
    let pattern = searchInput.value;
    this.isLoading = true;
    this.productService.filterItemsByModel(pattern).subscribe(
      res => {
        this.watchesList = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = true;
        alert(err);
      }
    );
    this.router.navigate(['/prods']);
  }
  
  activateLink(){
    let pl = document.getElementById('prodsLink');
    let cl = document.getElementById('contactLink');
    let al = document.getElementById('aboutLink');
    if(!(pl?.classList.contains('active'))){
      pl?.classList.add('active');
    }
    if(cl?.classList.contains('active')){
      cl?.classList.remove('active');
    }
    if(al?.classList.contains('active')){
      al?.classList.remove('active');
    }
  }

  public paginatePage(url : string = "", pageNb : number = 1){
    this.isLoading = true;
    if(url == ""){
      url = '/Watches?pageNb='+pageNb;
    }
    this.productService.GetWatchesPaginated(url).subscribe(
        res => {
          this.watchesList = res;
          this.isLoading = false;
          
        },
        err => {
          this.isLoading = true;
          console.log(err);
        }
      );
    
  }

}
