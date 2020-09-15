import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorySearchComponent } from './repository-search.component';

describe('ReportComponent', () => {
  let component: RepositorySearchComponent;
  let fixture: ComponentFixture<RepositorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have 'Search among GitHub repositories.' as title`, async(() => {
    fixture = TestBed.createComponent(RepositorySearchComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.subHeading).toEqual('Search among GitHub repositories.');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
