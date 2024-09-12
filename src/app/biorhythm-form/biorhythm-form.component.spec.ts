import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiorhythmFormComponent } from './biorhythm-form.component';

describe('BiorhythmFormComponent', () => {
  let component: BiorhythmFormComponent;
  let fixture: ComponentFixture<BiorhythmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiorhythmFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiorhythmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
