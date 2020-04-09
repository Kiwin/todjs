import { IRender } from "../view/IRender";
import { CreatureStatCollection } from "./CreatureStatCollection";
import { AttackDetails } from "./AttackDetails";
import { Weapon } from "./Weapon";

abstract class Creature implements IRender {
  
  baseStats: CreatureStatCollection;
  currentStats: CreatureStatCollection;
  weapon : Weapon;

  constructor(baseStats: CreatureStatCollection) {
    this.baseStats = baseStats;
    this.currentStats = baseStats;
  }

  takeDamage(details: AttackDetails) {
    details.armorDamage;
  }

  abstract takeArmorDamage();

  isAlive(): boolean {
    return this.currentStats.health > 0;
  }

  abstract updateStats(): void;
  abstract render(): void;
}

export { Creature };
