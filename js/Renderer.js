var Renderer = /** @class */ (function () {
    function Renderer(ctx) {
        this.ctx = null;
        this.fps = 60;
        this.currentSecond = 0;
        this.frameCount = 0;
        this.frameLastSecond = 0;
        this.renderTarget = null;
        this.ctx = ctx;
        this.ctx.font = "bold 10pt sans-serif";
    }
    Renderer.prototype.render = function () {
        if (!this.ctx)
            return;
        var second = Math.floor(Date.now() / 1000);
        if (second != this.currentSecond) {
            this.currentSecond = second;
            this.frameLastSecond = this.frameCount;
            this.frameCount = 1;
        }
        else {
            this.frameCount++;
        }
        this.renderTarget.render();
    };
    return Renderer;
}());
export { Renderer };
