import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: PGHomeComponent;
  let fixture: ComponentFixture<PGHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
