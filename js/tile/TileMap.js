var TileMap = /** @class */ (function () {
    function TileMap(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = new Array(width * height);
    }
    TileMap.prototype.getTileAt = function (x, y) {
        var tileX = x;
        var tileY = y * this.width;
        return this.tiles[tileX + tileY];
    };
    TileMap.prototype.setTileAt = function (x, y, newTile) {
        var tileX = x;
        var tileY = y * this.width;
        this.tiles[tileX + tileY] = newTile;
    };
    TileMap.prototype.render = function () {
        this.tiles.forEach(function (tile) {
            tile.render();
        });
    };
    return TileMap;
}());
export { TileMap };
