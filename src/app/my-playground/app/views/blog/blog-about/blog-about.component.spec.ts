import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGBlogAboutComponent } from './blog-about.component';

describe('PGBlogAboutComponent', () => {
  let component: PGBlogAboutComponent;
  let fixture: ComponentFixture<PGBlogAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGBlogAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGBlogAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
