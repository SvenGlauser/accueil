import {Component, Input, OnInit} from '@angular/core';
import {Repository} from "../../interface/repository";

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent implements OnInit {

  @Input() repository: Repository = {technologie: [], imgAlt: "", description: "", img: "", name: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
