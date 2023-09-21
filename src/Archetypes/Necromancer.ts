import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }

  static override createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}