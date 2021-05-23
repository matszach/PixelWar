class PlayerUnitSpawner {

    constructor(viewRef) {
        this.viewRef = viewRef;
    }

    spawn(x, y, key) {
        const template = UNIT_TEMPLATES.find('key', key);
        const unit = new PlayerUnitEntity(x, y, this.viewRef, template);
        this.viewRef.playerUnitsContainer.add(unit);
        return unit;
    }

}