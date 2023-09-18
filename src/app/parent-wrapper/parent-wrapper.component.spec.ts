import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWrapperComponent } from './parent-wrapper.component';

describe('ParentWrapperComponent', () => {
  let component: ParentWrapperComponent;
  let fixture: ComponentFixture<ParentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
