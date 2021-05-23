class GameplayView extends Mx.View {

    onCreate() {
        this.backgroundColor = '#222222';
        this.ssl = new AppSpriteSheetLoader();
        this.rng = new Mx.Rng();
        this.playerUnitSpawner = new PlayerUnitSpawner(this);

        this.battleLayer = this.registerLayer(0.5, 0.5, 1600, 900);
        this.mapContainer = this.battleLayer.container();
        this.floorParticles = this.battleLayer.container();
        this.enemyUnitsContainer = this.battleLayer.container();
        this.playerUnitsContainer = this.battleLayer.container();
        this.enemyProjectilesContainer = this.battleLayer.container();
        this.playerProjectilesContainer = this.battleLayer.container();
        this.airParticles = this.battleLayer.container();

        this.playerUnitSpawner.spawn(0, 0, 'P_PEASANT').enableInteraction();
        this.playerUnitSpawner.spawn(0, 0, 'P_SWORDSMAN').enableInteraction();
        this.playerUnitSpawner.spawn(0, 0, 'P_WIZARD').enableInteraction();

    }

    onUpdate() {

    }

}