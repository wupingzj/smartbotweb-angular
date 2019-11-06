import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseComponent } from './response.component';
import { Routes, RouterModule } from '@angular/router';

describe('ResponseComponent', () => {
  let component: ResponseComponent;
  let fixture: ComponentFixture<ResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterModule.forRoot([])
      ],
      declarations: [ ResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
