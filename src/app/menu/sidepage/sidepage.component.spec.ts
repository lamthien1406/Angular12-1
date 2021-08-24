import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepageComponent } from './sidepage.component';

describe('SidepageComponent', () => {
  let component: SidepageComponent;
  let fixture: ComponentFixture<SidepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
