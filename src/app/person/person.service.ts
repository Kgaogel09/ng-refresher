import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  updatedPerson = new Subject<string[]>();
  persons: string[] = ['Max', 'Manuel', 'john'];
  addPerson(name: string) {
    this.persons.push(name);
    this.updatedPerson.next(this.persons);
  }
  removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    this.updatedPerson.next(this.persons);
  }
}
