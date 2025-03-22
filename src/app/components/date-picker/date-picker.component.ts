import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbModal, NgbModule, NgbNavConfig, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';

@Component({
  selector: 'app-date-picker',
    imports: [CommonModule, FormsModule, NgbModule, NgbDatepickerModule, NgbAlertModule ],
    providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {

  @Input() model: NgbDateStruct | null = null;
  @Input() placeholder = 'mm-dd-yyyy';
  @Input() disabled = false;

  @Output() modelChange = new EventEmitter<NgbDateStruct>();

  onDateChange(date: NgbDateStruct) {
    this.model = date;
    this.modelChange.emit(date);
  }
}
