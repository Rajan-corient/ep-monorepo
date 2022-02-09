import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchEnum } from '@ep-monorepo/measurement/data-access/search';

@Component({
  selector: 'ep-monorepo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: any;
  @Input() label!: string;
  @Input() isRequired!: boolean;
  @Input() multiselectOptions: any;
  @Input() multiselecOptionLabel: any;
  @Input() control!: FormControl;
  @Output() multiSelectEvent = new EventEmitter();

  searchEnum = SearchEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onMultiSelect(event: any) {
    this.multiSelectEvent.emit(event)
  }

}
