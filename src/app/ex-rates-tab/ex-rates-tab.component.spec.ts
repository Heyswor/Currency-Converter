import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExRatesTabComponent } from './ex-rates-tab.component';

describe('ExRatesTabComponent', () => {
  let component: ExRatesTabComponent;
  let fixture: ComponentFixture<ExRatesTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExRatesTabComponent]
    });
    fixture = TestBed.createComponent(ExRatesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
