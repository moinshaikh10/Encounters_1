import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-time-picker',
  imports: [CommonModule, FormsModule, NgbTimepicker],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
})
export class TimePickerComponent {
  @Input() time: { hour: number; minute: number } = { hour: 13, minute: 0 };
  @Input() meridian: boolean = true;

  @Output() timeChange = new EventEmitter<{ hour: number; minute: number }>();
  @Output() meridianChange = new EventEmitter<boolean>();

  onTimeChange(newTime: { hour: number; minute: number }) {
    this.time = newTime;
    this.timeChange.emit(this.time);
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
    this.meridianChange.emit(this.meridian);
  }
}
