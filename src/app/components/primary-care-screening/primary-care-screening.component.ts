import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-primary-care-screening',
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './primary-care-screening.component.html',
  styleUrl: './primary-care-screening.component.scss',
})
export class PrimaryCareScreeningComponent {
  // items = [
  //   { id: 'cholesterol', name: 'Cholesterol Screening' },
  //   { id: 'cancer', name: 'Cancer Screening' },
  //   { id: 'diabetes', name: 'Diabetes Screening' },
  //   { id: 'depression', name: 'Depression Screening' },
  //   { id: 'immunizations', name: 'Immunizations' },
  //   { id: 'tobacco', name: 'Tobacco Use Cessation Counseling' },
  // ];
  activeItemId: string = 'cholesterol'; // Default active item ID

  // Function to toggle the accordion state
  toggleAccordion(itemId: string): void {
    this.activeItemId = this.activeItemId === itemId ? '' : itemId;
  }

  // // Function to check if an item is collapsed
  // isCollapsed(itemId: string): boolean {
  //   return this.activeItemId !== itemId;
  // }
}
