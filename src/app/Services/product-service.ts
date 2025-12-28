import { HttpClient } from '@angular/common/http';
import { Injectable, QueryList } from '@angular/core';
import { Watch } from '../models/watch';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  apiUrl = "http://localhost:5067/api";

  constructor(private http : HttpClient, private router : Router){}

  public GetProductById(id : number) {
    return this.http.get<Watch>(this.apiUrl + "/Watches/" + id);
  }

  public GetCategories() {
    return this.http.get<Category[]>(this.apiUrl + '/Categories');
  }

  public GetRelatedItems(id: number) {
    return this.http.get<Watch[]>(this.apiUrl + '/Watches/relateditems/'+ id);
  }

  

  public filterItemsByCategoryId(categoryId : number) {
    let params = {
      categoryId : 0
    }
    if(categoryId != 0){
      params.categoryId = categoryId
    }
    
    return this.http.get<Watch[]>(this.apiUrl + '/Watches', {params : params});
  }

  public filterItemsByModel(searchPattern : string) {
    let params = {
      searchPattern : ''
    }
    if(searchPattern != ''){
      params.searchPattern = searchPattern
    }
    
    return this.http.get<Watch[]>(this.apiUrl + '/Watches', {params : params});
  }

  public toDetails(id : number){
    this.router.navigate(['/prods/'+id]);
  }

  public GetWatches() {
    return this.http.get<Watch[]>(this.apiUrl + '/Watches');
  }
}
