import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentActionComponent } from './intent-action.component';

describe('IntentActionComponent', () => {
  let component: IntentActionComponent;
  let fixture: ComponentFixture<IntentActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
