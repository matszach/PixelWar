class GameplayView extends Mx.View {

    onCreate() {
        this.backgroundColor = '#335533';
        this.ssl = new AppSpriteSheetLoader();
        this.rng = new Mx.Rng();
        this.spawner = new Spawner(this);

        this.battleLayer = this.registerLayer(0.5, 0.5, 1600, 900);
        this.mapContainer = this.battleLayer.container();
        this.floorParticles = this.battleLayer.container();
        this.enemyUnitsContainer = this.battleLayer.container();
        this.playerUnitsContainer = this.battleLayer.container();
        this.enemyProjectilesContainer = this.battleLayer.container();
        this.playerProjectilesContainer = this.battleLayer.container();
        this.airParticles = this.battleLayer.container();

        this.arenaBounds = this.mapContainer.add2(new Mx.Geo.Rectangle(-750, -400, 1500, 800, undefined, 'red', 2))

        for(let i = 0; i < 3; i++) {
            this.spawner.spawnPlayerUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'P_PEASANT');
            this.spawner.spawnPlayerUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'P_SWORDSMAN');
            this.spawner.spawnPlayerUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'P_WIZARD');
            this.spawner.spawnEnemyUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'E_GRUNT');
            this.spawner.spawnEnemyUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'E_GRUNT');
            this.spawner.spawnEnemyUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'E_SKELETON'); 
            this.spawner.spawnEnemyUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'E_SKELETON'); 
            this.spawner.spawnEnemyUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'E_SKELETON'); 
            this.spawner.spawnEnemyUnit(this.rng.float(-400, 400), this.rng.float(-400, 400), 'E_SKELETON'); 
        }

        this.setUnitDragEnabled(true);
    
    }

    setUnitDragEnabled(state = true) {
        for(let u of this.playerUnitsContainer.children) {
            u.setDraggable(state);
        }
    }
    

    onUpdate() {
        if(this.input.isDown('Space')) {
            this.battleLayer.pause();
        } else {
            this.battleLayer.unpause();
        }

    }

}