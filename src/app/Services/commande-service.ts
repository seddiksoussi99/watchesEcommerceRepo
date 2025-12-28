import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  apiUrl = "http://localhost:5067/api";
  constructor(private http: HttpClient){

  }

  addCommande(cmd: Commande){
    return this.http.post(this.apiUrl + '/Commandes', cmd);
  }
  
}
