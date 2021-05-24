class UnitEntity extends BaseEntity {

    onCreate() {
        super.onCreate();
        const {hp, def, power, speed, value, atkRange, atkCooldown, atkFrames} = this.args.template;
        this.hp = new Mx.Misc.Resource(hp);
        this.attr = Mx.Misc.Attribute.group(['def', def, 0], ['power', power, 0], ['speed', speed, 0]);
        this.value = value;
        this.attack = new Attack(this, atkRange, atkCooldown, atkFrames);
        this.allyTeamContainer = null; 
        this.opposedTeamContainer = null; 
        this.target = null;
        this.timers = Timer.group('spaceout', 'targetLookup');
    }

    onUpdate() {
        this.spaceout();
        this.findTarget();
        this.faceTarget();
        this.handleAttack();
    }

    dead() {
        return this.hp.depleted();
    }

    spaceout() {
        if(this.timers.spaceout.every(3)) {
            for(let u of [...this.allyTeamContainer.children, ...this.opposedTeamContainer.children]) {
                if(u !== this && Mx.Geo.Collision.circleVsCircle(u.hitcircle, this.hitcircle)) {
                    const phi = this.directionTo(u.x, u.y);
                    this.movePolar(-phi, 2);
                    u.movePolar(phi, 2);
                }
            }
        }
    }

    findTarget() {
        // TODO targeting stragety based on attack type (?)
        if(this.timers.spaceout.every(120) || this.target === null || this.target.dead()) {
            this.target = null;
            let dist = Infinity;
            for(let u of this.opposedTeamContainer.children) {
                const newDist = Mx.Geo.Distance.simple(u.x, u.y, this.x, this.y)
                if(dist > newDist) {
                    this.target = u;
                    dist = newDist;
                }
            }
        }
    }

    faceTarget() {
        if(this.target) {
            const phi = this.directionTo(this.target.x, this.target.y);
            const dphi = this.sprite.rotation - phi;
            this.sprite.rotation -= dphi * 0.1;
        }
    }

    handleAttack() {
        this.attack.tick();
        if(this.attack.ready()) {
            this.attack.fire();
        }
    }

    setDraggable(state = true) {
        if(state) {
            this.enableDrag();
            this.on('over', () => this.sprite.setShadow('red', 5));
            this.on('out', () => this.sprite.setShadow('black', 5));
        } else {
            this.clearListeners();
        }
        return this;
    }

}