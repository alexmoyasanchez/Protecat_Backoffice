import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObjectComponent } from './newobject.component';

describe('NewObjectComponent', () => {
  let component: NewObjectComponent;
  let fixture: ComponentFixture<NewObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
