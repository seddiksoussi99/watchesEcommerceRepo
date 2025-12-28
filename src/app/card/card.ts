import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../Services/card-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {


  constructor(public cardSer: CardService){
  }
}
