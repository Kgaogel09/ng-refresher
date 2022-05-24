import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  updatedPerson = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get<any>('https://swapi.dev/api/people/')
      .pipe(
        map((data) => {
          return data.results.map((character) => character.name);
        })
      )
      .subscribe((resData) => this.updatedPerson.next(resData));
  }

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
