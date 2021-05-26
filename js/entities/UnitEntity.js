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
        this.snapToArena();
        this.findTarget();
        this.handleAttack();
    }

    spaceout() {
        if(this.timers.spaceout.every(1)) {
            for(let u of [...this.allyTeamContainer.children, ...this.opposedTeamContainer.children]) {
                if(u !== this && !u.expired && Mx.Geo.Collision.circleVsCircle(u.hitcircle, this.hitcircle)) {
                    const phi = this.directionTo(u.x, u.y);
                    u.movePolar(phi, 2);
                }
            }
        }
    }

    snapToArena() {
        const arena = this.args.viewRef.arenaBounds;
        if(!arena.isPointOver(this.x, this.y)) {
            this.easeTo(0, 0, 0.02);
        }
    }

    findTarget() {
        // TODO targeting stragety based on attack type (?)
        if(this.timers.spaceout.every(300) || this.target === null || this.target.dead()) {
            this.target = null;
            let dist = Infinity;
            for(let u of this.opposedTeamContainer.children) {
                if(!u.expired) {
                    const newDist = Mx.Geo.Distance.simple(u.x, u.y, this.x, this.y)
                    if(dist > newDist) {
                        this.target = u;
                        dist = newDist;
                    }
                }
            }
        }
    }

    handleAttack() {
        this.attack.tick();
        if(this.target) {
            const phi = this.directionTo(this.target.x, this.target.y);
            let dphi = this.sprite.rotation - phi;
            this.sprite.rotation -= dphi * 0.1;
            const dist = Mx.Geo.Distance.simple(this.x, this.y, this.target.x, this.target.y);
            if(dist > this.attack.range) {
                this.movePolar(phi, this.attr.speed.value);
            } else if(this.attack.ready()) {
                this.attack.fire();
            }
        }
    }

    dead() {
        return this.hp.depleted();
    }

    setDraggable(state = true) {
        if(state) {
            this.enableDrag(); // todo write inner drag logic
            this.on('over', () => this.sprite.setShadow('red', 5));
            this.on('out', () => this.sprite.setShadow('black', 5));
        } else {
            this.clearListeners();
        }
        return this;
    }

}