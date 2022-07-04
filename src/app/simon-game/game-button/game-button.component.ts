import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {

  @Input()
  color!: string;
  @Output()
  guess:EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}


  onclick(){
      this.guess.emit(this.color);
  }

}
