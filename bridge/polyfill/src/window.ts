import { EventTarget } from './document/events/event-target';
import { krakenWindow } from './bridge';
import { WINDOW } from './document/events/event-target';
import { registerGlobalEventHandlers } from './global-event-handlers';
import { history } from './history';

const windowBuiltInEvents = ['load', 'colorschemechange'];
const windowJsOnlyEvents = ['unhandledrejection', 'error'];

// window is global object, which is created by JSEngine,
// This is an extension which add more methods to global window object.
class WindowExtension extends EventTarget {
  constructor() {
    super(WINDOW, windowBuiltInEvents, windowJsOnlyEvents);
  }

  public get colorScheme(): string {
    return krakenWindow.colorScheme;
  }

  public get devicePixelRatio() : number {
    return krakenWindow.devicePixelRatio;
  }

  public get window() {
    return this;
  }
}

export const windowExtension = new WindowExtension();
let propertyEvents = {};
windowBuiltInEvents.forEach(event => {
  let eventName = 'on' + event.toLowerCase();
  propertyEvents[eventName] = {
    get() {
      return windowExtension[eventName];
    },
    set(fn: EventListener) {
      windowExtension[eventName] = fn;
    }
  };
});

Object.defineProperties(window, {
  ...propertyEvents,
  history: {
    get() {
      return history;
    },
  },
  parent: {
    get() {
      return window;
    }
  },
  addEventListener: {
    get() {
      return windowExtension.addEventListener.bind(windowExtension);
    }
  },
  removeEventListener: {
    get() {
      return windowExtension.removeEventListener.bind(windowExtension);
    }
  },
  dispatchEvent: {
    get() {
      return windowExtension.dispatchEvent.bind(windowExtension);
    }
  },
  __clearListeners__: {
    get() { return windowExtension.__clearListeners__.bind(windowExtension); }
  },
  scroll: {
    get() { return document.body.scroll.bind(document.body); }
  },
  scrollBy: {
    get() { return document.body.scrollBy.bind(document.body); }
  },
  scrollTo: {
    get() { return document.body.scrollTo.bind(document.body); }
  },
  scrollX: {
    get() { return document.body.scrollLeft; }
  },
  scrollY: {
    get() { return document.body.scrollTop; }
  }
});

registerGlobalEventHandlers(window);
