import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    id: any;

    activateUrl: any;

    @Input() navTitleI: any;
    @Input() navIdI: any;

    //Active Component
    @Input() componentName: any;



   constructor(private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.paramMap.get('status');
      console.log("LandingComponent: " + this.id);
   }

  activeUrl(value: any) {
 // alert("value: " + JSON.stringify(value));
    this.activateUrl = value;
  //  console.log("landing activeUrl: ===> " + this.activateUrl);
  }

  navTitle(value: any) {
 // alert("landing:navTitle\  " + value);
    this.navTitleI = value;
  }

  navId(value: any) {
   // alert("landing:navId\  " + value);

    this.navIdI = value;
  }


  sendData(value: any) {
      this.componentName = value.componentName;
        //alert( JSON.stringify(value) + " <======overview: ----> " + this.componentName);
        //console.log(" <======overview: ----> " + value.activatedRoute.snapshot.params.status);
       // this.sendValue =  value.activatedRoute.snapshot.params.status;

      }

}
