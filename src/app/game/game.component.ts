import { EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public gameScore = 0;
  InitNum = Math.floor(Math.random() * 10) + 1;
  NewNum = 0;

  @Output() updateScoreEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.getNewNum();
  }

  public ScoreEvent(score: number) {
    this.gameScore = score;
    this.updateScoreEvent.emit(this.gameScore);
    console.log("Score Event has fired")
  }

  getNewNum() {
    this.InitNum = this.NewNum;
    this.NewNum = Math.floor(Math.random() * 10) + 1;
    console.log(this.NewNum);
  }

  Hi() {
    console.log("player guesses new number is higher than old number");
    if (this.InitNum < this.NewNum) {
      console.log("Player is correct");
      this.gameScore++;
      this.getNewNum();
    }
    else {
      console.log("Player is incorrect");
      this.ScoreEvent(this.gameScore);
      console.log("current score is ", this.gameScore);
      this.gameScore = 0;
    }
  }

  Lo() {
    console.log("player guesses new number is lower than old number");
    if (this.InitNum > this.NewNum) {
      console.log("Player is correct");
      this.gameScore++;
      this.getNewNum();
    }
    else {
      console.log("Player is incorrect");
      this.ScoreEvent(this.gameScore);
      console.log("current score is ", this.gameScore);
      this.gameScore = 0;
    }
  }

}
