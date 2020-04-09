var Creature = /** @class */ (function () {
    function Creature(baseStats) {
        this.baseStats = baseStats;
        this.currentStats = baseStats;
    }
    Creature.prototype.takeDamage = function (details) {
        details.armorDamage;
    };
    Creature.prototype.isAlive = function () {
        return this.currentStats.health > 0;
    };
    return Creature;
}());
export { Creature };
