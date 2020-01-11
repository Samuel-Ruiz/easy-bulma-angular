import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGBlogRecipesComponent } from './blog-recipes.component';

describe('PGBlogRecipesComponent', () => {
  let component: PGBlogRecipesComponent;
  let fixture: ComponentFixture<PGBlogRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGBlogRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGBlogRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
