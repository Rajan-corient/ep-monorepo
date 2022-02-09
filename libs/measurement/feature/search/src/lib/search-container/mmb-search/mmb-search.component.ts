import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { City, MeasurementEnum, MmbSearchService, SearchEnum, State } from '@ep-monorepo/measurement/data-access/search';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'ep-monorepo-mmb-search',
  templateUrl: './mmb-search.component.html',
  styleUrls: ['./mmb-search.component.scss']
})

export class MmbSearchComponent implements OnInit {

  searchEnum = SearchEnum;
  measurementEnum = MeasurementEnum;

  @Input() cities: City[] = [];
  @Input() copyOfCities: City[] = [];
  @Input() states: State[] = [];
  @Input() measurementSearchForm!: FormGroup;
  
  @Output() emitMultiselect = new EventEmitter();

  constructor(
    private mmbSearch: MmbSearchService) {
  }

  ngOnInit() {
  }

  handleSearch (event: any) {
    console.log(this.measurementSearchForm.value)
  }

  handleClear (event:any) {
    this.measurementSearchForm.reset();
  }

  handleMultiSelect (event:any, controlName:string) {
    const selectedObj = {event, controlName}
    this.emitMultiselect.emit(selectedObj)
  }

}
