import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it(`should have 'Search among GitHub repositories.' as title`, async(() => {
//     fixture = TestBed.createComponent(SearchListComponent);
//     component = fixture.debugElement.componentInstance;
//     expect(component.subHeading).toEqual('Search among GitHub repositories.');
//   }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
