import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTest2]',
})
//toggling between 2 classes
export class Test2Directive {
  @HostBinding('class.span1') span1: boolean = true;
  @HostBinding('class.span2') span2: boolean = false;
  @HostBinding('style.backgroundColor') bgColor: string = 'yellow';

  constructor() {}

  @HostListener('click')
  onClick() {
    this.span1 = !this.span1;
    this.span2 = !this.span2;
  }

  @HostListener('mouseover')
  onMousection() {
    this.bgColor = 'green';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'brown';
  }
}
