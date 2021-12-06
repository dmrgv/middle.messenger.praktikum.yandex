import * as Handlebars from 'handlebars'
import EventBus from './event-bus'

export default class Block {
  static EVENTS = {
    FLOW_CWM: 'flow:component-will-mount',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  }

  _element: HTMLElement

  _meta: {
    template: string
    props: Record<string, any>
  }

  _children: HTMLElement[]

  props: { [key: string]: any }

  eventBus: () => EventBus

  constructor(template: string, props = {}) {
    const eventBus = new EventBus()
    this._meta = {
      template,
      props,
    }

    this.props = this._makePropsProxy(props)
    this.eventBus = () => eventBus
    this._element = document.createElement('div')
    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.FLOW_CWM)
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.FLOW_CWM, this._componentWillMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
  }

  setProps = (nextProps: { [key: string]: any }) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  compile(props: object): string {
    return Handlebars.compile(this._meta.template)(props)
  }

  _render() {
    this._element.innerHTML = this.render()

    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  render() {
    return this.compile(this.props)
  }

  _htmlToDocumentFragment(html: string) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content
  }

  getContent(): HTMLElement {
    return this._element
  }

  _makePropsProxy(props: { [key: string]: any }) {
    return new Proxy(props, {
      get(target, prop: keyof typeof target) {
        if (typeof prop === 'string' && prop.indexOf('_') === 0) {
          throw new Error('No access rights')
        }

        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target, prop, value) => {
        if (prop?.indexOf('_') === 0) {
          throw new Error('No access rights')
        }
        target[prop as keyof typeof target] = value

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      },
    })
  }

  _componentWillMount() {
    this.componentWillMount()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  componentWillMount() {}

  _componentDidMount() {
    this.componentDidMount()
  }

  componentDidMount() {}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.shouldComponentUpdate(oldProps, newProps)

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  shouldComponentUpdate(oldProps, newProps) {
    return oldProps !== newProps
  }
}
