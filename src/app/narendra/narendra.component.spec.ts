import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarendraComponent } from './narendra.component';

describe('NarendraComponent', () => {
  let component: NarendraComponent;
  let fixture: ComponentFixture<NarendraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarendraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarendraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
