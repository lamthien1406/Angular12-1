import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmenuComponent } from './loadmenu.component';

describe('LoadmenuComponent', () => {
  let component: LoadmenuComponent;
  let fixture: ComponentFixture<LoadmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
