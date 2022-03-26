import {Component, Input, OnInit} from '@angular/core';
import {Repository} from "../../interface/repository";

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent {

  @Input() repository: Repository = {url: "", technologie: [], imgAlt: "", description: "", img: "", name: ""};

  constructor() { }

  open(url: string) {
    window.open(url);
  }
}
