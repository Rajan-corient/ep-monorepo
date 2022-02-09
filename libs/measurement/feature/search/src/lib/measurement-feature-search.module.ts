import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmbSearchComponent } from './search-container/mmb-search/mmb-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiInputControlModule } from '@ep-monorepo/shared/ui/input-control';
import { SharedUiSearchControlModule } from '@ep-monorepo/shared/ui/search-control';
import { MeasurementDataAccessSearchModule, MmbSearchService } from '@ep-monorepo/measurement/data-access/search';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchResultComponent } from './search-container/search-result/search-result.component';


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
    MmbSearchComponent,
    SearchContainerComponent,
    SearchResultComponent
  ],
  exports: [
    MmbSearchComponent,
    SearchContainerComponent,
    SearchResultComponent
  ],
  providers: [
    MmbSearchService
  ]
})
export class MeasurementFeatureSearchModule {}
