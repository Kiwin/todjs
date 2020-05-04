export class CreatureStatCollection {
  health: number;
  armor: number;
  aura: number;

  constructor(health: number, armor: number, aura: number){
    this.health = health;
    this.armor = armor;
    this.aura = aura;
  }
}
