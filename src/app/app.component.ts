import { Component } from '@angular/core';

import { ReadJsonService } from './read-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string;
  response: string;
  selectedKeyValue: string;
  keys = [
    'isoDescription',
    'isoCGL',
    'sic',
    'naics',
    'generalDescription',
    'ncci',
    'caWC',
    'deWC',
    'miWC',
    'njWC',
    'nyWC',
    'paWC',
    'txWC'
  ];

  constructor(
    private readJsonService: ReadJsonService
  ) { }

  searchValue(): void {
    this.readJsonService.getJson().subscribe(
      res => {
        const searchTerm = parseInt(this.searchTerm, 10);
        const keyValue = this.selectedKeyValue;

        const response = res.filter(function(x) {
          return x[keyValue] === searchTerm;
        });

        this.response = JSON.stringify(response, undefined, 4);
        console.log(response);
      },
      err => {
        console.log(err);
      },
      () => {
      });
  }
}
