import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmbSearchComponent } from './mmb-search.component';

describe('MmbSearchComponent', () => {
  let component: MmbSearchComponent;
  let fixture: ComponentFixture<MmbSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmbSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
