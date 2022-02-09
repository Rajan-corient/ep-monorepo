import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  cities: City[] = [];
  copyOfCities: City[] = [];
  states: State[] = [];
  
  dateValue: Date | undefined

  public measurementSearchForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private mmbSearch: MmbSearchService) {
  }

  ngOnInit() {

    this.measurementSearchForm = this.fb.group({
      assetGroup: [{value: [], disabled: false}, Validators.required],
      meterOwner: [{value: [], disabled: false}],
      meterLocation: [{value: [], disabled: false}],
      product: [{value: [], disabled: false}],
      flowComputer: [{value: [], disabled: false}],
      meterName: [{value: [], disabled: false}],
      fromDate: [{value: '', disabled: false}],
      fromTo: [{value: '', disabled: false}],
      ticketStatus: [{value: [], disabled: false}],
      ticketType: [{value: [], disabled: false}],
      ticketNumber: [{value: [], disabled: false}],
      zeroVolumeTicket: [{value: false, disabled: false}]
    })

    // this.measurementSearchForm.valueChanges.subscribe(formValue =>{
    //   console.log(formValue)
    // })

    this.getStates();
    this.getCities();

  }

  handleSearch (event: any) {
    console.log(this.measurementSearchForm.value)
  }

  handleClear (event:any) {
    this.measurementSearchForm.reset();
  }

  handleMultiSelect (event:any, controlName:string) {
    // console.log(event)
    switch (controlName) {
      case 'assetGroup':
        this.onStateSelection(event);
        break;
      case 'meterOwner':
        
        break;
      case 'meterLocation':
        
        break;
      case 'product':
        this.onCitySelection(event)
        break;
      case 'flowComputer':
        
        break;
      case 'meterName':
        
        break;

      case 'ticketStatus':
      
        break;

      case 'ticketType':
      
        break;

      case 'ticketNumber':
    
        break;
    
      default:
        break;
    }
  }

  createCitiesList (selectedStates:State[]) {
    if (selectedStates.length) {
      this.cities = this.copyOfCities.filter((cityObj:City) => { 
        return selectedStates.some((stateObj) => {
          return cityObj.stateId == stateObj.id;
        })
      })
    } else {
      this.cities = cloneDeep(this.copyOfCities);
      this.measurementSearchForm.get('product')?.setValue([]);
    }
  }

  getCities () {
    this.mmbSearch.getCities().subscribe(data => {
      this.cities = data;
      this.copyOfCities = cloneDeep(data);
      console.log('city', data);
    })
  }

  getStates () {
    this.mmbSearch.getStates().subscribe(data => {
      this.states = data;
      console.log('state', data);
    }) 
  }

  onStateSelection(stateData: any) {
    this.createCitiesList(stateData.value);
  }

  onCitySelection(cityData: any) {
    console.log(cityData)
  }

}
