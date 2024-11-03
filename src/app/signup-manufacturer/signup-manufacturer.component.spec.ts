import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupManufacturerComponent } from './signup-manufacturer.component';

describe('SignupManufacturerComponent', () => {
  let component: SignupManufacturerComponent;
  let fixture: ComponentFixture<SignupManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupManufacturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
