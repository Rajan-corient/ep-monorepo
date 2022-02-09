import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ep-monorepo-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<any>();
  @Output() clearEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  handleSearch (event: any) {
    this.searchEvent.emit(event)
  }

  handleClear (event:any) {
    this.clearEvent.emit(event) 
  }

}


