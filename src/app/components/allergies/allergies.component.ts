import { Component, Renderer2 } from '@angular/core';
import { NgbAlertModule, NgbDateParserFormatter, NgbDatepickerModule, NgbDateStruct, NgbModal, NgbModule, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AllergyEntry {
  dateModel: NgbDateStruct | null;
  selectedType: any;
  selectedAllergy: any;
  selectedReaction: any;
  allergyStatusRadioBtn: string;
  activeTab: number;
  medicalNote: string;
  systemNote: string;
  medicalDisplayMessage:string;
  systemDisplayMessage:string
}


@Component({
  selector: 'app-allergies',
    imports: [CommonModule, FormsModule, NgbModule, DropdownWrapperComponent, NgbDatepickerModule, NgbAlertModule, DatePickerComponent],
  providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  templateUrl: './allergies.component.html',
  styleUrl: './allergies.component.scss'
})
export class AllergiesComponent {
  allergyListData: AllergyEntry[] = [];
  currentEntry: AllergyEntry = this.getEmptyEntry();
  isEditMode = false;
  editIndex = -1;

  getEmptyEntry(): AllergyEntry {
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
  

  allergyType = [
    { id: 1, name: "Allergy Group" },
    { id: 2, name: "Type 1" },
    { id: 3, name: "Type 2" },
    { id: 4, name: "Type 3" }
  ];

  allergy = [
    { id: 1, name: "No Known Allergies"},
    { id: 2, name: "Rule Out" },
    { id: 3, name: "Released" },
  ];

  reaction = [
    {id: 1, name: "Anxiety"},
    {id: 2, name: "Anxiety2"},
  ]

  constructor(private modalService: NgbModal, config: NgbNavConfig, private renderer: Renderer2) {
    config.destroyOnHide = false;
		config.roles = false;
  }

  ngOnInit(){
  }

  open(content: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static', // Prevent closing on backdrop click
      keyboard: false, // Prevent closing with Escape key
      animation: false    // Disable zoom-in effect
    });
  }

  openAddModal(content: any) {
    this.currentEntry = this.getEmptyEntry();
    this.isEditMode = false;
    this.editIndex = -1;
    this.open(content);
  }

  openViewModal(content: any, index: number) {
    this.currentEntry = { ...this.allergyListData[index] };
    this.isEditMode = true;
    this.editIndex = index;
    this.open(content);
  }

  handleSelectionallergyType(selected: any) {
    this.currentEntry.selectedType = selected;
  }

  handleSelectionAllergy(selected: any) {
    this.currentEntry.selectedAllergy = selected;
  }

  handleSelectionReaction(selected: any) {
    this.currentEntry.selectedReaction = selected;
  }

  sendMessage() {
    if (this.currentEntry.activeTab === 0) {
    this.currentEntry.medicalDisplayMessage = this.currentEntry.medicalNote;
    this.currentEntry.medicalNote = "";
    }
    else {
      this.currentEntry.systemDisplayMessage = this.currentEntry.systemNote;
      this.currentEntry.systemNote = "";
    }
  }

  get isFormInvalid(): boolean {
    return (
      !this.currentEntry.dateModel ||
      !this.currentEntry.selectedType ||
      !this.currentEntry.selectedAllergy ||
      !this.currentEntry.selectedReaction
    );
  }
  

  saveAllergyEntry() {
    if (this.isEditMode && this.editIndex >= 0) {
      this.allergyListData[this.editIndex] = { ...this.currentEntry };
    } else {
      this.allergyListData.push({ ...this.currentEntry });
    }
    this.modalService.dismissAll(); // or close modal however you prefer
  }
}
