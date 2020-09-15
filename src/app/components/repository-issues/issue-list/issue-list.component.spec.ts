import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListComponent } from './issue-list.component';

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
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
