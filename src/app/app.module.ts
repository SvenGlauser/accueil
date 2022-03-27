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
import { EnCoursCreationComponent } from './page/en-cours-creation/en-cours-creation.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

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
    component: EnCoursCreationComponent,
  },
  {
    path: "a-propos",
    component: EnCoursCreationComponent,
  },
  {
    path: "contact",
    component: EnCoursCreationComponent,
  },
  {
    path: "a-propos",
    component: EnCoursCreationComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
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
    ProgressBarComponent,
    EnCoursCreationComponent,
    PageNotFoundComponent
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
