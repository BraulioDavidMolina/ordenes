import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewordenComponent } from './vieworden.component';

describe('ViewordenComponent', () => {
  let component: ViewordenComponent;
  let fixture: ComponentFixture<ViewordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewordenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
