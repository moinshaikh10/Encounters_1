import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!search) return value;
    const escapedSearch = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // escape special characters
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    return value.replace(regex, '<strong>$1</strong>');
  }
}
