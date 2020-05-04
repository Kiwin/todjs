import { DamageType } from "./DamageType";


export class AttackDetail {
  damageAmount: number;
  damageType: DamageType;

  public constructor(damageAmount: number, damageType: DamageType = DamageType.Health) {
    this.damageAmount = damageAmount;
    this.damageType = damageType;
  }
}
