import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { MeasurementFeatureSearchModule } from '@ep-monorepo/measurement/feature/search';
import { SharedUiSearchControlModule } from '@ep-monorepo/shared/ui/search-control';


@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    MeasurementFeatureSearchModule,
    SharedUiSearchControlModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
