import { Tile } from "./Tile";
import { IRender } from "../view/IRender";

class TileMap implements IRender {
  width: number;
  height: number;
  tiles: Array<Tile>;

  constructor(width: any, height: any) {
    this.width = width;
    this.height = height;
    this.tiles = new Array<Tile>(width*height);
  }

  getTileAt(x: number, y: number): Tile {
    const tileX = x;
    const tileY = y * this.width;
    return this.tiles[tileX + tileY];
  }

  setTileAt(x: number, y: number, newTile: Tile): void {
    const tileX = x;
    const tileY = y * this.width;
    this.tiles[tileX + tileY] = newTile;
  }

  render(): void {
    this.tiles.forEach(tile => {
      tile.render();
    });
  }

}

export { TileMap }