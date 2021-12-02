import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { min } from 'rxjs/operators';

@Directive({
  selector: '[appProp]',
})
export class PropDirective {
  //@Input('data') data: string;
  @Output('action') action = new EventEmitter<any>();
  @HostBinding('attr.maxlength') max: number = 10;
  @HostBinding('attr.minlength') min: number = 3;

  constructor() {}

  @HostListener('keyup', ['$event.target.value'])
  onTyping(data: any) {
    console.log(data);
    if (data.length < this.min) {
      this.action.emit(`Enter atleast ${this.min} character`);
    } else if (data.length >= this.min && data.length < this.max) {
      this.action.emit('');
    } else {
      this.action.emit(`Reached max char limit of ${this.max} characters`);
    }
  }

  ngOnChanges() {
    // if (this.data.length < this.min) {
    //   this.action.emit('Enter atleast 1 character');
    // } else if (this.data.length >= this.min && this.data.length < this.max) {
    //   this.action.emit('');
    // } else {
    //   this.action.emit('Reached max char limit');
    // }
  }
}
