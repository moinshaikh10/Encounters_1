import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { VitalSignComponent } from '../vital-sign/vital-sign.component';
import { ProblemsComponent } from '../problems/problems.component';
import { AllergiesComponent } from '../allergies/allergies.component';
import { PrimaryCareScreeningComponent } from '../primary-care-screening/primary-care-screening.component';
import { DocumentEncounterComponent } from '../document-encounter/document-encounter.component';
import { EncounterComponent } from '../encounter/encounter.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { DocumentationListComponent } from '../documentation-list/documentation-list.component';
import { BillingCodeComponent } from '../billing-code/billing-code.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { MedicationsComponent } from '../medications/medications.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbModal,
  NgbModule,
  NgbNavConfig,
  NgbDateStruct,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main-dashboard',
  imports: [
    CommonModule,
    NgbDropdownModule,
    MedicationsComponent,
    DropdownWrapperComponent,
    DateTimePickerComponent,
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {
  patientDetails = [
    'Name',
    'id',
    'dob gender',
    'allergey',
    'precuation',
    'classification',
    'site',
    'admission',
    'type',
  ];
  patientValues: string[] = [];
  patientDetailsGrouped: { label: string; value: string }[][] = [];
  dateModel: NgbDateStruct | null = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.fetchPatientDetails();
  }

  fetchPatientDetails() {
    const apiResponse = [
      'john doe',
      1,
      'male',
      'no known allergy',
      '',
      '',
      'Oz',
      '11/14/2025',
      'state',
    ];
    // this.patientValues = apiResponse;
  }

  sections = [
    // Section 1
    [
      { label: 'Name', value: 'Peter Fernandez' },
      { label: 'Patient ID', value: 'CCS_121318' },
      { label: 'DOB, Gender', value: '10/12/1998, Male' },
    ],
    // Section 2
    [
      { label: 'Allergies', value: 'No Known Allergies' },
      { label: 'Precautions', value: '' },
      { label: 'Classifications', value: '' },
    ],
    // Section 3
    [
      { label: 'Site', value: 'OZ Correctionial Facility' },
      { label: 'Addmission', value: '11/14/2024' },
      { label: 'Type', value: 'State' },
    ],
  ];

  selectedOption: number = 1; // Default option

  // Options that can be selected
  options = [
    { id: 1, name: 'Vital Signs' },
    { id: 2, name: 'Problems' },
    { id: 3, name: 'Allergies' },
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
    { id: 7, name: 'Order List' },
    { id: 8, name: 'Documentation List' },
    { id: 9, name: 'Billing Code' },
    { id: 10, name: 'Appointments' },
  ];

  // Mapping option IDs to components
  componentMap: { [key: number]: any } = {
    1: VitalSignComponent,
    2: ProblemsComponent,
    3: AllergiesComponent,
    4: PrimaryCareScreeningComponent,
    5: DocumentEncounterComponent,
    6: EncounterComponent,
    7: OrderListComponent,
    8: DocumentationListComponent,
    9: BillingCodeComponent,
    10: AppointmentsComponent,
  };

  get selectedComponent() {
    return this.componentMap[this.selectedOption];
  }

  selectedService: any = null; // Default empty
  serviceOptions = [
    { id: 1, name: 'Vital Signs' },
    { id: 2, name: 'Problems' },
    { id: 3, name: 'Allergies' },
  ];

  selectService(option: any) {
    this.selectedService = option; // Update selected value
  }

  selectedValue: any = null; // Default selection

  ddOptions = [
    { id: 1, name: 'Vital Signs' },
    { id: 2, name: 'Problems' }, // Pre-selected value
    { id: 3, name: 'Allergies' },
  ];

  selectdd(option: any) {
    this.selectedValue = option; // Update selected value
  }

  selectedItem1: any = null; // First dropdown selected value
  selectedItem2: any = null; // Second dropdown selected value
  selectedItem3: any = null; // Second dropdown selected value
  selectedItem4: any = null; // Second dropdown selected value
  selectedItem5: any = null; // Second dropdown selected value
  selectedItem6: any = null; // Second dropdown selected value
  selectedItem7: any = null; // Second dropdown selected value
  selectedItem8: any = null; // Second dropdown selected value

  dropdownOptions1 = [
    { id: 1, name: 'Vital Signs' },
    { id: 2, name: 'Problems' },
    { id: 3, name: 'Allergies' },
  ];

  dropdownOptions2 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  dropdownOptions3 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  dropdownOptions4 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  dropdownOptions5 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  dropdownOptions6 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  dropdownOptions7 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  dropdownOptions8 = [
    { id: 4, name: 'Primary Care Screening' },
    { id: 5, name: 'Document Encounter' },
    { id: 6, name: 'Encounter' },
  ];

  handleSelectionChange1(selected: any) {
    this.selectedItem1 = selected;
    console.log('Dropdown 1 Selected:', selected);
  }

  handleSelectionChange2(selected: any) {
    this.selectedItem2 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  handleSelectionChange3(selected: any) {
    this.selectedItem3 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  handleSelectionChange4(selected: any) {
    this.selectedItem4 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  handleSelectionChange5(selected: any) {
    this.selectedItem5 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  handleSelectionChange6(selected: any) {
    this.selectedItem6 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  handleSelectionChange7(selected: any) {
    this.selectedItem7 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  handleSelectionChange8(selected: any) {
    this.selectedItem8 = selected;
    console.log('Dropdown 2 Selected:', selected);
  }

  selectedTime = { hour: 13, minute: 30 };

  onTimeChanged(newTime: any) {
    console.log('Time 1 changed:', newTime);
  }

  // selectedDateTime: Date | null = null;

  onDateTimeChange(newDateTime: Date) {
    this.selectedDateTime = newDateTime;
    console.log('Selected DateTime:', this.selectedDateTime);
  }

  dateStruct: NgbDateStruct | null = null;
  timeStruct = { hour: 13, minute: 0 };
  selectedDateTime: Date | null = null;

  onDateTimeSelected(date: Date) {
    this.selectedDateTime = date;
  }
}
