import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-primary-care-screening',
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './primary-care-screening.component.html',
  styleUrl: './primary-care-screening.component.scss'
})
export class PrimaryCareScreeningComponent {
	items = ['Cholesterol Screening', 'Cancer Screening', 'Diabetes Screening', 'Depression Screening', 'Immunizations', 'Tobacco Use Cessation Counseling'];
}
