import EventBus from '../modules/event-bus'

export default class Store extends EventBus {
  static EVENT_UPDATE: string = 'flow:store-did-update'

  static _instance: Store

  static STORE_NAME: string = 'messengerStore'

  _state: Record<string, any> = {}

  // @ts-ignore
  constructor(): Store {
    if (Store._instance) return Store._instance

    super()

    const savedState = localStorage.getItem(Store.STORE_NAME)
    this._state = savedState ? JSON.parse(savedState) ?? {} : {}

    Store._instance = this

    this.on(Store.EVENT_UPDATE, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state))
    })
  }

  getState() {
    return this._state
  }

  removeState() {
    this._state = {}
    this.emit(Store.EVENT_UPDATE)
  }

  set(id: string, value: any) {
    this._state[id] = value
    this.emit(Store.EVENT_UPDATE)
    return this
  }
}
