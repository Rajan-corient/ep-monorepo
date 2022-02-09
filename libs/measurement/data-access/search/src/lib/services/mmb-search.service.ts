import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { delay, Observable, of, retry } from 'rxjs';
import { City, State } from '../..';

@Injectable({
  providedIn: 'root'
})
export class MmbSearchService {

  stateList:State[] = [
    { 
      id: 1,
      name: 'Maharashtra'
    },
    { 
      id: 2,
      name: 'Gujarat'
    },
    { 
      id: 3,
      name: 'Himachal Pradesh'
    },
    { 
      id: 4,
      name: 'Uttar Pradesh'
    },
    { 
      id: 5,
      name: 'Madhya Pradesh'
    }
  ]

  citiList:City[] = [
    {
      id: 1,
      name: "Mumbai",
      stateId: 1
    },
    {
      id: 2,
      name: "Pune",
      stateId: 1
    },
    {
      id: 3,
      name: "Nagpur",
      stateId: 1
    },
    {
      id: 4,
      name: "Nashik",
      stateId: 1
    },
    {
      id: 5,
      name: "Thane",
      stateId: 1
    },
    {
      id: 6,
      name: "Surat",
      stateId: 2
    },
    {
      id: 7,
      name: "Rajkot",
      stateId: 2
    },
    {
      id: 8,
      name: "Vadodara",
      stateId: 2
    },
    {
      id: 9,
      name: "Palanpur",
      stateId: 2
    },
    {
      id: 10,
      name: "Valsad",
      stateId: 2
    },
    {
      id: 11,
      name: "Shimla",
      stateId: 3
    },
    {
      id: 12,
      name: "Solan",
      stateId: 3
    },
    {
      id: 13,
      name: "Palampur",
      stateId: 3
    },
    {
      id: 14,
      name: "Kullu",
      stateId: 3
    },
    {
      id: 15,
      name: "Manali",
      stateId: 3
    },
    {
      id: 16,
      name: "Varanasi",
      stateId: 4
    },
    {
      id: 17,
      name: "Lucknow",
      stateId: 4
    },
    {
      id: 18,
      name: "Jaunpur",
      stateId: 4
    },
    {
      id: 19,
      name: "Kanpur",
      stateId: 4
    },
    {
      id: 20,
      name: "Agra",
      stateId: 4
    },
    {
      id: 21,
      name: "Bhopal",
      stateId: 5
    },
    {
      id: 22,
      name: "Indore",
      stateId: 5
    },
    {
      id: 23,
      name: "Gwalior",
      stateId: 5
    },
    {
      id: 24,
      name: "Jabalpur",
      stateId: 5
    },
    {
      id: 25,
      name: "Ujjain",
      stateId: 5
    },

  ];

  constructor() { }

  getStates (): Observable<State[]> {
    return of(this.stateList).pipe(
      delay(1000),
      retry(3)
    )
  }

  getCities (): Observable<City[]> {
    return of(this.citiList).pipe(
      delay(1000),
      retry(3)
    )
  }

  createCitiesList (cities:City[], states:State[]) {
    return cities.filter((cityObj:City) => { 
      return states.some((stateObj) => {
        return cityObj.stateId == stateObj.id;
      })
    })
  }

}
