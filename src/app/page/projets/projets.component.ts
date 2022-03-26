import {Component} from '@angular/core';
import {PROJETS} from "../../data/projets";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {

  projets = PROJETS

  constructor() {}
}
