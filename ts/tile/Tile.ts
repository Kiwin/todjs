import { IRender } from "../view/IRender";

abstract class Tile implements IRender {
  x: number;
  y: number;

  abstract render(): void;
}

export { Tile };
