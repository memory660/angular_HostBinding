import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropDirective } from './prop.directive';
import { TestDirective } from './test.directive';
import { Test2Directive } from './test2.directive';

@NgModule({
  declarations: [AppComponent, TestDirective, Test2Directive, PropDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
