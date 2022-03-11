import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eroor404Component } from './eroor404.component';

describe('Eroor404Component', () => {
  let component: Eroor404Component;
  let fixture: ComponentFixture<Eroor404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eroor404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eroor404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
