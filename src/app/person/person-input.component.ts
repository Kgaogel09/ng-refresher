import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: 'person-input.component.html',
  styleUrls: ['person-input.component.scss'],
})
export class PersonInputComponent implements OnInit {
  constructor() {}

  onCreate(personName: string) {
    alert(`created a person: ${personName}`);
  }
  ngOnInit(): void {}
}
