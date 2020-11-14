import { Injectable } from '@angular/core';
import {Leader} from '../Shared/leader';
import {leaders} from '../Shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
getLeaders():Promise<Leader[]>{
  return Promise.resolve(leaders);
}
getleader(id: number): Promise<Leader> {
  return Promise.resolve(leaders.filter((leader) => (leader.id ==id))[0]);
}
getFeaturedLeader():Promise<Leader>{
return Promise.resolve(leaders.filter((leader) => leader.featured)[0]);
}
  constructor() { }
}
