import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Card } from '../card/card';
import { CardService } from '../Services/card-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Card, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isDark: boolean = true;
  private htmlElmnt: HTMLHtmlElement = document.getElementsByTagName('html')[0];


  constructor(public CardServ: CardService){

    let isDarkV = sessionStorage.getItem('isDark');
    if(isDarkV){
      if(isDarkV == 'true') {
        this.isDark = true;
        this.htmlElmnt.setAttribute('data-bs-theme', 'dark');
      }
      else if(isDarkV == 'false') {
        this.isDark = false;
        this.htmlElmnt.setAttribute('data-bs-theme', 'light');
      }
    }
    
  }

  toggleMode(){
    let att = this.htmlElmnt.getAttribute('data-bs-theme');
    if(att){
      if(att == 'dark') {
        this.htmlElmnt.setAttribute('data-bs-theme', 'light');
        this.isDark = false;
        sessionStorage.setItem('isDark', 'false');
      }
      else if(att == 'light') {
        this.htmlElmnt.setAttribute('data-bs-theme', 'dark');
        this.isDark = true;
        sessionStorage.setItem('isDark', 'true');
      }
    }
  }

}
