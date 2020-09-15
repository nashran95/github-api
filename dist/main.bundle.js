webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <header>\n    <h1><a routerLink=\"/repository/search\">GitHub API search</a></h1>\n  </header>\n  <app-loader></app-loader>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_github_api_github_api_service__ = __webpack_require__("../../../../../src/app/services/github-api/github-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_repository_issues_issue_list_issue_list_component__ = __webpack_require__("../../../../../src/app/components/repository-issues/issue-list/issue-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loader_loader_service__ = __webpack_require__("../../../../../src/app/services/loader/loader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_repository_issues_repository_issues_component__ = __webpack_require__("../../../../../src/app/components/repository-issues/repository-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_repository_search_repository_search_component__ = __webpack_require__("../../../../../src/app/components/repository-search/repository-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_repository_search_search_list_search_list_component__ = __webpack_require__("../../../../../src/app/components/repository-search/search-list/search-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sub_header_sub_header_component__ = __webpack_require__("../../../../../src/app/components/sub-header/sub-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_repository_issues_issue_list_issue_list_component__["a" /* IssueListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_repository_issues_repository_issues_component__["a" /* RepositoryIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_repository_search_repository_search_component__["a" /* RepositorySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_repository_search_search_list_search_list_component__["a" /* SearchListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_repository_issues_repository_issues_component__["a" /* RepositoryIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sub_header_sub_header_component__["a" /* SubHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__report_report_component__["a" /* ReportComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_github_api_github_api_service__["a" /* GithubApiService */],
                __WEBPACK_IMPORTED_MODULE_11__services_loader_loader_service__["a" /* LoaderService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_repository_issues_repository_issues_component__ = __webpack_require__("../../../../../src/app/components/repository-issues/repository-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_repository_search_repository_search_component__ = __webpack_require__("../../../../../src/app/components/repository-search/repository-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");




var routes = [
    {
        path: '',
        redirectTo: '/repository/search',
        pathMatch: 'full',
    },
    {
        path: 'repository/search',
        component: __WEBPACK_IMPORTED_MODULE_2__components_repository_search_repository_search_component__["a" /* RepositorySearchComponent */],
    },
    {
        path: 'repository/issues/:owner/:repo',
        component: __WEBPACK_IMPORTED_MODULE_1__components_repository_issues_repository_issues_component__["a" /* RepositoryIssuesComponent */],
    },
    {
        path: 'admin/report',
        component: __WEBPACK_IMPORTED_MODULE_3__report_report_component__["a" /* ReportComponent */],
    },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-wrapper\" *ngIf=\"isVisible()\">\n  <div class=\"loader\"></div>\n  <div class=\"loader-section section-left\"></div>\n  <div class=\"loader-section section-right\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000; }\n  .loader-wrapper .loader-section {\n    position: fixed;\n    top: 0;\n    width: 50%;\n    height: 100%;\n    background: rgba(30, 30, 30, 0.6);\n    z-index: 1000;\n    transform: translateX(0); }\n    .loader-wrapper .loader-section.loader-section.section-left {\n      left: 0; }\n    .loader-wrapper .loader-section.loader-section.section-right {\n      right: 0; }\n\n.loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n  animation: spin 2s linear infinite;\n  z-index: 1001; }\n  .loader:before {\n    content: \"\";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #e74c3c;\n    animation: spin 3s linear infinite; }\n  .loader:after {\n    content: \"\";\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #f9c922;\n    animation: spin 1.5s linear infinite; }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__ = __webpack_require__("../../../../../src/app/services/loader/loader-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(_loaderService) {
        this._loaderService = _loaderService;
    }
    LoaderComponent.prototype.isVisible = function () {
        return this._loaderService.isVisible();
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<sub-header [subHeading]=\"subHeading\"></sub-header>\n\n<p>\n  Please go back to the <a routerLink=\"/\">homepage</a>.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        this.subHeading = 'Page not found';
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/repository-issues/issue-list/issue-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"repository-items-list\">\n  <ul *ngIf=\"repositoryIssueList.length > 0\">\n    <li *ngFor=\"let repositoryIssue of repositoryIssueList\" class=\"list-group\">\n      <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{ repositoryIssue.title }}</h5>\n        </div>\n        <br>\n        <p class=\"mb-1\"><strong>URL:</strong> <a href=\"{{ repositoryIssue.html_url }}\" target=\"_blank\">{{ repositoryIssue.html_url }}</a></p>\n        <p class=\"mb-1\"><strong>State:</strong> {{ repositoryIssue.state }}</p>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/repository-issues/issue-list/issue-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssueListComponent = (function () {
    function IssueListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IssueListComponent.prototype, "hasFetched", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], IssueListComponent.prototype, "repositoryIssueList", void 0);
    IssueListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repository-issue-list',
            template: __webpack_require__("../../../../../src/app/components/repository-issues/issue-list/issue-list.component.html"),
        })
    ], IssueListComponent);
    return IssueListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/repository-issues/repository-issues.component.html":
