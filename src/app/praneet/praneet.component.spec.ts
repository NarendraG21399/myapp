import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraneetComponent } from './praneet.component';

describe('PraneetComponent', () => {
  let component: PraneetComponent;
  let fixture: ComponentFixture<PraneetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraneetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraneetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
