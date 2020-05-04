import { AttackDetail } from "./AttackDetail";
import { ITakeDamage } from "./ITakeDamage";

export abstract class Weapon {
  attackDetails: AttackDetail[];

  public constructor(attackDetails: AttackDetail[]){
    this.attackDetails = attackDetails;
  }

  public attack(target: ITakeDamage){
    target.takeDamage(this.attackDetails);
  }

}
