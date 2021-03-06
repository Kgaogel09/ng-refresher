import { PersonService } from './person.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit, OnDestroy {
  // private personService: PersonService;
  // @Input() personList: string[];

  // using services
  personList: string[];
  private personListSub: Subscription;
  isLoading = true;

  constructor(private prsService: PersonService) {
    // this.personService = prsService;
  }

  ngOnInit() {
    this.personListSub = this.prsService.updatedPerson.subscribe((persons) => {
      this.personList = persons;
      this.isLoading = false;
    });
    this.isLoading = true;
    this.prsService.fetchData();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
  ngOnDestroy(): void {
    this.personListSub.unsubscribe();
  }
}
