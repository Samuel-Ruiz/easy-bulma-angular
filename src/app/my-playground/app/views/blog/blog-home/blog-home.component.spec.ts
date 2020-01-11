import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGBlogHomeComponent } from './blog-home.component';

describe('PGBlogHomeComponent', () => {
  let component: PGBlogHomeComponent;
  let fixture: ComponentFixture<PGBlogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGBlogHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGBlogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
