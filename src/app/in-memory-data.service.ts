import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Captain Quirk' },
      { id: 13, name: 'The Hilarious Hurricane' },
      { id: 14, name: 'Paste-Pot Pete' },
      { id: 15, name: 'Sir Chuckles-a-Lot' },
      { id: 16, name: 'The Jolly Jester' },
      { id: 17, name: 'D-Man' },
      { id: 18, name: 'The Whimsical Wonder' },
      { id: 19, name: 'The Punny Protector' },
      { id: 20, name: 'The Giggling Guardian' },
      { id: 21, name: 'Condiment King' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
