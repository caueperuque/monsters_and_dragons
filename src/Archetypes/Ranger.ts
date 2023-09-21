import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }

  static override createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}