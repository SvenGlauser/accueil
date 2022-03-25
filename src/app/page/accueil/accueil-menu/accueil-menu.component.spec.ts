import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilMenuComponent } from './accueil-menu.component';

describe('AccueilMenuComponent', () => {
  let component: AccueilMenuComponent;
  let fixture: ComponentFixture<AccueilMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
