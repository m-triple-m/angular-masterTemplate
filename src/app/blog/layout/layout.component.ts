import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private sidebarservice: NbSidebarService) {}

  ngOnInit(): void {
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.sidebarservice.collapse();
  }
}
