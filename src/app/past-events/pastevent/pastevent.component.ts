import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pastevent',
  templateUrl: './pastevent.component.html',
  styleUrls: ['./pastevent.component.css']
})
export class PastEventComponent implements OnInit {
place: string;
image:string;
name:string;
date: string;

@Input() set event(value:any) {
  if (value) {
    this.place = value.place;
    this.image = value.image;
    this.name = value.name;
    this.date = value.date;
  }
};
  constructor() { }

  ngOnInit(): void {
  }

}
