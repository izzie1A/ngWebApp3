import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TretrisComponent } from './tretris.component';

describe('TretrisComponent', () => {
  let component: TretrisComponent;
  let fixture: ComponentFixture<TretrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TretrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TretrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
