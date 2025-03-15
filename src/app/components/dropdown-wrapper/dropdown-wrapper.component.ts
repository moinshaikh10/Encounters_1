import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-wrapper',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dropdown-wrapper.component.html',
  styleUrl: './dropdown-wrapper.component.scss'
})
export class DropdownWrapperComponent {
  @Input() options: any[] = []; // Options array (e.g., [{ id: 1, name: 'Vital Signs' }])
  @Input() selectedValue: any = null; // Pre-selected value
  @Input() placeholder: string = 'Select an option'; // Default placeholder
  @Input() dropdownLabel: string = "dropdown";
  @Input() isRequired: boolean = false;
  @Input() customClass: string = "";

  @Output() selectionChange = new EventEmitter<any>(); // Emit selected value

  selectOption(option: any) {
    this.selectedValue = option;
    this.selectionChange.emit(option); // Emit the selected value
  }
}
