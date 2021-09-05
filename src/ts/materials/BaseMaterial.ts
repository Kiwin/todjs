import { Material } from "./Material";

abstract class BaseMaterial implements Material
{
  public name: string;
  public effecience: number;
  public color: Color;

  constructor(name: string,
    effecience: number,
    color: Color)
  {
    this.name = name;
    this.effecience = effecience;
    this.color = color;
  }

}

export default { BaseMaterial }
