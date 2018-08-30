import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAccoountComponent } from './top-accoount.component';

describe('TopAccoountComponent', () => {
  let component: TopAccoountComponent;
  let fixture: ComponentFixture<TopAccoountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAccoountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAccoountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
