import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function allOlder(friends: Friend[]): string[] {
    return friends.map(f => {
      f.age += 1;
      return `${f.name} is now ${f.age}`;
    });
  }

console.log(allOlder(friends))
