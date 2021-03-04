import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EventComponent } from './event/event.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PortfolioComponent, EventComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
