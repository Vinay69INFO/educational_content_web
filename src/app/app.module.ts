import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing.component';
import { HeaderComponent } from './pages/header/header.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ContentsComponent } from './pages/ACCESS/contents/contents.component';
import { ProjectsComponent } from './pages/ACCESS/projects/projects.component';
import { LearnComponent } from './pages/ACCESS/learn/learn.component';
import { SupportComponent } from './pages/ACCESS/support/support.component';
import { CommunityComponent } from './pages/ACCESS/community/community.component';
import { AppConfigService } from './services/app-config.service';
import { DataStorageService } from './services/data-storage.service';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    OverviewComponent,
    ContentsComponent,
    ProjectsComponent,
    LearnComponent,
    SupportComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //RichTextEditorAllModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [
    AppConfigService,
    DataStorageService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
