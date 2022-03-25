import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  MENU = [
    {
      "name": "Accueil",
      "url": "/accueil",
    },
    {
      "name": "Projet",
      "url": "/projet",
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
  }

  constructor(public router: Router) { }
}
