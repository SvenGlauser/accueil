import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccueilComponent } from './page/accueil/accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { AccueilContentComponent } from './page/accueil/accueil-content/accueil-content.component';
import {RouterModule, Routes} from "@angular/router";

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
    path: "projet",
    component: AccueilComponent,
  },
  {
    path: "competences",
    component: AccueilComponent,
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
    AccueilContentComponent
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
