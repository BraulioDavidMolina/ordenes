import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeordenComponent } from './makeorden.component';

describe('MakeordenComponent', () => {
  let component: MakeordenComponent;
  let fixture: ComponentFixture<MakeordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeordenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
