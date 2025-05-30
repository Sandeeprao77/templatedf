import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlrTdfComponent } from './flr-tdf.component';

describe('FlrTdfComponent', () => {
  let component: FlrTdfComponent;
  let fixture: ComponentFixture<FlrTdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlrTdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlrTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
