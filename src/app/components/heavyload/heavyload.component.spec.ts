import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyloadComponent } from './heavyload.component';

describe('HeavyloadComponent', () => {
  let component: HeavyloadComponent;
  let fixture: ComponentFixture<HeavyloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
