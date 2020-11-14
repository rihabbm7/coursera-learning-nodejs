import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../Shared/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements
 OnInit {
  dish: Dish;
  promotion: Promotion;
  leader:Leader;

  constructor(private dishService: DishService,
    private promotionservice: PromotionService,
    private leaderService:LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .then(dishes => this.dish  = dishes);
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leaderService.getFeaturedLeader()
    .then(leader =>  this.leader = leader);
  }

}
