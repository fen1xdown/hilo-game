import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  names = ['test'];
  scores = [1];

  @Input() finalScore = 0;

  @Output() newNameEvent = new EventEmitter<string>();

  addNewPlayer(newName: string) {
    this.names.push(newName);
    this.scores.push(this.finalScore);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
