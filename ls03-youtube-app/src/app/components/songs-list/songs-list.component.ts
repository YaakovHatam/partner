import { Component, Input, OnInit } from '@angular/core';
import { SongModel } from 'src/app/models/song.model';
import { SongsService } from 'src/app/services/songs.service';
import { SongsListComponentMode } from './songs-list-mode.enum';

@Component({
   selector: 'partner-songs-list',
   templateUrl: './songs-list.component.html',
   styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
   @Input() title = '';
   @Input() songs: SongModel[] = [];
   @Input() mode: SongsListComponentMode = SongsListComponentMode.songs;

   songsListComponentModes = SongsListComponentMode;

   /*
   private songsService: SongsService;

   constructor(songsService: SongsService) {
      this.songsService = songsService;
   }
   */

   constructor(private songsService: SongsService) {
   }

   ngOnInit(): void {
      console.log(this.mode);
      // parent will send the songs
      // this.songs = this.songsService.songs;
   }

   onSongClick(songId: number) {

      this.songsService[this.mode ===
         this.songsListComponentModes.songs ? 'addToPlaylist' : 'removeFromPlaylist'](songId);
   }

}
