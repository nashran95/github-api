import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepositoryIssuesComponent } from './components/repository-issues/repository-issues.component';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { ReportComponent } from '././report/report.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/repository/search',
    pathMatch: 'full',
  },
  {
    path: 'repository/search',
    component: RepositorySearchComponent,
  },
  {
    path: 'repository/issues/:owner/:repo',
    component: RepositoryIssuesComponent,
  },
  {
    path: 'admin/report',
    component: ReportComponent,
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
