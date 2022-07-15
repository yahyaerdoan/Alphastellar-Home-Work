import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBodyComponent } from './second-body.component';

describe('SecondBodyComponent', () => {
  let component: SecondBodyComponent;
  let fixture: ComponentFixture<SecondBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
