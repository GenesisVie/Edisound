import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketComponent } from './jacket.component';

describe('JacketComponent', () => {
  let component: JacketComponent;
  let fixture: ComponentFixture<JacketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
