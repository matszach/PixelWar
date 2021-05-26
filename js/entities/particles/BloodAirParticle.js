class BloodAirParticle extends ParticleEntity {

    constructor(x, y, viewRef) {
        super(x, y, viewRef, {
            sheet: 'blood',
            sx: viewRef.rng.int(0, 5),
            sy: viewRef.rng.int(0, 2),
            duration: viewRef.rng.float(0, 50),
        });
    }

    onDestroy() {
        const blood = new BloodFloorParticle(this.x, this.y, this.args.viewRef);
        this.args.viewRef.floorParticles.add(blood);
    }

}