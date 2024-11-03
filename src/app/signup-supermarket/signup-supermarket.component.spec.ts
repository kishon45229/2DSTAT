import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSupermarketComponent } from './signup-supermarket.component';

describe('SignupSupermarketComponent', () => {
  let component: SignupSupermarketComponent;
  let fixture: ComponentFixture<SignupSupermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSupermarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupSupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
