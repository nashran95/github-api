import { Component } from '@angular/core';
import { InputHistory } from '.././models/searchHistory';
import { Repository } from '.././models/repository';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  public searchName: any = [];
  public historySearchName: Array<InputHistory> = [];
  public searchNameHistory: any = [];
  public historySearch: Repository[] = [];

  constructor() { }

  ngOnInit() {
    var retrievedData = localStorage.getItem("historySearchName");
    this.historySearchName = JSON.parse(retrievedData);
    var retrievedData2 = localStorage.getItem("searchHistory");
    this.historySearch = JSON.parse(retrievedData2);
    console.log("This is in report component!");
    console.log(this.historySearchName);
  }
}
