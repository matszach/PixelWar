class PlayerUnitEntity extends UnitEntity {

    enableInteraction() {
        this.enableDrag();
        this.on('over', () => this.sprite.setShadow('red', 5));
        this.on('out', () => this.sprite.setShadow('black', 5));
        return this;
    }

    disableInteraction() {
        this.clearListeners();
        return this;
    }

    onUpdate() {
        const pUnits = this.args.viewRef.playerUnitsContainer.children;
        const eUnits = this.args.viewRef.enemyUnitsContainer.children;
        for(let p of pUnits) {
            if(p !== this) {
                if(Mx.Geo.Collision.circleVsCircle(p.hitcircle, this.hitcircle)) {
                    const {x, y} = p.getCenter();
                    const phi = this.directionTo(x, y);
                    this.movePolar(-phi, 1);
                    p.movePolar(phi, 1);
                }
            }
        }
        this.attack.tick();
        if(this.attack.ready()) {
            this.attack.fire();
        }
    }

}