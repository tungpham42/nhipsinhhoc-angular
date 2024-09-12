import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiorhythmChartComponent } from './biorhythm-chart.component';

describe('BiorhythmChartComponent', () => {
  let component: BiorhythmChartComponent;
  let fixture: ComponentFixture<BiorhythmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiorhythmChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiorhythmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
