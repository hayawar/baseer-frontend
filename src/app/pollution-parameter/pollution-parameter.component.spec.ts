import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionParameterComponent } from './pollution-parameter.component';

describe('PollutionParameterComponent', () => {
  let component: PollutionParameterComponent;
  let fixture: ComponentFixture<PollutionParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutionParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollutionParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
