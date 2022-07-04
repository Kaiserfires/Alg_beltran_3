
import { Component, OnInit } from '@angular/core';
import { GameStateService } from './game-state/game-state.service';

@Component({
  selector: 'app-simon-game',
  templateUrl: './simon-game.component.html',
  styleUrls: ['./simon-game.component.css']
})
export class SimonGameComponent implements OnInit {

  constructor(private game:GameStateService) { }

  ngOnInit(): void {
    console.log(this.game.generateSimon());
  }
  playerGues(e:string){
    //this.game.playerGuess(e);
    console.log(e);

  }

}
