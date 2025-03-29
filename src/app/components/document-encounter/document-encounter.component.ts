import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-encounter',
  imports: [CommonModule, FormsModule, NgbModule, NgbAlertModule],
  templateUrl: './document-encounter.component.html',
  styleUrl: './document-encounter.component.scss',
})
export class DocumentEncounterComponent {
  activeTab = 0;
}
