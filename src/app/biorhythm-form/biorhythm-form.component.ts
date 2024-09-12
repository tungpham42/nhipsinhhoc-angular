import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-biorhythm-form',
  templateUrl: './biorhythm-form.component.html',
  styleUrls: ['./biorhythm-form.component.css'],
})
export class BiorhythmFormComponent {
  birthdate!: string;
  targetDate!: string;

  ngOnInit(): void {
    // Set targetDate to today's date
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    this.targetDate = today;
  }

  @Output() formSubmit = new EventEmitter<{
    birthdate: Date;
    targetDate: Date;
  }>();

  submitForm() {
    const birthdate = new Date(this.birthdate);
    const targetDate = new Date(this.targetDate);

    if (this.birthdate && this.targetDate) {
      this.formSubmit.emit({ birthdate, targetDate });
    } else {
      alert('Vui lòng điền cả 2 ngày');
    }
  }
}
