import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiCallerService } from '../../services/api-caller.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName = 'InWinYOU'

  @Output() public navTitle = new EventEmitter<string>();
  @Output() public navId = new EventEmitter<string>();

  menuItems = [
        {linkId: 1, linkName: 'Contents', linkUrl: '/contents/overview', routerLink: 'contents' },
        {linkId: 2, linkName: 'Projects', linkUrl: '/projects/overview', routerLink: 'projects'},
        {linkId: 3, linkName: 'Learn', linkUrl: '/learn/overview', routerLink: 'learn'},
        {linkId: 4, linkName: 'Support', linkUrl: '/support', routerLink: 'support' },
        {linkId: 5, linkName: 'Community', linkUrl: '/community', routerLink: 'community' }
  ];

  menuNav = [];

  constructor(private apiCallerService: ApiCallerService) {  this.getAllMenuItems();}

  ngOnInit(): void {
  }

  showActive(navTitle: any, navId: any) {
  //alert("header value: " + value);
    //this.navTitle.emit(navTitle, navId);
        this.navTitle.emit(navTitle);
        this.navId.emit(navId);

  }

  getAllMenuItems() {
    this.apiCallerService.apiGetCaller('/nav/link/P')
      .subscribe(data => {
        let sessionsVO = data.payload;
       console.log("getAllMenuItems ======>  " + JSON.stringify(sessionsVO));
       this.menuNav = sessionsVO;
       console.log("MenuItem:===============> " + JSON.stringify(this.menuNav));

      });
  }

}
