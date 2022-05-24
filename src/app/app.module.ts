import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/person-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PersonComponent, PersonInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
