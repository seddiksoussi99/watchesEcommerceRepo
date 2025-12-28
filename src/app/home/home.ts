import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(){
    this.activateLink();
  }

  display(e : HTMLAnchorElement){
    e.style.display = "flex";
    setInterval(() => {
      if(e.style.boxShadow == "white 0px 0px 0px 0px") e.style.boxShadow = "white 0px 0px 7px 0px ";
      else e.style.boxShadow = "white 0px 0px 0px 0px"
    }, 700, e);
  }

  activateLink(){
    let pl = document.getElementById('prodsLink');
    let cl = document.getElementById('contactLink');
    let al = document.getElementById('aboutLink');
    if(pl?.classList.contains('active')){
      pl?.classList.remove('active');
    }
    if(cl?.classList.contains('active')){
      cl?.classList.remove('active');
    }
    if(al?.classList.contains('active')){
      al?.classList.remove('active');
    }
  }
}
