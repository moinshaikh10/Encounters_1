// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import {
//   NgbAlertModule,
//   NgbDatepickerModule,
//   NgbModal,
//   NgbModule,
//   NgbNavConfig,
//   NgbDateStruct,
//   NgbDateParserFormatter,
//   NgbCalendar,
// } from '@ng-bootstrap/ng-bootstrap';
// import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
// import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';

// @Component({
//   selector: 'app-date-time-picker',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     NgbModule,
//     NgbDatepickerModule,
//     NgbAlertModule,
//   ],
//   providers: [
//     { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
//   ],
//   templateUrl: './date-time-picker.component.html',
//   styleUrls: ['./date-time-picker.component.scss'],
// })
// export class DateTimePickerComponent {
//   // @Input() selectedDate: NgbDate | null = null;
//   // @Input() selectedTime: NgbTimeStruct = { hour: 0, minute: 0, second: 0 };

//   // @Output() dateTimeChange = new EventEmitter<Date>();

//   // updateDateTime() {
//   //   if (this.selectedDate) {
//   //     const jsDate = new Date(
//   //       this.selectedDate.year,
//   //       this.selectedDate.month - 1, // JavaScript months start from 0
//   //       this.selectedDate.day,
//   //       this.selectedTime.hour,
//   //       this.selectedTime.minute,
//   //       this.selectedTime.second
//   //     );
//   //     this.dateTimeChange.emit(jsDate);
//   //   }
//   // }

//   @Input() model: NgbDateStruct | null = null;
//   @Input() placeholder = 'mm-dd-yyyy';
//   @Input() disabled = false;
//   today = inject(NgbCalendar).getToday();

//   @Output() modelChange = new EventEmitter<NgbDateStruct>();

//   // onDateChange(date: NgbDateStruct) {
//   //   this.model = date;
//   //   this.modelChange.emit(date);
//   // }

//   // timepicker
//   @Input() time: { hour: number; minute: number } = { hour: 13, minute: 0 };
//   @Input() meridian: boolean = true;

//   @Output() timeChange = new EventEmitter<{ hour: number; minute: number }>();
//   @Output() meridianChange = new EventEmitter<boolean>();

//   onDateChange(date: NgbDateStruct) {
//     this.model = date;
//     this.updateDateTime(); // <-- call this here
//   }

//   onTimeChange(newTime: { hour: number; minute: number }) {
//     this.time = newTime;
//     this.updateDateTime(); // <-- and here
//   }

//   toggleMeridian() {
//     this.meridian = !this.meridian;
//     this.meridianChange.emit(this.meridian);
//   }

//   @Input() dateTime: Date | null = null;
//   @Output() dateTimeChange = new EventEmitter<Date>();

//   ngOnChanges() {
//     if (this.dateTime) {
//       this.model = {
//         year: this.dateTime.getFullYear(),
//         month: this.dateTime.getMonth() + 1,
//         day: this.dateTime.getDate(),
//       };
//       this.time = {
//         hour: this.dateTime.getHours(),
//         minute: this.dateTime.getMinutes(),
//       };
//     }
//   }

//   updateDateTime() {
//     if (this.model && this.time) {
//       const newDate = new Date(
//         this.model.year,
//         this.model.month - 1,
//         this.model.day,
//         this.time.hour,
//         this.time.minute
//       );
//       this.dateTime = newDate;
//       this.dateTimeChange.emit(this.dateTime);
//     }
//   }

//   formatDateTime(date?: Date | null): string {
//     if (!date) return '';
//     const options: Intl.DateTimeFormatOptions = {
//       month: '2-digit',
//       day: '2-digit',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: this.meridian,
//     };
//     return new Intl.DateTimeFormat('en-US', options).format(date);
//   }

//   onSave(datePicker: any) {
//     if (this.model) {
//       const finalDate = new Date(
//         this.model.year,
//         this.model.month - 1,
//         this.model.day,
//         this.time?.hour ?? 0,
//         this.time?.minute ?? 0
//       );
//       this.dateTimeChange.emit(finalDate);
//       datePicker.close();
//     }
//   }

//   get displayValue(): string {
//     if (!this.model) return '';
//     const { year, month, day } = this.model;
//     const hours = this.time?.hour ?? 0;
//     const minutes = this.time?.minute ?? 0;

//     const date = new Date(year, month - 1, day, hours, minutes);
//     return this.datePipe.transform(date, 'MM-dd-yyyy hh:mm a') || '';
//   }

// }

// new

import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbDatepickerModule,
  NgbDateStruct,
  NgbTimepickerModule,
  NgbCalendar,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
  ],
  providers: [
    DatePipe,
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent {
  @Input() model: NgbDateStruct | null = null;
  @Input() time: { hour: number; minute: number } = { hour: 13, minute: 0 };
  @Input() meridian: boolean = true;
  @Input() placeholder = 'MM-DD-YYYY --:-- --';
  @Input() disabled = false;

  @Output() dateTimeChange = new EventEmitter<Date>();
  @Output() modelChange = new EventEmitter<NgbDateStruct>();
  @Output() timeChange = new EventEmitter<{ hour: number; minute: number }>();
  @Output() meridianChange = new EventEmitter<boolean>();

  today = inject(NgbCalendar).getToday();

  constructor(public datePipe: DatePipe) {}

  get displayValue(): string {
    if (!this.model) return '';
    const { year, month, day } = this.model;
    const hours = this.time?.hour ?? 0;
    const minutes = this.time?.minute ?? 0;
    const date = new Date(year, month - 1, day, hours, minutes);
    return this.datePipe.transform(date, 'MM-dd-yyyy hh:mm a') || '';
  }

  onSave(datePicker: any) {
    if (this.model) {
      const finalDate = new Date(
        this.model.year,
        this.model.month - 1,
        this.model.day,
        this.time?.hour ?? 0,
        this.time?.minute ?? 0
      );
      this.dateTimeChange.emit(finalDate);
      datePicker.close();
    }
  }

  onTimeChange(newTime: { hour: number; minute: number }) {
    this.time = newTime;
    this.timeChange.emit(this.time);
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
    this.meridianChange.emit(this.meridian);
  }

  setToday() {
    this.model = this.today;
    this.modelChange.emit(this.model);
  }
}
