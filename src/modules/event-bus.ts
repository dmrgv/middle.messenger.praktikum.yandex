type Listeners = Record<string, Function[]>

class EventBus {
  listeners: Listeners

  constructor() {
    this.listeners = {}
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Not found event: ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback)
  }

  emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Not found event: ${event}`)
    } else {
      this.listeners[event].forEach((listener) => {
        listener(...args)
      })
    }
  }
}

export default EventBus
