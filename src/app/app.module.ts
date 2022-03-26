import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccueilComponent } from './page/accueil/accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { GithubRepositoryComponent } from './component/github-repository/github-repository.component';
import { ProjetsComponent } from './page/projets/projets.component';
import { CompetencesComponent } from './page/competences/competences.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "accueil",
    pathMatch: "full",
  },
  {
    path: "accueil",
    component: AccueilComponent,
  },
  {
    path: "projets",
    component: ProjetsComponent,
  },
  {
    path: "competences",
    component: CompetencesComponent,
  },
  {
    path: "formation",
    component: AccueilComponent,
  },
  {
    path: "a-propos",
    component: AccueilComponent,
  },
  {
    path: "contact",
    component: AccueilComponent,
  },
  {
    path: "a-propos",
    component: AccueilComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    MenuComponent,
    GithubRepositoryComponent,
    ProjetsComponent,
    CompetencesComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
