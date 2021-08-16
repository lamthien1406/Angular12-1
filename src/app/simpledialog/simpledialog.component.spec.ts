import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpledialogComponent } from './simpledialog.component';

describe('SimpledialogComponent', () => {
  let component: SimpledialogComponent;
  let fixture: ComponentFixture<SimpledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpledialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
