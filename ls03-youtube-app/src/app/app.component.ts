import { Component, OnInit } from '@angular/core';
import { SongsListComponentMode } from './components/songs-list/songs-list-mode.enum';
import { SongModel } from './models/song.model';
import { SongsService } from './services/songs.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   songs: SongModel[] = [];
   playlist: SongModel[] = [];

   songsListComponentModes = SongsListComponentMode;

   constructor(private songsService: SongsService) {
   }

   ngOnInit(): void {
      this.playlist = this.songsService.playlist;
      this.songs = this.songsService.songs;
   }

}
