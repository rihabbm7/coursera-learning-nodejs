import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../services/leader.service'
import {ActivatedRoute } from '@angular/router'
import {Location} from '@angular/common'
import { Leader } from '../Shared/leader';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
leaders:Leader [];

  constructor(private leaderService:LeaderService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
this.leaderService.getLeaders()
.then(leaders => this.leaders = leaders);
  }

}
