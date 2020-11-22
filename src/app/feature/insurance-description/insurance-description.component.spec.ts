import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDescriptionComponent } from './insurance-description.component';

describe('InsuranceDescriptionComponent', () => {
  let component: InsuranceDescriptionComponent;
  let fixture: ComponentFixture<InsuranceDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
