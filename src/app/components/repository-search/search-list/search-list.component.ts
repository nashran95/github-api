import { Component, Input, OnInit } from '@angular/core';
import { InputHistory } from '../../../models/searchHistory';
import { Router } from '@angular/router';

import { Repository } from '../../../models/repository';
import { SearchResults } from '../../../models/searchResults';

@Component({
  selector: 'repository-search-list',
  templateUrl: './search-list.component.html',
})
export class SearchListComponent {

  public searchHistory: any = [];
  constructor(private router: Router) {}

  @Input() searchSubmitted: boolean;
  @Input() repositoryList: Repository[];
  @Input() historyList: Array<SearchResults> = [];
  @Input() InputHistory: Array<InputHistory> = [];
  
  gotoReport(historyList){
    this.router.navigate(['admin/report']);
}
}
