export class AttackDetails {
  healthDamage: number;
  armorDamage: number;
  auraDamage: number;
  constructor(healthDamage: number, armorDamage: number, auraDamage: number) {
    this.healthDamage = healthDamage;
    this.armorDamage = armorDamage;
    this.auraDamage = auraDamage;
  }
}
