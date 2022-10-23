import { Component, OnInit, Output,EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Output() sidebarClose: EventEmitter<any>   = new EventEmitter();
close =true
  constructor() { }

  ngOnInit(): void {
  }
  closeSideBar(){
    this.close = !this.close;
    this.sidebarClose.emit(this.close) 
  }

}
