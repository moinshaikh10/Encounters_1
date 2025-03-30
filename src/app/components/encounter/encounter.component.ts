import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-encounter',
  imports: [CommonModule],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss',
})
export class EncounterComponent {
  encounters = [
    {
      addedDate: '31/03/2025 03:30 PM',
      noteType: 'Medical',
      qhp: 'Bonnie Bernard',
    },
    { addedDate: '30/03/2025 02:15 PM', noteType: 'Surgical', qhp: 'John Doe' },
    {
      addedDate: '29/03/2025 01:00 PM',
      noteType: 'Dental',
      qhp: 'Alice Smith',
    },
    {
      addedDate: '28/03/2025 12:45 PM',
      noteType: 'Medical',
      qhp: 'Chris Johnson',
    },
    {
      addedDate: '27/03/2025 11:30 AM',
      noteType: 'Surgical',
      qhp: 'Emma Brown',
    },
  ];

  sortColumn: string = '';
  sortDirection: boolean = true; // true for ascending, false for descending

  sortTable(column: keyof (typeof this.encounters)[0]): void {
    if (this.sortColumn === column) {
      this.sortDirection = !this.sortDirection; // Toggle sort direction
    } else {
      this.sortColumn = column;
      this.sortDirection = true; // Default to ascending
    }

    this.encounters.sort((a, b) => {
      const valueA =
        typeof a[column] === 'string'
          ? (a[column] as string).toLowerCase()
          : a[column];
      const valueB =
        typeof b[column] === 'string'
          ? (b[column] as string).toLowerCase()
          : b[column];

      if (valueA < valueB) {
        return this.sortDirection ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection ? 1 : -1;
      }
      return 0;
    });
  }
}
