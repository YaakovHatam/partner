import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { CompanyBranchComponent } from './components/company-branch/company-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    AboutPageComponent,
    TeamMemberComponent,
    CompanyBranchComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
