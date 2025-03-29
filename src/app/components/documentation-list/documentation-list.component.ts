import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbAlertModule,
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbDateStruct,
  NgbModal,
  NgbModule,
  NgbNavChangeEvent,
  NgbNavConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { DropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { CustomDateParserFormatter } from '../../services/custom-date-parser-formatter';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';

@Component({
  selector: 'app-documentation-list',
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    DropdownWrapperComponent,
    NgbDatepickerModule,
    NgbAlertModule,
    DatePickerComponent,
    DateTimePickerComponent,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
  templateUrl: './documentation-list.component.html',
  styleUrl: './documentation-list.component.scss',
})
export class DocumentationListComponent {
  activeTab = 0;

  sectionOptions = [
    { id: 1, name: 'Section 1' },
    { id: 2, name: 'Section 2' },
    { id: 3, name: 'Section 3' },
    { id: 4, name: 'Section 4' },
    { id: 5, name: 'Section 5' },
  ];

  typeOptions = [
    { id: 1, name: 'Type 1' },
    { id: 2, name: 'Type 2' },
    { id: 3, name: 'Type 3' },
    { id: 4, name: 'Type 4' },
    { id: 5, name: 'Type 5' },
  ];

  selectedSection: any = null;
  selectedType: any = null;

  constructor(
    private modalService: NgbModal,
    config: NgbNavConfig,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    config.destroyOnHide = false;
    config.roles = false;
  }

  open(content: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static', // Prevent closing on backdrop click
      keyboard: false, // Prevent closing with Escape key
      animation: false, // Disable zoom-in effect
      windowClass: 'document-list-modal-dialog',
    });
  }

  openAddModal(content: any) {
    // this.currentEntry = this.getEmptyEntry();
    // this.isEditMode = false;
    // this.editIndex = -1;
    this.open(content);
  }

  dateStruct: NgbDateStruct | null = null;
  timeStruct = { hour: 13, minute: 0 };
  selectedDateTime: Date | null = null;

  onDateTimeSelected(date: Date) {
    this.selectedDateTime = date;
  }

  handleSectionSelection(selected: any) {
    this.selectedSection = selected;
  }

  handleTypeSelection(selected: any) {
    this.selectedType = selected;
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    this.activeTab = changeEvent.nextId;
    const modalDialog = document.querySelector('.document-list-modal-dialog');

    if (modalDialog) {
      if (changeEvent.nextId === 2) {
        this.renderer.addClass(modalDialog, 'existing-form');
      } else {
        this.renderer.removeClass(modalDialog, 'existing-form');
      }
    }
    console.log('Tab changed to:', changeEvent.nextId);
  }

  uploadedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      console.log('File selected:', this.uploadedFile);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dragDropArea = document.querySelector('.drag-drop-area');
    if (dragDropArea) {
      dragDropArea.classList.add('drag-over');
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dragDropArea = document.querySelector('.drag-drop-area');
    if (dragDropArea) {
      dragDropArea.classList.remove('drag-over');
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dragDropArea = document.querySelector('.drag-drop-area');
    if (dragDropArea) {
      dragDropArea.classList.remove('drag-over');
    }
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.uploadedFile = event.dataTransfer.files[0];
      console.log('File dropped:', this.uploadedFile);
    }
  }

  listLevel = 0; // Tracks the current level of the list (0 = main list, 1 = sublist, 2 = detailed list)
  selectedDate: any = null; // Stores the selected date object
  selectedName: any = null; // Stores the selected name object
  rightContainerItems: any[] = []; // Stores items moved to the right container

  // Example data for the lists
  dateList = [
    {
      date: '03/10/2025',
      nameList: [
        {
          name: 'Name1',
          detailedList: [
            {
              date: '05/01/2025',
              name: 'Name 1 detail 1',
              secondaryName: 'Test Name',
            },
            {
              date: '05/10/2025',
              name: 'Name 1 detail 2',
              secondaryName: 'Test User',
            },
          ],
        },
        {
          name: 'Name2',
          detailedList: [
            {
              date: '05/16/2025',
              name: 'Name 2 detail 1',
              secondaryName: 'Test Name',
            },
            {
              date: '05/10/2025',
              name: 'Name 2 detail 2',
              secondaryName: 'Test User',
            },
          ],
        },
      ],
    },
    {
      date: '03/11/2025',
      nameList: [
        {
          name: 'Name 3',
          detailedList: [
            {
              date: '05/20/2025',
              name: 'Name 3 detail 1',
              secondaryName: 'Test User',
            },
            {
              date: '05/10/2025',
              name: 'Name 3 detail 2',
              secondaryName: 'Test User',
            },
          ],
        },
        {
          name: 'Name 4',
          detailedList: [
            {
              date: '05/20/2025',
              name: 'Name 4 detail 1',
              secondaryName: 'Test User',
            },
            {
              date: '05/10/2025',
              name: 'Name 4 detail 2',
              secondaryName: 'Test User',
            },
            {
              date: '05/10/2025',
              name: 'Name 4 detail 3',
              secondaryName: 'Test User',
            },
            {
              date: '05/10/2025',
              name: 'Name 4 detail 4',
              secondaryName: 'Test User',
            },
          ],
        },
      ],
    },
  ];

  // Handles navigation between lists
  navigateTo(level: number, selectedItem: any = null) {
    if (level === 1) {
      // Navigating to Name List
      this.listLevel = level;
      if (selectedItem) {
        this.selectedDate = selectedItem; // Store the selected date object
      }
    } else if (level === 2) {
      // Navigating to Detailed List
      this.listLevel = level;
      if (selectedItem) {
        this.selectedName = selectedItem; // Store the selected name object
      }
    } else if (level === 0) {
      // Navigating back to Date List
      this.listLevel = level;
      this.selectedDate = null; // Reset selected date
      this.selectedName = null; // Reset selected name
    } else if (level === 1 && this.listLevel === 2) {
      // Navigating back to Name List from Detailed List
      this.listLevel = level;
      // Retain the selectedDate, do not reset it
    }
  }

  // Moves an item to the right container
  moveToRightContainer(item: any) {
    console.log('Before moving to right container:', {
      originalList: this.selectedName.detailedList,
      rightContainerItems: this.rightContainerItems,
    });

    // Store the original list reference
    item.originalList = this.selectedName.detailedList;

    // Add the item to the right container
    this.rightContainerItems.push(item);

    // Remove the item from the original list
    this.selectedName.detailedList = this.selectedName.detailedList.filter(
      (i: any) => i !== item
    );

    console.log('After moving to right container:', {
      originalList: this.selectedName.detailedList,
      rightContainerItems: this.rightContainerItems,
    });

    // Trigger change detection
    this.cdr.detectChanges();
  }

  moveToLeftContainer(item: any) {
    console.log('Before moving to left container:', {
      originalList: item.originalList,
      rightContainerItems: this.rightContainerItems,
    });

    if (item.originalList) {
      // Check if the item already exists in its original list
      const alreadyExists = item.originalList.some(
        (i: any) => i.date === item.date && i.name === item.name
      );
      if (!alreadyExists) {
        item.originalList.push(item);
        console.log('Item added back to its original list:', item.originalList);
      } else {
        console.warn('Item already exists in the original list:', item);
      }
    } else {
      console.error('Original list not found for item:', item);
    }

    // Remove the item from the right container
    this.rightContainerItems = this.rightContainerItems.filter(
      (i: any) => i !== item
    );

    console.log('After moving to left container:', {
      originalList: item.originalList,
      rightContainerItems: this.rightContainerItems,
    });

    // Trigger change detection
    this.cdr.detectChanges();
  }
}
