import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroDetails } from '../hero/heroDetails/herodetails.component';
import { HeroesList } from '../hero/heroesList/heroeslist.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetails,
    HeroesList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
