import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
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
