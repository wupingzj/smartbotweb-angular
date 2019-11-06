import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtteranceComponent } from './utterance.component';
import { Routes, RouterModule } from '@angular/router';

describe('UtteranceComponent', () => {
  let component: UtteranceComponent;
  let fixture: ComponentFixture<UtteranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterModule.forRoot([])
      ],
      declarations: [ UtteranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtteranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
