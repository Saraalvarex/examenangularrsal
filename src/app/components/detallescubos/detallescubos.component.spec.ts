import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescubosComponent } from './detallescubos.component';

describe('DetallescubosComponent', () => {
  let component: DetallescubosComponent;
  let fixture: ComponentFixture<DetallescubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescubosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallescubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
