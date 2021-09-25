import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sprintRound: number;
  numOfItems: number;

  constructor(private data: DataSharingService) {
    data.sprintRoundChanges.subscribe(round => {
      this.sprintRound = round;
    });
    data.numOfItemsChanges.subscribe(item => {
      this.numOfItems = item;
    });
  }

  updateSettings() {
    this.data.updateSprintRound(this.sprintRound);
    this.data.updateNumOfItems(this.numOfItems);
  }

  resetSettings() {
    this.data.updateSprintRound(1);
    this.data.updateNumOfItems(0);
    this.data.updateNumOfProceededItems(0);
  }

}
