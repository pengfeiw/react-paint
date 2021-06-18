/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 自定义事件系统
 */
type CalllbackType = (...args: any[]) => any;
class DispatcherEvent {
    public eventName: string;
    public callbacks: CalllbackType[];
    constructor(eventName: string) {
        this.eventName = eventName;
        this.callbacks = [];
    }

    registerCallback(callback: CalllbackType) {
        this.callbacks.push(callback);
    }

    unregisterCallback(callback: CalllbackType) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }

    fire(data?: any) {
        const callbacks = this.callbacks.slice(0);
        callbacks.forEach((callback) => {
            callback(data);
        });
    }
}

class Dispatcher {
    public events: {[props: string]: DispatcherEvent};
    public constructor() {
        this.events = {};
    }

    /**
     * dispatcher a event
     * @param eventName the name of event
     * @param data the data pass to the callback(event listener)
     */
    public dispatch(eventName: string, data?: any) {
        const event = this.events[eventName];
        if (event) {
            event.fire(data);
        }
    }

    /**
     * listen event
     */
    public on(eventName: string, callback: CalllbackType) {
        let event = this.events[eventName];
        if (!event) {
            event = new DispatcherEvent(eventName);
            this.events[eventName] = event;
        }
        event.registerCallback(callback);
    }

    /**
     * unlisten event
     */
    public off(eventName: string, callback: CalllbackType) {
        const event = this.events[eventName];
        if (event && event.callbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.callbacks.length === 0) {
                delete this.events[eventName];
            }
        }
    }
}

// export {DispatcherEvent, Dispatcher};
export default Dispatcher;
