import { Injectable } from '@angular/core';
import {Leader} from '../Shared/leader';
import {leaders} from '../Shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
getLeaders():Leader[]{
  return leaders;
}
getFeaturedLeader():Leader{
return leaders.filter((leader) => leader.featured)[0];
}
  constructor() { }
}
