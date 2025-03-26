import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbModal, NgbModule, NgbNavConfig, NgbDateStruct, NgbDateParserFormatter, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { ProblemsService } from '../../services/problems.service';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-problems',
  imports: [CommonModule, FormsModule, NgbModule, DropdownWrapperComponent, NgbDatepickerModule, NgbAlertModule, DatePickerComponent, NgbTypeaheadModule],
  providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss'
})
export class ProblemsComponent {
  constructor(private problemService: ProblemsService, private modalService: NgbModal, config: NgbNavConfig, private renderer: Renderer2) {
    // customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
  }
  
  activeTab = 0; // default to first tab (index 0)
  ProblemsListData:any[]=[];
  searchTerm:string = "";
  dateModel: NgbDateStruct | null = null;
  selectedProblemtType: any = null; // Second dropdown selected value
  selectedProblemStatus: any = null; // Second dropdown selected value
  
  model: any = '';
  isSearching = false;

  @ViewChild('typeaheadInput') typeaheadInput!: ElementRef;

  states = [
    { id: 1, code: 'AL', name: 'Alabama fwefewf wefwefwef wefewfew fewfewf ewfewfwef wefewfewf ewfewfewf ewfewfew fewfewf ewfewfew fewfewf ewfwefewf ewfewfew few' },
    { id: 2, code: 'AK', name: 'Alaska' },
    { id: 3, code: 'AZ', name: 'Arizona' },
    { id: 4, code: 'AR', name: 'Arkansas' },
    { id: 5, code: 'CA', name: 'California' }
  ];

  items = [
    {code: "B16.9", name: "Acute Hepatitis B Without Delta Agent and Without Hepatic Coma (A)", status: "Rule Out"},
    {code: "E08.1", name: "Diabetes Mellitus Due to Underlying Condition With Ketoacidosis (C)", status: "Released"},
    {code: "E89", name: "Post Procedural Endocrine and Metabolic Complications and Disorders (C)", status: "Released"},
    {code: "E89", name: "Post Procedural Endocrine and Metabolic Complications and Disorders (C)", status: "Released"},
    { code: 'A0013', name: 'Cancer Screening', status: "Rule Out" },
    { code: 'A0014', name: 'Diabetes Screening', status: "Released" },
    { code: 'A001', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A002', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A003', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A004', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A005', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A006', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A007', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A008', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A009', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A0010', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Released"},
    { code: 'A0011', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
    { code: 'A0012', name: 'Post Procedural Endocrine and Metabolic Complications and Disorders, Not Elsewhere Classified (C)', status: "Rule Out"},
  ];
  selectedItems: boolean[] =[];

  ngOnInit(){
    this.ProblemsListData = [
      {code: "B16.9", name: "Acute Hepatitis B Without Delta Agent and Without Hepatic Coma (A)", status: "Rule Out"},
      {code: "E08.1", name: "Diabetes Mellitus Due to Underlying Condition With Ketoacidosis (C)", status: "Released"},
      {code: "E89", name: "Post Procedural Endocrine and Metabolic Complications and Disorders (C)", status: "Released"},
      {code: "E89", name: "Post Procedural Endocrine and Metabolic Complications and Disorders (C)", status: "Released"},
    ];
    // call this function after the table data
    this.syncSelectedItems();

    // pre-select problem search value
    this.model = this.states.find(state => state.code === 'AK');
  }

  open(content: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static', // Prevent closing on backdrop click
      keyboard: false, // Prevent closing with Escape key
      animation: false    // Disable zoom-in effect
    });
    this.syncSelectedItems();

    // select tab 0 on modal open
    this.activeTab = 0;
  }

  toggleCheckbox(index: number): void {
    this.selectedItems[index] = !this.selectedItems[index];
  }

  isAnySelected(): boolean {
    return this.selectedItems.some(item => item);
  }

  addSelectedItems(): void {
    if (this.activeTab === 0){
    this.items.forEach((item, index) => {
      if (this.selectedItems[index]) {
        // Check if it's not already added
        const exists = this.ProblemsListData.some(p => p.code === item.code);
        if (!exists) {
          this.ProblemsListData.push({ ...item });
        }
      }
    });
  
    // Optional: Reset selections
    this.selectedItems = new Array(this.items.length).fill(false);
  }
  }

  syncSelectedItems(): void {
    this.selectedItems = this.items.map(item =>
      this.ProblemsListData.some(problem => problem.code === item.code)
    );
  }

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

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.isSearching = !!term;
        return term.length < 2
          ? []
          : this.states
              .filter(state => state.name.toLowerCase().includes(term.toLowerCase()))
              .slice(0, 10);
      })
    );

  inputFormatter = (x: any) => x?.name || '';
  resultFormatter = (x: any) => x.name;

  resetSearch() {
    this.model = '';
    this.isSearching = false;
    setTimeout(() => this.typeaheadInput.nativeElement.focus(), 0);
  }
}
