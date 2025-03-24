import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  // Format from model -> display
  format(date: NgbDateStruct | null): string {
    if (!date) return '';
    const mm = date.month < 10 ? '0' + date.month : date.month;
    const dd = date.day < 10 ? '0' + date.day : date.day;
    return `${mm}-${dd}-${date.year}`;
  }

  // Parse from input -> model
  parse(value: string): NgbDateStruct | null {
    if (!value) return null;
    const parts = value.trim().split('-');
    if (parts.length !== 3) return null;

    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      return { day, month, year };
    }

    return null;
  }
}
