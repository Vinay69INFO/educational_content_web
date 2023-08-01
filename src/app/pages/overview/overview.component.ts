import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Scrollbar  from 'smooth-scrollbar';
import { ApiCallerService } from '../../services/api-caller.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    id: any;
    data: any;

    sendValue: any;

   // activeUrls: any;
    @Input() indexUrl: any;

    @Input() navTitleI: any;

    @Input() navIdI: any;

    @Input() componentName: any;

    indexItem = [];


   constructor(private router: Router, private activatedRoute: ActivatedRoute,
               private apiCallerService: ApiCallerService) {
            this.data=this.router.routerState.snapshot.url;

             // console.log("OverviewComponent: 222 ============>" + this.data);
       // console.log("overview input:c " + this.indexUrl);

     }

    ngOnInit(): void {
         this.id = this.activatedRoute.snapshot.paramMap.get('status');

         //console.log("OverviewComponent:============> " + this.id);
       //  console.log("OverviewComponent: 222 ============>" + this.data);
        Scrollbar.init(<HTMLElement>document.querySelector('#myId'));
        Scrollbar.init(<HTMLElement>document.querySelector('#myIds'));

       // console.log("overview input: " + this.indexUrl);

             //alert("overview===========> " + this.activatedRoute);


    }

    ngOnChanges() {
        this.hello();
        this.getOverviewByStatus(this.componentName);
                 // alert("componentName: " + JSON.stringify(this.componentName) + " navTitleI: " + this.navTitleI + "  navIdI:  " + this.navIdI) ;

    }


    hello() {
      console.log("overview input: " + this.indexUrl);
    }
    sendData(value: any) {
      //alert( JSON.stringify(value) + " <======overview: ----> " + value);
      console.log(" <======overview: ----> " + value.activatedRoute.snapshot.params.status);
      this.sendValue =  value.activatedRoute.snapshot.params.status;

    }

    appName = 'InWinYOU'
      menuItems1 = [
            {linkId: 1, linkName: 'Contents', linkUrl: '/contents' },
            {linkId: 2, linkName: 'Projects', linkUrl: '/projects' },
            {linkId: 3, linkName: 'Learn', linkUrl: '/learn' },
            {linkId: 4, linkName: 'Support', linkUrl: '/support' },
            {linkId: 5, linkName: 'Community', linkUrl: '/community' }
      ];

      menuItems = [
                  {linkId: 1, linkName: 'Contents',
                    linkItem: [
                      { linkId: 1, linkName: 'Overview', linkUrl: '/contents/overview' },
                      { linkId: 2, linkName: 'Java 1.8', linkUrl: '/contents/java-1.8' },
                      { linkId: 3, linkName: 'Micro Service', linkUrl: '/contents/micro-service' }

                    ] ,linkUrl: '/contents/overview', routerLink: '/contents'
                  },

                  { linkId: 2, linkName: 'Projects',
                    linkItem: [
                      { linkId: 1, linkName: 'Overview', linkUrl: '/projects/overview' },
                      { linkId: 2, linkName: 'Spring Boot', linkUrl: '/projects/spring-boot' }
                    ] ,linkUrl: '/projects/overview', routerLink: '/projects'
                  },

                  { linkId: 3, linkName: 'Learn',
                    linkItem: [
                      { linkId: 1, linkName: 'Overview', linkUrl: '/learn/overview' },
                      { linkId: 2, linkName: 'Angular', linkUrl: '/learn/angular' }
                    ] ,linkUrl: '/learn/overview', routerLink: '/learn'
                  }
            ];


    getOverviewByStatus(status: any) {
       // alert("status: " + JSON.stringify(status));

        this.apiCallerService.apiGetCaller('/get/all/topics/'+ this.componentName)
          .subscribe(data => {
            this.indexItem = data.payload;
           console.log("==============================> " + JSON.stringify(this.indexItem));
                      console.log("======================topicVO========> " + this.indexItem);

          });
      }



}
