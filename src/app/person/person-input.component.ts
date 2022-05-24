import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: 'person-input.component.html',
  styleUrls: ['person-input.component.scss'],
})
export class PersonInputComponent {
  @Output() createPerson = new EventEmitter<string>();
  enteredName: string = '';

  onCreate() {
    this.createPerson.emit(this.enteredName);
    this.enteredName = '';
    console.log(`created a person: ${this.enteredName}`);
  }
}
