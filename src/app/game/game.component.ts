import { EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public gameScore = 0;
  InitNum = Math.floor(Math.random() * 10) + 1;
  NewNum = 0;

  @Output() updateScoreEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.getNewNum();
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
      this.getNewNum();
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
      this.getNewNum();
    }
  }



  // create ID for new score to be saved, retrieve name and score and send them to localStorage
  // have scoreboard rank all scores by score, display accordingly

}
