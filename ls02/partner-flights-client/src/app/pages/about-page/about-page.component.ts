import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'partner-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  title = "Partner company about";
  rowOrColumn = 'row';

  teamMembers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch('/api/values')
      .then(res => res.json()).then(res => this.teamMembers = res)
  }

  toggle() {
    this.rowOrColumn = this.rowOrColumn == 'row' ? 'column' : 'row';
  }

}
