import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'partner-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  @Input() member: any;
  constructor() { }

  ngOnInit(): void {
  }

}
