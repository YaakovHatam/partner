import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SongModel } from '../models/song.model';

@Injectable({
   providedIn: 'root'
})
export class SongsService {

   private _playlist: SongModel[] = [];
   playlist: BehaviorSubject<SongModel[]> = new BehaviorSubject<SongModel[]>([]);

   constructor(private httpClient: HttpClient) {

   }

   getSongs() {
      return this.httpClient.get<SongModel[]>('/assets/songs.json');
   }

   /**
    * add to user's playlist a song from the existing songs array
    * @param songId the song id
    */
   addToPlaylist(song: SongModel) {
      this._playlist.push(song);
      this.playlist.next(this._playlist)

   }

   removeFromPlaylist(songId: number) {
      // the reference way:
      //const songIndex = this.playlist.findIndex(s => s.id === songId);
      //this.playlist.splice(songIndex, 1);

      this._playlist = this._playlist.filter(s => s.id !== songId);
      this.playlist.next(this._playlist);
   }
}
