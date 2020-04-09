import { Game } from "./Game";
import { Renderer } from "./view/Renderer";
var fetch2DContext = function (elementId) {
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    return ctx;
};
window.onload = function () {
    var ctx = fetch2DContext("game");
    var renderer = new Renderer(ctx);
    requestAnimationFrame(renderer.render);
    var game = new Game(renderer);
};
