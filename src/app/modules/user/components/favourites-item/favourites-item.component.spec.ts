import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesItemComponent } from './favourites-item.component';

describe('FavouritesItemComponent', () => {
  let component: FavouritesItemComponent;
  let fixture: ComponentFixture<FavouritesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
