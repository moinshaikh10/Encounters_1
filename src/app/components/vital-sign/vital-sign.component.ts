import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vital-sign',
  imports: [CommonModule],
  templateUrl: './vital-sign.component.html',
  styleUrl: './vital-sign.component.scss',
})
export class VitalSignComponent {
  isEditMode: boolean = false;
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static', // Prevent closing on backdrop click
      keyboard: false, // Prevent closing with Escape key
      animation: false, // Disable zoom-in effect
    });
  }
}
