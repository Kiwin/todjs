import { Renderer } from "./view/Renderer";

class Game {
  renderer: Renderer;
  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }
}

export { Game };
