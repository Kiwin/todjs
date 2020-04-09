import { IRender } from "./IRender";

class Renderer {
  ctx: CanvasRenderingContext2D = null;
  fps = 60;
  currentSecond = 0;
  frameCount = 0;
  frameLastSecond = 0;
  renderTarget: IRender = null;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.ctx.font = "bold 10pt sans-serif";
  }
  render() {
    if (!this.ctx)
      return;
    const second = Math.floor(Date.now() / 1000);
    if (second != this.currentSecond) {
      this.currentSecond = second;
      this.frameLastSecond = this.frameCount;
      this.frameCount = 1;
    }
    else {
      this.frameCount++;
    }
    this.renderTarget.render();
  }
}

export { Renderer }