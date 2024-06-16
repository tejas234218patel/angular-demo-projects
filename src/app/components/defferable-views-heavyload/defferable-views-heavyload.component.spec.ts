import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferableViewsHeavyloadComponent } from './defferable-views-heavyload.component';

describe('DefferableViewsHeavyloadComponent', () => {
  let component: DefferableViewsHeavyloadComponent;
  let fixture: ComponentFixture<DefferableViewsHeavyloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferableViewsHeavyloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferableViewsHeavyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
