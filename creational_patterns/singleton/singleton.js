let instance = null;

class Singleton {

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    getData() {
        return Date.now();
    }
}
module.exports = Singleton;