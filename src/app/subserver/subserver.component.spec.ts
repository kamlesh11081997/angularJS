import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubserverComponent } from './subserver.component';

describe('SubserverComponent', () => {
  let component: SubserverComponent;
  let fixture: ComponentFixture<SubserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
