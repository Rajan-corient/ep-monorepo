import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmbSearchComponent } from './mmb-search/mmb-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiInputControlModule } from '@ep-monorepo/shared/ui/input-control';
import { SharedUiSearchControlModule } from '@ep-monorepo/shared/ui/search-control';
import { MeasurementDataAccessSearchModule, MmbSearchService } from '@ep-monorepo/measurement/data-access/search';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiInputControlModule,
    SharedUiSearchControlModule,
    MeasurementDataAccessSearchModule,
    CardModule,
    DividerModule
  ],
  declarations: [
    MmbSearchComponent
  ],
  exports: [
    MmbSearchComponent
  ],
  providers: [
    MmbSearchService
  ]
})
export class MeasurementFeatureSearchModule {}
