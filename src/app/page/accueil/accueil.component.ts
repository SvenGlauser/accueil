import {Component, OnInit} from '@angular/core';
import {PROJETS} from "../../data/projets";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  projets = PROJETS

  constructor() { }

  ngOnInit(): void {
    this.projets = this.projets.slice(0, this.projets.length / 2 <= 5 ? this.projets.length / 2 + 1 : 5);
  }

}
