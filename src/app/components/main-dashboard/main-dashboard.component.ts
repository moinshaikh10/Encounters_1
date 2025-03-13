import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
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

@Component({
  selector: 'app-main-dashboard',
  imports: [CommonModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {
  patientDetails = ['Name', 'id', 'dob gender', 'allergey','precuation','classification','site','admission','type'];
  patientValues: string[] = [];
  patientDetailsGrouped: {label: string, value: string}[][]=[];

   constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(){
    this.fetchPatientDetails();
  }

  fetchPatientDetails(){
    const apiResponse = ['john doe', 1, 'male', 'no known allergy','','','Oz','11/14/2025','state'];
    // this.patientValues = apiResponse;

  }

  sections = [
    // Section 1
    [
      { label: 'Name', value: 'Peter Fernandez' },
      { label: 'Patient ID', value: 'CCS_121318' },
      { label: 'DOB, Gender', value: '10/12/1998, Male' }
    ],
    // Section 2
    [
      { label: 'Allergies', value: 'No Known Allergies' },
      { label: 'Precautions', value: '' },
      { label: 'Classifications', value: '' }
    ],
    // Section 3
    [
      { label: 'Site', value: 'OZ Correctionial Facility' },
      { label: 'Addmission', value: '11/14/2024' },
      { label: 'Type', value: 'State' }
    ]
  ];


  selectedOption: number = 1;  // Default option

  // Options that can be selected
  options = [
    {id: 1, name: "Vital Signs"},
    {id: 2, name: "Problems"},
    {id: 3, name: "Allergies"},
    {id: 4, name: "Primary Care Screening"},
    {id: 5, name: "Document Encounter"},
    {id: 6, name: "Encounter"},
    {id: 7, name: "Order List"},
    {id: 8, name: "Documentation List"},
    {id: 9, name: "Billing Code"},
    {id: 10, name: "Appointments"},
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
    10: AppointmentsComponent
  };

  get selectedComponent() {
    return this.componentMap[this.selectedOption];
  }
}
