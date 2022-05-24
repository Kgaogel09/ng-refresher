import { PersonInputComponent } from './person/person-input.component';
import { PersonComponent } from './person/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonComponent },
  { path: 'person-input', component: PersonInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
