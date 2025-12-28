import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(){
    this.activateLink();
  }

  activateLink(){
    
    let pl = document.getElementById('prodsLink');
    let cl = document.getElementById('contactLink');
    let al = document.getElementById('aboutLink');
    console.log(pl);
    console.log(cl);
    console.log(al);
    
    if(pl?.classList.contains('active')){
      pl?.classList.remove('active');
    }
    if(cl?.classList.contains('active')){
      cl?.classList.remove('active');
    }
    if(!(al?.classList.contains('active'))){
      al?.classList.add('active');
    }
  }
}
