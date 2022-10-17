import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hilo-game';

  public finalScore = 0;

  id = 0;
  name = '';
  score = 0;
  session: any;
  myList: any;


  public showGame = true;
  public showGameOver = true;

  ngOnInit(): any {
    this.loadData();
    this.showGameOver = false;
    return this.showGameOver;
  }

  onScoreEvent(updateScore: number) {
    this.finalScore = updateScore;
    this.showGameOver = true;
    this.showGame = false;
    return this.showGameOver;
    return this.showGame;
  }

  saveData(newName: string) {
    if (this.finalScore > this.session.score) {
      let data = {
        id: new Date().getTime(),
        name: newName,
        score: this.finalScore
      };
      localStorage.setItem("session", JSON.stringify(data));
      this.loadData();
    }
    else {
      null
    }
    this.showGameOver = false;
    this.showGame = true;
    return this.showGameOver;
    return this.showGame;
  }

  loadData() {
    let data: any = localStorage.getItem("session") || [];
    this.session = JSON.parse(data);
  }

}
