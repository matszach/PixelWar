class EnemyUnitEntity extends UnitEntity {

    onCreate() {
        super.onCreate();
        this.allyTeamContainer = this.args.viewRef.enemyUnitsContainer; 
        this.opposedTeamContainer = this.args.viewRef.playerUnitsContainer; 
    }

}