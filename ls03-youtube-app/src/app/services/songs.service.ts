import { Injectable } from '@angular/core';
import { SongModel } from '../models/song.model';

@Injectable({
   providedIn: 'root'
})
export class SongsService {

   playlist: SongModel[] = [];

   songs: SongModel[] = [{
      name: 'sound of silence',
      href: 'eeN21D_E2Rk'
   }, {
      name: 'Scorpions - Send Me An Angel | Piano Cover',
      href: 'oDoEQ0fZJ8o'
   }].map((song, i) => ({ id: i + 1, ...song }));

   constructor() { }

   /**
    * add to user's playlist a song from the existing songs array
    * @param songId the song id
    */
   addToPlaylist(songId: number) {
      const songToAdd = this.songs.find(s => s.id === songId);
      if (songToAdd) {
         this.playlist.push(songToAdd);
      }
   }

   removeFromPlaylist(songId: number) {
      // the reference way:
      const songIndex = this.playlist.findIndex(s => s.id === songId);
      this.playlist.splice(songIndex, 1);

      // this.playlist = this.playlist.filter(s => s.id !== songId)
   }
}
