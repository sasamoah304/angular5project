import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServreComponent } from './servre.component';

describe('ServreComponent', () => {
  let component: ServreComponent;
  let fixture: ComponentFixture<ServreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
