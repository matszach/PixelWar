class Spawner {

    constructor(viewRef) {
        this.viewRef = viewRef;
    }

    spawnPlayerUnit(key, x = 0, y = 0) {
        const template = UNIT_TEMPLATES.find('key', key);
        const unit = new PlayerUnitEntity(x, y, this.viewRef, template);
        this.viewRef.playerUnitsContainer.add(unit);
        return unit;
    }

    spawnEnemyUnit(key, x = 0, y = 0) {
        const template = UNIT_TEMPLATES.find('key', key);
        const unit = new EnemyUnitEntity(x, y, this.viewRef, template);
        this.viewRef.enemyUnitsContainer.add(unit);
        return unit;
    }

}