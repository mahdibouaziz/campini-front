import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/upcoming-events/events.service';
@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit{
  events: any;
  all_events: any;
  clicked=false;
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadList();
  }

  private sliced() {
    this.events = this.all_events.slice(0, 6);
  }

  private loadList() {
    this.eventsService.all().subscribe((list) => {
      this.all_events = list;
      this.all_events.sort(this.diffdate);
      this.sliced();
    });
  }

  private diffdate(a: any, b: any): any {
    var dateA: any = new Date(a.date);
    var dateB: any = new Date(b.date);
    return dateA - dateB;
  }
  showMore(clicked:boolean){
    this.clicked=true;
  }
}
