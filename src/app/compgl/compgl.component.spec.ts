import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompglComponent } from './compgl.component';

describe('CompglComponent', () => {
  let component: CompglComponent;
  let fixture: ComponentFixture<CompglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
