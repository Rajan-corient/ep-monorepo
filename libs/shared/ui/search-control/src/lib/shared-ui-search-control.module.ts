import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchControlComponent } from './search-control/search-control.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    SearchControlComponent
  ],
  exports: [
    SearchControlComponent
  ],
})
export class SharedUiSearchControlModule {}
