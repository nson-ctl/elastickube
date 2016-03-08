import { EventEmitter } from 'events';

class AbstractStore extends EventEmitter {

    constructor(session) {
        super();

        if (this.constructor.name === 'AbstractStore') {
            throw new Error('This class cannot be instantiated.');
        }

        session.addSessionDestroyListener(this.destroy);
    }

    destroy() {
    }
}

export default AbstractStore;
