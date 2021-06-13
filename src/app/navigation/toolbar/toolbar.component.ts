import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onTogglesidenav() {
    this.sidenavToggle.emit();
  }
}
