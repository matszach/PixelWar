class Attack {

    constructor(unitRef, range, cooldown, steps) {
        this.unitRef = unitRef;
        this.range = range;
        this.steps = steps;
        this.maxCooldown = cooldown;
        this.currCooldown = 0;        
        this.step1 = steps[0];
        this.step2 = steps[0] + steps[1];
        this.step3 = steps[0] + steps[1] + steps[2];
        this.currDuration = 0;
        this.fired = false;
        this.finished = false;
    }

    ready() {
        return this.currCooldown < 0;
    }

    tick() {
        this.currCooldown -= 1;
        if(this.fired) {
            this.currDuration += 1;
            if(this.currDuration > this.step3) {
                this.unitRef.sprite.frameX = 0;
                this.fired = false;
                this.currDuration = 0;
            } else if(this.currDuration > this.step2) {
                this.unitRef.sprite.frameX = 3;
                if(!this.finished) {
                    this.onAnimationFinished();
                    this.finished = true;
                }
            } else if(this.currDuration > this.step1) {
                this.unitRef.sprite.frameX = 2;
            }
        }
    }

    fire() {
        this.fired = true;
        this.finished = false;
        this.currCooldown = this.maxCooldown;
        this.unitRef.sprite.frameX = 1;
    }

    onAnimationFinished() {
        // TODO
        if(!!this.unitRef.target) {
            this.unitRef.target.hp.take(5);
            if(this.unitRef.target.dead()) {
                this.unitRef.target.destroy();
            }
        }
    }

}