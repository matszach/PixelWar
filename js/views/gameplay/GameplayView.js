class GameplayView extends Mx.View {

    onCreate() {
        // SETUP
        this.backgroundColor = '#111100';
        this.ssl = new AppSpriteSheetLoader();
        this.rng = new Mx.Rng();
        this.spawner = new Spawner(this);
        // LAYERS AND CONTAINERS
        this.battleLayer = this.registerLayer(0.5, 0.5, 1600, 900);
        this.mapContainer = this.battleLayer.container();
        this.floorParticles = this.battleLayer.container();
        this.enemyUnitsContainer = this.battleLayer.container();
        this.playerUnitsContainer = this.battleLayer.container();
        this.enemyProjectilesContainer = this.battleLayer.container();
        this.playerProjectilesContainer = this.battleLayer.container();
        this.airParticles = this.battleLayer.container();
        this.guiLayer = this.registerLayer(0.5, 0.5, 1600, 900);
        // GAME ENTITIES
        this.arenaBounds = this.mapContainer.add2(new Mx.Geo.Rectangle(-750, -300, 1500, 725, undefined, 'red', 2));
        this.topMenu = this.guiLayer.add2(new TopMenu(0, -375, this));    
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
        if(this.rng.chance(0.01)) {
            this.spawner.spawnEnemyUnit('E_GRUNT', 2000 * this.rng.sign(), 2000 * this.rng.sign());
        }
        if(this.rng.chance(0.02)) {
            this.spawner.spawnEnemyUnit('E_SKELETON', 2000 * this.rng.sign(), 2000 * this.rng.sign());
        }
    }

}