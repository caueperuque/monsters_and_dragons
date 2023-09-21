import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instances = 0;

  constructor(name: string, dext: number) {
    super(name, dext);
    Halfling._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Halfling._instances;
  }
}