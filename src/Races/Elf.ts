import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instances = 0;

  constructor(name: string, dext: number) {
    super(name, dext);
    Elf._instances += 1;
  }
  
  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf._instances;
  }
}