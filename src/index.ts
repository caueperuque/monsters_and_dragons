import { Mage, Necromancer, Warrior } from './Archetypes';
import Battle, { PVP } from './Battle';
import PVE from './Battle/PVE';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Elf, Halfling } from './Races';

const player1 = new Character(
  'Hosas',
  new Elf('Hosas', 20),
  new Necromancer('Hosas'),
);
const player2 = new Character(
  'Neginka',
  new Dwarf('Neginka', 20),
  new Warrior('Neginka'),
);
const player3 = new Character(
  'Node',
  new Halfling('Node', 20),
  new Mage('Node'),
);

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};