class PlayerUnitEntity extends UnitEntity {

    onCreate() {
        super.onCreate();
        this.allyTeamContainer = this.args.viewRef.playerUnitsContainer; 
        this.opposedTeamContainer = this.args.viewRef.enemyUnitsContainer; 
    }

}