class GameplayView extends Mx.View {

    onCreate() {
        this.backgroundColor = '#222222';
        this.ssl = new AppSpriteSheetLoader();
        this.rng = new Mx.Rng();
        this.battleLayer = this.registerLayer(0.5, 0.5, 1600, 900);
        this.mapContainer = this.battleLayer.container();
        this.floorParticles = this.battleLayer.container();
        this.enemyUnitsContainer = this.battleLayer.container();
        this.playerUnitsContainer = this.battleLayer.container();
        this.enemyProjectilesContainer = this.battleLayer.container();
        this.playerProjectilesContainer = this.battleLayer.container();
        this.airParticles = this.battleLayer.container();
        this.unit1 = this.playerUnitsContainer.add2(new PlayerUnitEntity(0, 0, this, UNIT_TEMPLATES.find('key', 'P_PEASANT')));
        this.unit1.enableInteraction();
        this.unit2 = this.playerUnitsContainer.add2(new PlayerUnitEntity(0, 0, this, UNIT_TEMPLATES.find('key', 'P_SWORDSMAN')));
        this.unit2.enableInteraction();
        this.unit3 = this.playerUnitsContainer.add2(new PlayerUnitEntity(0, 0, this, UNIT_TEMPLATES.find('key', 'P_WIZARD')));
        this.unit3.enableInteraction();
    }

    onUpdate() {

    }

}