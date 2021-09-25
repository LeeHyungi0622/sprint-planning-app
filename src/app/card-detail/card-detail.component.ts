import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from '../data-sharing';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @ViewChild('overlay') private overlay: ElementRef;
  time: string;
  isTimeInfo: boolean;
  inputTimeValue: string;
  routeParam: string;
  timeInputValue: number;
  showTimeInput = false;

  constructor(private router: Router, route: ActivatedRoute, private data: DataSharingService) {
    this.routeParam = route.snapshot.params.time;
    if (!Number.isNaN(Number(this.routeParam))) {
      this.isTimeInfo = true;
      this.time = this.routeParam;
    } else {
      this.isTimeInfo = false;
    }
  }

  ngOnInit() {
  }

  hideOverlay(): void {
    this.overlay.nativeElement.style.display = 'none';
  }

  updateTotalManDay(): void {
    this.data.updateTotalManDay(Number(this.time));
    this.router.navigate(['/']);
    this.data.updateNumOfProceededItems(1);
  }

  updateCustomTimeInput(): void {
    this.data.updateTotalManDay(Number(this.timeInputValue));
    this.router.navigate(['/']);
    this.data.updateNumOfProceededItems(1);
  }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }

  openTimeInput(): void {
    this.showTimeInput = !this.showTimeInput;
  }

}
