class Spawner {

    constructor(viewRef) {
        this.viewRef = viewRef;
    }

    spawnPlayerUnit(x, y, key) {
        const template = UNIT_TEMPLATES.find('key', key);
        const unit = new PlayerUnitEntity(x, y, this.viewRef, template);
        this.viewRef.playerUnitsContainer.add(unit);
        return unit;
    }

    spawnEnemyUnit(x, y, key) {
        const template = UNIT_TEMPLATES.find('key', key);
        const unit = new EnemyUnitEntity(x, y, this.viewRef, template);
        this.viewRef.enemyUnitsContainer.add(unit);
        return unit;
    }

}