import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBuyComponent } from './button-get.component';

describe('ButtonBuyComponent', () => {
  let component: ButtonBuyComponent;
  let fixture: ComponentFixture<ButtonBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
