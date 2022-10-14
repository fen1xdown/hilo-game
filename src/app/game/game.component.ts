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
  session: any;

  @Output() updateScoreEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.getNewNum();
    this.getNewNum();
    this.saveData();
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

  saveData() {
    let data = {
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      name: ['adam', 'brian', 'cameron', 'david', 'eric', 'frank', 'greg', 'harold', 'ian', 'jack'],
      score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    };

    localStorage.setItem('session', JSON.stringify(data));
  }

  loadData() {
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }

  // create ID for new score to be saved, retrieve name and score and send them to localStorage
  // have scoreboard rank all scores by score, display accordingly

}
