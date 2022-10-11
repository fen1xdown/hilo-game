import { Component, Input, Output, EventEmitter } from '@angular/core';
/*import { GameComponent } from '';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hilo-game';

/*  @Input() Score = 0;*/
  public finalScore = 0;
  names = ['test'];
  scores = [1];

  showGame = true;
  showGameOver = true;

  @Output() newNameEvent = new EventEmitter<string>();

  addNewPlayer(newName: string) {
    this.onScoreEvent
    this.names.push(newName);
    this.scores.push(this.finalScore);
  }

  onScoreEvent(updateScore: number) {
    this.finalScore = updateScore;
  }
}
