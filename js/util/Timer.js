class Timer {

    static group(...names) {
        const group = {};
        for(let n of names) {
            group[n] = new Timer();
        }
        return group;
    }

    constructor() {
        this.i = 0;
    }

    tick() {
        this.i++;
        return this;
    }

    every(n) {
        this.tick();
        if(this.i % n === 0) {
            return true;
        }
        return false;
    }

}