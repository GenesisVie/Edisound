import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongItemAddComponent } from './song-item-add.component';

describe('SongItemAddComponent', () => {
  let component: SongItemAddComponent;
  let fixture: ComponentFixture<SongItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
