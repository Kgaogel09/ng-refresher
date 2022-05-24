import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-input',
  templateUrl: 'person-input.component.html',
  styleUrls: ['person-input.component.scss'],
})
export class PersonInputComponent implements OnInit {
  // @Output() createPerson = new EventEmitter<string>();
  enteredName: string = '';

  onCreate() {
    // this.createPerson.emit(this.enteredName);
    this.prsService.addPerson(this.enteredName);
    // this.enteredName = '';
    console.log(`created a person: ${this.enteredName}`);
  }
  constructor(private prsService: PersonService) {}

  ngOnInit(): void {}
}
