import { PersonService } from './person.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  // private personService: PersonService;
  // @Input() personList: string[];

  // using services
  personList: string[];

  constructor(private prsService: PersonService) {
    // this.personService = prsService;
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
  }
}
