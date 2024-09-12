import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  birthdate!: Date;
  targetDate!: Date;

  onFormSubmit(event: { birthdate: Date; targetDate: Date }) {
    this.birthdate = event.birthdate;
    this.targetDate = event.targetDate;
  }
}
