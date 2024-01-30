import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLoginComponent } from './desktop-login.component';

describe('DesktopLoginComponent', () => {
  let component: DesktopLoginComponent;
  let fixture: ComponentFixture<DesktopLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
