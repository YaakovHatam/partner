import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   rand: number;

   constructor() {
      this.rand = 0;
   }

   ngOnInit(): void {
      setInterval(() => this.rand = Math.floor(Math.random() * 1000), 3000)
   }

}
