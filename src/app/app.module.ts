import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { GithubApiService } from './services/github-api/github-api.service';
import { IssueListComponent } from './components/repository-issues/issue-list/issue-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader/loader-service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepositoryIssuesComponent } from './components/repository-issues/repository-issues.component';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { SearchListComponent } from './components/repository-search/search-list/search-list.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    AppRoutes,
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [
    AppComponent,
    IssueListComponent,
    LoaderComponent,
    PageNotFoundComponent,
    RepositoryIssuesComponent,
    RepositorySearchComponent,
    SearchListComponent,
    RepositoryIssuesComponent,
    SubHeaderComponent,
    ReportComponent,
  ],
  providers: [
    GithubApiService,
    LoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
