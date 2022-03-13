import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocasionComponent } from './locasion.component';

describe('LocasionComponent', () => {
  let component: LocasionComponent;
  let fixture: ComponentFixture<LocasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocasionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
