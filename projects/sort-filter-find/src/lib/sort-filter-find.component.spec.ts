import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFilterFindComponent } from './sort-filter-find.component';

describe('SortFilterFindComponent', () => {
  let component: SortFilterFindComponent;
  let fixture: ComponentFixture<SortFilterFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortFilterFindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortFilterFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
