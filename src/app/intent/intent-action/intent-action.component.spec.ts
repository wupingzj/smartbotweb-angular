import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentActionComponent } from './intent-action.component';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('IntentActionComponent', () => {
  let component: IntentActionComponent;
  let fixture: ComponentFixture<IntentActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
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
