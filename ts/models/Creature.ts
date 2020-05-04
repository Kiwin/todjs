import { IRender } from "../view/IRender";
import { CreatureStatCollection } from "./CreatureStatCollection";
import { Weapon } from "./Weapon";
import { ITakeDamage } from "./ITakeDamage";
import { AttackDetail } from "./AttackDetail";

abstract class Creature implements IRender, ITakeDamage {
  
  baseStats: CreatureStatCollection;
  currentStats: CreatureStatCollection;
  weapon : Weapon;

  public constructor(baseStats: CreatureStatCollection) {
    this.baseStats = baseStats;
    this.currentStats = baseStats;
  }

  public abstract takeDamage(attackDetails: AttackDetail[]): AttackDetail[];

  public isAlive(): boolean {
    return this.currentStats.health > 0;
  }

  public abstract updateStats(): void;
  public abstract render(): void;
}

export { Creature };
