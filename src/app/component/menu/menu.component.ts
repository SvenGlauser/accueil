import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output() clicButton = new EventEmitter();

  MENU = [
    {
      "name": "Accueil",
      "url": "/accueil",
    },
    {
      "name": "Projets",
      "url": "/projets",
    },
    {
      "name": "Compétences",
      "url": "/competences",
    },
    {
      "name": "Formation",
      "url": "/formation",
    },
    {
      "name": "A propos",
      "url": "/a-propos",
    },
    {
      "name": "Contact",
      "url": "/contact",
    },
    {
      "name": "Github",
      "url": "https://github.com/svenglauser",
    },
  ]

  open(url: string): void {
    if (url.startsWith("https://") || url.startsWith("http://"))
      open(url);
    else
      this.router.navigate([url]).then();

    this.clicButton.emit();
  }

  constructor(public router: Router) { }
}
