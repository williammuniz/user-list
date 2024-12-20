import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatailsComponent } from './user-datails.component';

describe('UserDatailsComponent', () => {
  let component: UserDatailsComponent;
  let fixture: ComponentFixture<UserDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
