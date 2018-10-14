import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from '../app-routing';

import { AppComponent } from './app.component';
import { HeroDetails } from '../hero/heroDetails/herodetails.component';
import { HeroesList } from '../hero/heroesList/heroeslist.component';
import { Dashboard } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetails,
    HeroesList,
    Dashboard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
