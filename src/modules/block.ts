import * as Handlebars from 'handlebars'
import isEqual from '../utils/equal'
import EventBus from './event-bus'

export default class Block {
  static EVENTS = {
    FLOW_CWM: 'flow:component-will-mount',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
  }

  _element: HTMLElement

  _meta: {
    template: string
    props: Record<string, any>
  }

  _children: HTMLElement[]

  props: { [key: string]: any }

  state: { [key: string]: any }

  eventBus: () => EventBus

  constructor(template: string, props = {}, state = {}) {
    const eventBus = new EventBus()

    this._meta = { template, props }
    this.props = this._makePropsProxy(props)
    this.state = this._makePropsProxy(state, this.state)
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

  _makePropsProxy(props: { [key: string]: any }, propsVar: { [key: string]: any } = this.props) {
    return new Proxy(props, {
      get(target, prop: string) {
        if (prop.startsWith('_')) {
          throw new Error('No access rights')
        }

        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target, prop: string, value) => {
        if (prop.startsWith('_')) {
          throw new Error('No access rights')
        }
        // eslint-disable-next-line no-param-reassign
        target[prop] = value

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, propsVar, target)
        return true
      },
      deleteProperty() {
        throw new Error('No access rights')
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

  _componentDidUpdate(oldProps: { [key: string]: any }, newProps: { [key: string]: any }) {
    const response = this.componentDidUpdate(oldProps, newProps)

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  componentDidUpdate(oldProps: { [key: string]: any }, newProps: { [key: string]: any }) {
    return !isEqual(oldProps, newProps)
  }

  _componentWillUnmount() {
    this.componentWillUnmount()
  }

  componentWillUnmount() {}

  hide() {
    this.eventBus().emit(Block.EVENTS.FLOW_CWU)
  }
}
