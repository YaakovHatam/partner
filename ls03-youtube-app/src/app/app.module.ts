import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/infrustructure/header/header.component';
import { MenuComponent } from './components/infrustructure/menu/menu.component';
import { LogoComponent } from './components/infrustructure/logo/logo.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      MenuComponent,
      LogoComponent,
      VideoPlayerComponent,
      SongsListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      FlexLayoutModule,
      ButtonsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
