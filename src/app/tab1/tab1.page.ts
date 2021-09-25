import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataSharingService } from '../data-sharing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numberList: number[];
  inputTime: string;
  sprintRound: number;
  numOfItems: number;
  numOfProceededItems: number;
  totalManDay: number;

  constructor(private data: DataSharingService) {
    const range = (start, stop, step) => Array.from({ length: (stop - start / step + 1) }, (_, i) => start + (i * step));
    this.numberList = range(0, 8, 0.5);
    this.data.sprintRoundChanges.subscribe(round => {
      this.sprintRound = round;
    });
    this.data.numOfItemsChanges.subscribe(num => {
      this.numOfItems = num;
    });
    this.data.numOfProceededItemChange.subscribe(item => {
      this.numOfProceededItems = item;
    });
    this.data.totalManDayChanges.subscribe(time => {
      this.totalManDay = time;
    });
  }

}
