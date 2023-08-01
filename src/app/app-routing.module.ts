import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ContentsComponent } from './pages/ACCESS/contents/contents.component';
import { ProjectsComponent } from './pages/ACCESS/projects/projects.component';
import { LearnComponent } from './pages/ACCESS/learn/learn.component';
import { SupportComponent } from './pages/ACCESS/support/support.component';
import { CommunityComponent } from './pages/ACCESS/community/community.component';

const routes: Routes = [
  { path: '', redirectTo: 'contents/overview', pathMatch: 'full' },

  { path: '', component: LandingComponent,
      children: [
        { path: 'contents/:status', component: ContentsComponent },
        { path: 'projects/:status', component: ProjectsComponent },
        { path: 'learn/:status', component: LearnComponent },
        { path: 'support', component: SupportComponent },
        { path: 'community', component: CommunityComponent }

      ]
    },
            { path: 'community/:status', component: OverviewComponent }

           //  { path: 'contents/:status', component: ContentsComponent },
         //{ path: 'projects/:status', component: ProjectsComponent },
         //{ path: 'learn/:status', component: LearnComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


