import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
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
