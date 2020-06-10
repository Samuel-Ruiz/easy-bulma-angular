import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGToDoContainerComponent } from './playground.component';

describe('PlaygroundComponent', () => {
  let component: PGToDoContainerComponent;
  let fixture: ComponentFixture<PGToDoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGToDoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGToDoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
