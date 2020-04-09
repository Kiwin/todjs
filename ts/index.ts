import { Game } from "./Game";
import { Renderer } from "./view/Renderer";

const fetch2DContext = (elementId: string): CanvasRenderingContext2D => {
  const canvas: HTMLCanvasElement = document.getElementById(
    "game"
  ) as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  return ctx;
};

window.onload = () => {
  const ctx = fetch2DContext("game");
  const renderer = new Renderer(ctx);
  requestAnimationFrame(renderer.render);
  const game = new Game(renderer);
};