/***/ (function(module, exports) {

module.exports = "<sub-header [subHeading]=\"subHeading\"></sub-header>\n\n<repository-issue-list [hasFetched]=\"hasFetched\" [repositoryIssueList]=\"repositoryIssueList\"></repository-issue-list>\n\n<p *ngIf=\"error\">{{ error }}. Please go back to the <a routerLink=\"/\">homepage</a> and try again.</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/repository-issues/repository-issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryIssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_github_api_github_api_service__ = __webpack_require__("../../../../../src/app/services/github-api/github-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_loader_service__ = __webpack_require__("../../../../../src/app/services/loader/loader-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepositoryIssuesComponent = (function () {
    function RepositoryIssuesComponent(_githubApiService, _loaderService, _route) {
        this._githubApiService = _githubApiService;
        this._loaderService = _loaderService;
        this._route = _route;
        this.subHeading = 'Repository issues by ';
        this.repositoryIssueList = [];
        this.hasFetched = false;
    }
    RepositoryIssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._route.params.subscribe(function (params) {
            _this._owner = params.owner;
            _this._repo = params.repo;
            _this.subHeading += _this._owner;
            _this._search();
        });
    };
    RepositoryIssuesComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    RepositoryIssuesComponent.prototype._search = function () {
        var _this = this;
        this._loaderService.setVisiblility(true);
        this._githubApiService.getRepositoryIssues(this._owner, this._repo)
            .subscribe(function (data) {
            _this._loaderService.setVisiblility(false);
            _this.hasFetched = true;
            if (data.length > 0) {
                _this.repositoryIssueList = data;
            }
            else {
                _this.repositoryIssueList = [];
                _this.error = 'There might not have any issues for this repository.';
            }
        }, function (err) {
            _this._loaderService.setVisiblility(false);
            _this.hasFetched = true;
            _this.error = err.statusText;
        });
    };
    RepositoryIssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repository-issues',
            template: __webpack_require__("../../../../../src/app/components/repository-issues/repository-issues.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_github_api_github_api_service__["a" /* GithubApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RepositoryIssuesComponent);
    return RepositoryIssuesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/repository-search/repository-search.component.html":
/***/ (function(module, exports) {

module.exports = "<sub-header [subHeading]=\"subHeading\"></sub-header>\n\n<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <input type=\"search\" class=\"form-control\" placeholder=\"enter repository name here...\" [formControl]=\"searchControl\" [value]=\"searchName\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n</form>\n\n<repository-search-list [searchSubmitted]=\"searchSubmitted\" [repositoryList]=\"repositoryList\"></repository-search-list>\n\n<p *ngIf=\"error\">{{ error }}. Please go back to the <a routerLink=\"/\">homepage</a> and try again.</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/repository-search/repository-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositorySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_github_api_github_api_service__ = __webpack_require__("../../../../../src/app/services/github-api/github-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_loader_service__ = __webpack_require__("../../../../../src/app/services/loader/loader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_searchHistory__ = __webpack_require__("../../../../../src/app/models/searchHistory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RepositorySearchComponent = (function () {
    function RepositorySearchComponent(_githubApiService, _loaderService, _route) {
        this._githubApiService = _githubApiService;
        this._loaderService = _loaderService;
        this._route = _route;
        this.subHeading = 'Search among GitHub repositories.';
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.repositoryList = [];
        this.searchHistory = [];
        this.searchNameHistory = [];
        this.searchSubmitted = false;
        this.searchName = '';
        this.historySearchName = [];
    }
    RepositorySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._route.params.subscribe(function (params) {
            _this.searchName = params.searchName || '';
            if (_this.searchName && _this.searchName.length > 0) {
                _this._search();
            }
        });
    };
    RepositorySearchComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    RepositorySearchComponent.prototype.onSubmit = function () {
        if (!this.searchControl.value || this.searchControl.value.trim() === '') {
            return;
        }
        this.searchName = this.searchControl.value;
        this._search();
    };
    RepositorySearchComponent.prototype._search = function () {
        var _this = this;
        this._loaderService.setVisiblility(true);
        this._githubApiService.searchRepositoriesByName(this.searchName)
            .subscribe(function (data) {
            _this._loaderService.setVisiblility(false);
            _this.searchSubmitted = true;
            var totalCount = data.total_count, items = data.items;
            if (totalCount > 0) {
                _this.repositoryList = items;
                for (var _i = 0, _a = _this.repositoryList; _i < _a.length; _i++) {
                    var i = _a[_i];
                    _this.searchHistory.push(i);
                }
                console.log("this ius in repo-search");
                localStorage.setItem('searchHistory', JSON.stringify(_this.searchHistory));
                console.log(_this.searchHistory);
                var historySearch = _this.onHistoryCreateName(_this.searchName);
            }
            else {
                _this.repositoryList = [];
                _this.error = 'Not found. Please try again or use a different name is the search input above.';
            }
        }, function (err) {
            _this._loaderService.setVisiblility(false);
            _this.searchSubmitted = true;
            _this.error = err.statusText;
        });
    };
    RepositorySearchComponent.prototype.onHistoryCreateName = function (searchName) {
        var customObj = new __WEBPACK_IMPORTED_MODULE_5__models_searchHistory__["a" /* InputHistory */]();
        customObj.title = this.searchName;
        this.historySearchName.push(customObj);
        console.log(this.historySearchName);
        localStorage.setItem('historySearchName', JSON.stringify(this.historySearchName));
    };
    RepositorySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repository-search',
            template: __webpack_require__("../../../../../src/app/components/repository-search/repository-search.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_github_api_github_api_service__["a" /* GithubApiService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], RepositorySearchComponent);
    return RepositorySearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/repository-search/search-list/search-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"repository-items-list\">\n  <ul *ngIf=\"repositoryList.length > 0\">\n    <div style=\"margin-top: 10\"><button class=\"btn btn-info\" style=\"position: absolute; right: 150; z-index: 10\" (click)=\"gotoReport(historyList)\">View Admin Report</button></div><br><br>\n    <li *ngFor=\"let repository of repositoryList | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\" class=\"list-group\">\n      <div class=\"list-group-item list-group-item-action flex-column align-items-start\" id=\"pdfTable\" #pdfTable>\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{ repository.name }}</h5>\n        </div>\n        <p class=\"mb-1\">{{ repository.description }}</p>\n        <br>\n        <p class=\"mb-1\"><strong>URL:</strong> <a href=\"{{ repository.html_url }}\" target=\"_blank\">{{ repository.html_url }}</a></p>\n        <p class=\"mb-1\"><strong>Forks count:</strong> {{ repository.forks_count }}</p>\n        <p class=\"mb-1\"><strong>Stargazers count:</strong> {{ repository.stargazers_count }}</p>\n        <p class=\"mb-1\"><strong>Watchers count:</strong> {{ repository.watchers_count }}</p>\n        <p class=\"mb-1\">\n          <strong>Open issues:</strong> {{ repository.open_issues_count }}\n          <small *ngIf=\"repository.open_issues_count > 0\">(click <a routerLink=\"/repository/issues/{{ repository.full_name }}\">here</a> to check them out.)</small>\n        </p>\n      </div>\n    </li>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/repository-search/search-list/search-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchListComponent = (function () {
    function SearchListComponent(router) {
        this.router = router;
        this.searchHistory = [];
        this.historyList = [];
        this.InputHistory = [];
    }
    SearchListComponent.prototype.gotoReport = function (historyList) {
        this.router.navigate(['admin/report']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SearchListComponent.prototype, "searchSubmitted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SearchListComponent.prototype, "repositoryList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SearchListComponent.prototype, "historyList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SearchListComponent.prototype, "InputHistory", void 0);
    SearchListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repository-search-list',
            template: __webpack_require__("../../../../../src/app/components/repository-search/search-list/search-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchListComponent);
    return SearchListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sub-header/sub-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h3>{{ subHeading }}</h3>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/sub-header/sub-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  margin-bottom: 40px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sub-header/sub-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHeaderComponent = (function () {
    function SubHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SubHeaderComponent.prototype, "subHeading", void 0);
    SubHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sub-header',
            template: __webpack_require__("../../../../../src/app/components/sub-header/sub-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sub-header/sub-header.component.scss")]
        })
    ], SubHeaderComponent);
    return SubHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/searchHistory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputHistory; });
var InputHistory = (function () {
    function InputHistory() {
    }
    return InputHistory;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-1\">Recent search title:</h5>\n<!-- <p>{{ historySearchName }}</p> -->\n<div *ngFor=\"let name of historySearchName; let i = index\">\n  <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"d-flex w-100 justify-content-between\">\n    </div>\n    <br>\n      <p><b> </b> {{i + 1}} - {{ name.title }} </p>\n  </div>\n</div>\n\n<div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n  <div class=\"d-flex w-100 justify-content-between\">\n  </div>\n  <br>\n  <h5>Recent search results (All)</h5>\n  \n  <li *ngFor=\"let item of historySearch | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\" class=\"list-group\">\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\" id=\"pdfTable\" #pdfTable>\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{ item.name }}</h5>\n      </div>\n      <p class=\"mb-1\">{{ item.description }}</p>\n      <br>\n      <p class=\"mb-1\"><strong>URL:</strong> <a href=\"{{ item.html_url }}\" target=\"_blank\">{{ item.html_url }}</a></p>\n      <p class=\"mb-1\"><strong>Forks count:</strong> {{ item.forks_count }}</p>\n      <p class=\"mb-1\"><strong>Stargazers count:</strong> {{ item.stargazers_count }}</p>\n      <p class=\"mb-1\"><strong>Watchers count:</strong> {{ item.watchers_count }}</p>\n      <p class=\"mb-1\">\n        <strong>Open issues:</strong> {{ item.open_issues_count }}\n        <small *ngIf=\"item.open_issues_count > 0\">(click <a routerLink=\"/repository/issues/{{ item.full_name }}\">here</a> to check them out.)</small>\n      </p>\n    </div>\n  </li>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/report/report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
        this.searchName = [];
        this.historySearchName = [];
        this.searchNameHistory = [];
        this.historySearch = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        var retrievedData = localStorage.getItem("historySearchName");
        this.historySearchName = JSON.parse(retrievedData);
        var retrievedData2 = localStorage.getItem("searchHistory");
        this.historySearch = JSON.parse(retrievedData2);
        console.log("This is in report component!");
        console.log(this.historySearchName);
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/github-api/github-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SEARCH_ITEMS_PER_PAGE = 1000;
var ISSUES_ITEMS_PER_PAGE = 100;
var GithubApiService = (function () {
    function GithubApiService(_http) {
        this._http = _http;
    }
    GithubApiService.prototype.searchRepositoriesByName = function (name) {
        var url = this._generateSearchInRepositoriesUrl(name);
        return this._http.get(url);
    };
    GithubApiService.prototype.getRepositoryIssues = function (owner, repo) {
        var url = this._generateRepositoryIssuesUrl(owner, repo);
        return this._http.get(url);
    };
    GithubApiService.prototype.getRepositoryByOwnerAndRepo = function (owner, repo) {
        var url = this._generateRepositoryUrl(owner, repo);
        return this._http.get(url);
    };
    GithubApiService.prototype._generateSearchInRepositoriesUrl = function (name) {
        return "https://api.github.com/search/repositories?q=" + name + "&per_page=" + SEARCH_ITEMS_PER_PAGE;
    };
    GithubApiService.prototype._generateRepositoryIssuesUrl = function (owner, repo) {
        return "https://api.github.com/repos/" + owner + "/" + repo + "/issues?&per_page=" + ISSUES_ITEMS_PER_PAGE;
    };
    GithubApiService.prototype._generateRepositoryUrl = function (owner, repo) {
        return "https://api.github.com/repos/" + owner + "/" + repo;
    };
    GithubApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GithubApiService);
    return GithubApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/loader/loader-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderService = (function () {
    function LoaderService() {
        this._isVisible = false;
    }
    LoaderService.prototype.setVisiblility = function (isVisible) {
        this._isVisible = isVisible;
    };
    LoaderService.prototype.isVisible = function () {
        return this._isVisible;
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-in": "../../../../moment/locale/en-in.js",
	"./en-in.js": "../../../../moment/locale/en-in.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./en-sg": "../../../../moment/locale/en-sg.js",
	"./en-sg.js": "../../../../moment/locale/en-sg.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fil": "../../../../moment/locale/fil.js",
	"./fil.js": "../../../../moment/locale/fil.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./ga": "../../../../moment/locale/ga.js",
	"./ga.js": "../../../../moment/locale/ga.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-deva": "../../../../moment/locale/gom-deva.js",
	"./gom-deva.js": "../../../../moment/locale/gom-deva.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it-ch": "../../../../moment/locale/it-ch.js",
	"./it-ch.js": "../../../../moment/locale/it-ch.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./oc-lnc": "../../../../moment/locale/oc-lnc.js",
	"./oc-lnc.js": "../../../../moment/locale/oc-lnc.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tk": "../../../../moment/locale/tk.js",
	"./tk.js": "../../../../moment/locale/tk.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-mo": "../../../../moment/locale/zh-mo.js",
	"./zh-mo.js": "../../../../moment/locale/zh-mo.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map