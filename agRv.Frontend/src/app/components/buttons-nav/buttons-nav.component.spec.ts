import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsNavComponent } from './buttons-nav.component';

describe('ButtonsNavComponent', () => {
  let component: ButtonsNavComponent;
  let fixture: ComponentFixture<ButtonsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
