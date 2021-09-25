import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
  sprintRound = new BehaviorSubject(1);
  totalManDay = new BehaviorSubject(0);
  numOfItems = new BehaviorSubject(0);
  numOfProceededItem = new BehaviorSubject(0);

  sprintRoundChanges = this.sprintRound.asObservable();
  totalManDayChanges = this.totalManDay.asObservable();
  numOfItemsChanges = this.numOfItems.asObservable();
  numOfProceededItemChange = this.numOfProceededItem.asObservable();

  constructor() { }

  updateSprintRound(data) {
    this.sprintRound.next(data);
  }

  updateTotalManDay(data) {
    const result = this.totalManDay.getValue() + data;
    this.totalManDay.next(result);
  }

  updateNumOfItems(data) {
    this.numOfItems.next(data);
  }

  updateNumOfProceededItems(data) {
    const result = this.numOfProceededItem.getValue() + data;
    this.numOfProceededItem.next(result);
  }

}
