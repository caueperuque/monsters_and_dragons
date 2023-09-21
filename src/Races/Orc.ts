import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instances = 0;

  constructor(name: string, dext: number) {
    super(name, dext);
    Orc._instances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Orc._instances;
  }
}