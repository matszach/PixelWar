class Repository {

    constructor(cols = [], ...entries) {
        this.cols = cols;
        this.entries = [];
        for(let e of entries) {
            this.add(e);
        }
    }

    add(entry) {
        const obj = {};
        for(let i = 0; i < this.cols.length; i++) {
            obj[this.cols[i]] = entry[i];
        }
        this.entries.push(obj);
    }

    find(key, value) {
        for(let e of this.entries) {
            if(e[key] === value) {
                return e;
            }
        }
    }

} 