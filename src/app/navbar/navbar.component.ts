import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavRoute } from 'src/modules/nav-routes';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() navigationEvent = new EventEmitter<string>();

  public isCollapsed = true;
  isMobile = false;
  routes: NavRoute[] = [
    { name: ' المطورون ', route: '/main/developers' },
    { name: 'الإحصائيات', route: '/main/stats' },
    { name: 'الكشف', route: '/main/detection' },
    { name: 'البث المباشر', route: '/main/stream' },
    { name: 'البلاغات', route: '/main/reports' },
    { name: 'تطبيق بصير ', route: '/baseer' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 991;
    window.onresize = () => (this.isMobile = window.innerWidth <= 991);
  }
}
