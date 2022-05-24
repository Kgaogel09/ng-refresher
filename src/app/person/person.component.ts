import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  @Input()
  personList: string[];
  constructor() {}

  ngOnInit(): void {}
}
