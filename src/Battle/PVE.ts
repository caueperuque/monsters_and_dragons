import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private char1: Fighter, private monsters: SimpleFighter[]) {
    super(char1);
  }

  override fight(): number {
    this.monsters.forEach((monster) => {
      while (this.char1.lifePoints > 0 && monster.lifePoints > 0) {
        this.char1.attack(monster);
        monster.attack(this.char1);
      }
    });

    return this.char1.lifePoints === -1 ? -1 : 1;
  }
}