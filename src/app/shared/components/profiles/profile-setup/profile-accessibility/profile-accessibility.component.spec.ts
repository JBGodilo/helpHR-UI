import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccessibilityComponent } from './profile-accessibility.component';

describe('ProfileAccessibilityComponent', () => {
  let component: ProfileAccessibilityComponent;
  let fixture: ComponentFixture<ProfileAccessibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAccessibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
