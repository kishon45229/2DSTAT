import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSupermarketComponent } from './login-supermarket.component';

describe('LoginSupermarketComponent', () => {
  let component: LoginSupermarketComponent;
  let fixture: ComponentFixture<LoginSupermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSupermarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
