import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { ApiCallerService } from '../../../services/api-caller.service';
import { DataStorageService } from '../../../services/data-storage.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  @Output() public sendData = new EventEmitter<string>();

  componentName = 'Contents';

   paramQuery = '';
   id: any;
   data:any;

    menuNav: any;
    parentRouteId: any;
     private sub: any;

    blogId: any;
    blogBody: any;

     constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiCallerService: ApiCallerService) {
        console.log("Hello vinay: " + this.router.routerState);
        this.activatedRoute.params.subscribe(data => {
            console.log("data: contents Component ====> " + data['status']);
            console.log("query params: contents Component ====> " + data['order']);

        });

         this.activatedRoute.queryParams.subscribe(params => {
                     console.log("query params: contents Component ====> " + params['order']);
                     this.blogId = params['order'];
                     this.getBlogById();
            });

     }

      ngOnInit(): void {
         this.id = this.activatedRoute.snapshot.paramMap.get('status');
         this.data = this.router.routerState.snapshot.url;

       //alert(this.data + "  <=========== this.id ContentsComponent:============> " + this.id);
       // this.sendData.emit(this.id);
        this.sendData.emit(this.componentName);
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

        getBlogById() {
          this.apiCallerService.apiGetCaller('/get/blog/select/' + this.blogId)
            .subscribe(data => {
              this.blogBody = data.payload;
              console.log("data.payload:======Get Blog=========> " + JSON.stringify(this.blogBody));

            });
        }


        java1_code =  `
          ResponseVO responseVO = new ResponseVO();
            try {
                validateAvailabilityAndPassword(responseVO, registerVO);
                StudentVO studentVO = studentConverter.getStudentVO(registerVO);
                StudentVO studentVO1 = iamTransactions.register(studentVO);
                System.out.println("Hi- Ji1 ");
                responseVO.setPayload(studentVO1);
              } catch (Exception e) {
                System.out.println("Hi- Ji " + e);
              }
          return responseVO;
        `;

        java2_code = `
          private void validateAvailabilityAndPassword(ResponseVO responseVO, RegisterVO registerVO) {
          		StudentVO studentVO = iamTransactions.getStudentByEmail(registerVO.getEmailAddress());
          		if(studentVO != null) {
          			//if (studentVO.get)
          			System.out.println("something went wrong!");
          		}
          	}

        `;
htmlContent: any;
}
