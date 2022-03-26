import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCoursCreationComponent } from './en-cours-creation.component';

describe('EnCoursCreationComponent', () => {
  let component: EnCoursCreationComponent;
  let fixture: ComponentFixture<EnCoursCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnCoursCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCoursCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
