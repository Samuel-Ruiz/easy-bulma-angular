import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGBlogEventsComponent } from './blog-events.component';

describe('PGBlogEventsComponent', () => {
  let component: PGBlogEventsComponent;
  let fixture: ComponentFixture<PGBlogEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGBlogEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGBlogEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
