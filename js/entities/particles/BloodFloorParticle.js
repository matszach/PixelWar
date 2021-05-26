class BloodFloorParticle extends ParticleEntity {

    constructor(x, y, viewRef) {
        super(x, y, viewRef, {
            sheet: 'blood',
            sx: viewRef.rng.int(0, 5),
            sy: viewRef.rng.int(2, 4),
            duration: viewRef.rng.float(0, 1000),
        });
    }

    onUpdate() {
        super.onUpdate();
        const alpha = this.durationLeft/this.args.template.duration;
        this.sprite.setAlpha(alpha);
    }

}