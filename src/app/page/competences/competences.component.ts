import { Component } from '@angular/core';
import {LANGAGES_PROGRAMMATION} from "../../data/langagesProgrammation";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent {

  langagesProgrammation = LANGAGES_PROGRAMMATION

  constructor() { }
}
