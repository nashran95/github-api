import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from '../../services/github-api/github-api.service';
import { LoaderService } from '../../services/loader/loader-service';
import { RepositorySearchResult, Repository } from '../../models/repository';
import { InputHistory } from '../../models/searchHistory';

@Component({
  selector: 'repository-search',
  templateUrl: './repository-search.component.html',
})
export class RepositorySearchComponent implements OnInit, OnDestroy {
  public subHeading = 'Search among GitHub repositories.';
  public searchControl: FormControl = new FormControl();
  public repositoryList: Repository[] = [];
  public searchHistory: Repository[] = [];
  public searchNameHistory: any = [];
  public searchSubmitted = false;
  public searchName = '';
  public error: string;
  public title: string;
  public historySearchName: Array<InputHistory> = [];

  private _subscription: any;

  constructor(
    private _githubApiService: GithubApiService,
    private _loaderService: LoaderService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this.searchName = params.searchName || '';

      if (this.searchName && this.searchName.length > 0) {
        this._search();
      }
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onSubmit(): void {
    if (!this.searchControl.value || this.searchControl.value.trim() === '') {
      return;
    }

    this.searchName = this.searchControl.value;
    this._search();
  }

  private _search(): void {
    this._loaderService.setVisiblility(true);
    this._githubApiService.searchRepositoriesByName(this.searchName)
      .subscribe(
        (data: RepositorySearchResult) => {
          this._loaderService.setVisiblility(false);
          this.searchSubmitted = true;
          const { total_count: totalCount, items } = data;

          if (totalCount > 0) {
            this.repositoryList = items;
            for (var i of this.repositoryList) {
              this.searchHistory.push(i);
            }
            console.log("this ius in repo-search");
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
            console.log(this.searchHistory);
            let historySearch = this.onHistoryCreateName(this.searchName);

          } else {
            this.repositoryList = [];
            this.error = 'Not found. Please try again or use a different name is the search input above.';
          }
        },
        (err: HttpErrorResponse) => {
          this._loaderService.setVisiblility(false);
          this.searchSubmitted = true;
          this.error = err.statusText;
        }
      );
  }

  public onHistoryCreateName(searchName){
    let customObj = new InputHistory();
    customObj.title = this.searchName;
    this.historySearchName.push(customObj);
    console.log(this.historySearchName);
    localStorage.setItem('historySearchName', JSON.stringify(this.historySearchName));
  }
}
