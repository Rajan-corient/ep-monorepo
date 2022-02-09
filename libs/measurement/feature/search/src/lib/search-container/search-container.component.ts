import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, MmbSearchService, State } from '@ep-monorepo/measurement/data-access/search';
import { cloneDeep } from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ep-monorepo-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit, OnDestroy {

  statesSubscription!:Subscription;
  citiesSubscription!:Subscription;

  cities: City[] = [];
  copyOfCities: City[] = [];
  states: State[] = [];

  measurementSearchForm!: FormGroup;

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


  getMultiselect (data:any) {
    const {event, controlName} = data;
    console.log(event, controlName)
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
      this.cities = this.mmbSearch.createCitiesList(this.copyOfCities, selectedStates);
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

  ngOnDestroy(): void {
    this.statesSubscription.unsubscribe();
    this.citiesSubscription.unsubscribe();
  }

}
