import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  place: string;
  image: string;
  name: string;
  date: string;
  description: string;
  price: number;
  nbDays: number;

  @Input() set event(value: any) {
    if (value) {
      this.place = value.place;
      this.image = '../../../../assets/img/uploads/' + value.image;
      this.name = value.name;
      this.date = value.date;
      this.price = value.price;
      this.nbDays = value.numberOfDays;
      this.description = value.description;
    }
  }
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
