import { Injectable } from '@angular/core';
import {Leader} from '../Shared/leader';
import {leaders} from '../Shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(leaders), 2000);
    });
  }

  getleader(id: string): Promise<Leader> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(leaders.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(leaders.filter((leader) => leader.featured)[0]), 2000);
    });
  }
  constructor() { }
}
