import { Component, Renderer2 } from '@angular/core';
import {
  NgbAlertModule,
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbDateStruct,
  NgbModal,
  NgbModule,
  NgbNavConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimePickerComponent } from '../time-picker/time-picker.component';

interface appointmentEntry {
  dateModel: NgbDateStruct | null;
  selectedType: any;
  selectedAllergy: any;
  selectedReaction: any;
  allergyStatusRadioBtn: string;
  activeTab: number;
  medicalNote: string;
  systemNote: string;
  medicalDisplayMessage: string;
  systemDisplayMessage: string;
}

@Component({
  selector: 'app-appointments',
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    DropdownWrapperComponent,
    NgbDatepickerModule,
    NgbAlertModule,
    DatePickerComponent,
    TimePickerComponent,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent {
  allergyListData: appointmentEntry[] = [];
  currentEntry: appointmentEntry = this.getEmptyEntry();
  isEditMode = false;
  editIndex = -1;
  selectedTime = { hour: 13, minute: 30 };

  meridian1 = true;
  durationOptions = [
    { id: 1, name: '15 minutes' },
    { id: 2, name: '30 minutes' },
    { id: 3, name: '45 minutes' },
    { id: 4, name: '1 Hours' },
  ];

  statusOptions = [
    { id: 1, name: 'Schedule' },
    { id: 2, name: 'Rescheduled' },
  ];

  rescheduleReasonOptions = [
    { id: 1, name: 'Escort Shortage' },
    { id: 2, name: 'Reason 1' },
    { id: 3, name: 'Reason 2' },
    { id: 4, name: 'Reason 3' },
    { id: 5, name: 'Reason 4' },
  ];

  serviceOptions = [
    { id: 1, name: 'Dental' },
    { id: 2, name: 'service 2' },
    { id: 3, name: 'service 3' },
  ];

  treatmentOptions = [
    { id: 1, name: 'Extraction' },
    { id: 2, name: 'Treatment 1' },
    { id: 3, name: 'Treatment 2' },
  ];

  specialityTypeOptions = [
    { id: 1, name: 'Tyep 1' },
    { id: 2, name: 'Type 2' },
    { id: 3, name: 'Type 3' },
    { id: 4, name: 'Type 4' },
  ];

  assignToOptions = [
    { id: 1, name: 'Medical Records' },
    { id: 2, name: 'one' },
    { id: 3, name: 'Two' },
    { id: 4, name: 'Three' },
  ];

  getEmptyEntry(): appointmentEntry {
    return {
      dateModel: null,
      selectedType: null,
      selectedAllergy: null,
      selectedReaction: null,
      allergyStatusRadioBtn: 'Active',
      activeTab: 0,
      medicalNote: '',
      systemNote: '',
      medicalDisplayMessage: '',
      systemDisplayMessage: '',
    };
  }

  constructor(
    private modalService: NgbModal,
    config: NgbNavConfig,
    private renderer: Renderer2
  ) {
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit() {}

  open(content: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static', // Prevent closing on backdrop click
      keyboard: false, // Prevent closing with Escape key
      animation: false, // Disable zoom-in effect
      windowClass: 'appointment-modal-dialog',
    });
  }

  openAddModal(content: any) {
    // this.currentEntry = this.getEmptyEntry();
    // this.isEditMode = false;
    // this.editIndex = -1;
    this.open(content);
  }

  get isFormInvalid(): boolean {
    return (
      !this.currentEntry.dateModel ||
      !this.currentEntry.selectedType ||
      !this.currentEntry.selectedAllergy ||
      !this.currentEntry.selectedReaction
    );
  }

  handleSelectionDuration(selected: any) {
    this.currentEntry.selectedType = selected;
  }
  handleSelectionStatus(selected: any) {
    this.currentEntry.selectedType = selected;
  }
  handleSelectionRescheduleReason(selected: any) {
    this.currentEntry.selectedType = selected;
  }
  handleSelectionService(selected: any) {
    this.currentEntry.selectedType = selected;
  }
  handleSelectionTreatment(selected: any) {
    this.currentEntry.selectedType = selected;
  }
  handleSelectionSpecialityType(selected: any) {
    this.currentEntry.selectedType = selected;
  }
  handleSelectionAssignTo(selected: any) {
    this.currentEntry.selectedType = selected;
  }

  saveAllergyEntry() {
    if (this.isEditMode && this.editIndex >= 0) {
      this.allergyListData[this.editIndex] = { ...this.currentEntry };
    } else {
      this.allergyListData.push({ ...this.currentEntry });
    }
    this.modalService.dismissAll(); // or close modal however you prefer
  }

  onTimeChanged(newTime: any) {
    console.log('Time 1 changed:', newTime);
  }

  sendMessage() {
    if (this.currentEntry.activeTab === 0) {
      this.currentEntry.medicalDisplayMessage = this.currentEntry.medicalNote;
      this.currentEntry.medicalNote = '';
    } else {
      this.currentEntry.systemDisplayMessage = this.currentEntry.systemNote;
      this.currentEntry.systemNote = '';
    }
  }
}
