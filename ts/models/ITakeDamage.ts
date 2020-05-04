import { AttackDetail } from "./AttackDetail";

export interface ITakeDamage {
  takeDamage(attackDetails: AttackDetail[]) : AttackDetail[];
}
