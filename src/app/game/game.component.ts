import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { last } from 'rxjs';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation: boolean = false;
  currentCard: string = '';
  game: Game = new Game();;

  constructor() { }

  /*In Angular, the lifecycle hook for initialization is ngOnInit and it is used to perform initialization logic when the component is created.*/
  ngOnInit(): void {
    this.newGame();
  }
 
  newGame() {
    console.log(this.game);
  }
  /*@if is a template syntax:
It is meant to be used in Angular templates (HTML) to conditionally render elements.
It is not valid TypeScript or JavaScript syntax.
TypeScript functions use standard JavaScript/TypeScript logic:
Inside a function, you must use standard JavaScript/TypeScript constructs like if, else, switch, etc.*/
  pickCard() {
    if (!this.pickCardAnimation) {
        const lastCard = this.game.stack.pop();
      if (lastCard != undefined) {
        this.currentCard = lastCard;
      } 
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    }
  }
}
