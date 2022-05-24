import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: string[] = ['Max', 'Manuel', 'john'];
  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }
}
