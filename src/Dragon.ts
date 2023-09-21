import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(protected life = 999) {
    super(life);
  }
}