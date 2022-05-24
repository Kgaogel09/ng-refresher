import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'refresher';
  persons: string[] = ['Joe', 'Max', 'Nina'];
  onCreatePerson(name: string) {
    this.persons.push(name);
  }
}
