class ParticleEntity extends BaseEntity {


    onCreate() {
        super.onCreate();
        this.durationLeft = this.args.template.duration;
    }

    onUpdate() {
        this.durationLeft--;
        if(this.durationLeft < 0) {
            this.destroy();
        }
    }

}