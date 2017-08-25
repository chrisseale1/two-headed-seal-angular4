import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueColored]'
})
export class BlueColoredDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'blue';
   }

   @HostListener('click', ['$event'])
    elementClicked(elem) {
      console.log('Something just got clicked', elem);
    }

}
