import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyBulmaComponent } from './easy-bulma.component';

describe('EasyBulmaComponent', () => {
  let component: EasyBulmaComponent;
  let fixture: ComponentFixture<EasyBulmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyBulmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyBulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
