import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule],
  declarations: [ AppComponent, HelloComponent, PortfolioComponent, EventComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
