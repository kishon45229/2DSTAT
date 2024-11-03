import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManufacturerComponent } from './login-manufacturer.component';

describe('LoginManufacturerComponent', () => {
  let component: LoginManufacturerComponent;
  let fixture: ComponentFixture<LoginManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginManufacturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
