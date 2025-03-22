import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbModal, NgbModule, NgbNavConfig, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';
import { DatePickerComponent } from "../date-picker/date-picker.component";

@Component({
  selector: 'app-problems',
  imports: [CommonModule, FormsModule, NgbModule, DropdownWrapperComponent, NgbDatepickerModule, NgbAlertModule, DatePickerComponent],
  providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss'
})
export class ProblemsComponent {
  constructor(private modalService: NgbModal, config: NgbNavConfig, private renderer: Renderer2) {
    // customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
  }
  

  open(content: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static', // Prevent closing on backdrop click
      keyboard: false, // Prevent closing with Escape key
      animation: false    // Disable zoom-in effect
    });
  }

  activeTab = 0; // default to first tab (index 0)

  items = [
    { code: 'A0013', text: 'Cancer Screening', status: "Rule Out" },
    { code: 'A0014', text: 'Diabetes Screening', status: "Released" },
    { code: 'A001', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A002', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A003', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A004', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A005', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A006', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A007', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A008', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A009', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A0010', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A0011', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A0012', text: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
  ];

  selectedItems: boolean[] = new Array(this.items.length).fill(false);

  ProblemsListData:any[]=[];

  searchTerm:string = "";
  dateModel: NgbDateStruct | null = null;

  toggleCheckbox(index: number): void {
    this.selectedItems[index] = !this.selectedItems[index];
  }

  isAnySelected(): boolean {
    return this.selectedItems.some(item => item);
  }

  selectedProblemtType: any = null; // Second dropdown selected value
  selectedProblemStatus: any = null; // Second dropdown selected value

  problemType = [
    { id: 1, name: "Type 1" },
    { id: 2, name: "Type 2" },
    { id: 3, name: "Type 3" }
  ];

  problemStatus = [
    { id: 1, name: "Rule Out" },
    { id: 2, name: "Released" },
  ];

  handleSelectionProblemType(selected: any) {
    this.selectedProblemtType = selected;
  }

  handleSelectionProblemStatus(selected: any) {
    this.selectedProblemStatus = selected;
  }
}
