// @ts-ignore
import { v4 as makeUUID } from 'uuid'
import * as Handlebars from 'handlebars'
import isEqual from '../utils/equal'
import EventBus from './event-bus'

type TChildrenBlock<T> = {
  [P in keyof T]: T[P]
}

type TPropsAndChildren<T> = T & {
  __id: string
  settings?: { withInternalID?: boolean }
  events?: { [key: string]: (event?: Event) => void }
  children?: TChildrenBlock<any>
}

export default class Block {
  static EVENTS = {
    FLOW_CWM: 'flow:component-will-mount',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
  }

  _id: string

  _element: HTMLElement

  _meta: {
    tagName: string
    props: Record<string, any>
  }

  props: { [key: string]: any }

  children: { [key: string]: any }

  eventBus: EventBus = new EventBus()

  constructor(tagName: string, propsAndChildren = {}) {
    this._id = makeUUID()
    const { children, props } = this.getChildren(propsAndChildren)
    this._meta = { tagName, props }
    this.props = this._makePropsProxy({ ...props, __id: this._id })
    this.children = children
    this._registerEvents(this.eventBus)
    this.eventBus.emit(Block.EVENTS.FLOW_CWM)
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

  getChildren(propsAndChildren: TPropsAndChildren<any>) {
    const children = {} as TChildrenBlock<any>
    const props = {} as { [key: string]: any }

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else {
        props[key] = value
      }
    })
    return { children, props }
  }

  compile(template: string, props: object): DocumentFragment {
    const propsAndStubs: { [key: string]: any } = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${(child as Block)._id}"></div>`
    })
    const fragment = document.createElement('template') as HTMLTemplateElement
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs)

    Object.values(this.children).forEach((child: Block) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`) as Element
      stub.replaceWith(child.getContent())
    })

    return fragment.content
  }

  _render() {
    const block = this.render()
    // this.removeEvents()
    this._element.innerHTML = ''
    this._element.appendChild(block as unknown as Node)
    // this.addEvents()
  }

  render() {
    // return this.compile(this.props)
  }

  /* private addEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName])
    })
  }

  private removeEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName])
    })
  } */

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

        this.eventBus.emit(Block.EVENTS.FLOW_CDU, propsVar, target)
        return true
      },
      deleteProperty() {
        throw new Error('No access rights')
      },
    })
  }

  _componentWillMount() {
    this.componentWillMount()
    this.eventBus.emit(Block.EVENTS.FLOW_CWM)
  }

  componentWillMount() {
    this._element = document.createElement(this._meta?.tagName)
  }

  _componentDidMount() {
    Object.values(this.children).forEach((child: Block) => {
      child.componentDidMount()
    })
    this.componentDidMount()
  }

  componentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidUpdate(oldProps: TPropsAndChildren<{ [key: string]: any }>, newProps: TPropsAndChildren<{ [key: string]: any }>) {
    const response = this.componentDidUpdate(oldProps, newProps)

    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  componentDidUpdate(oldProps: { [key: string]: any }, newProps: { [key: string]: any }) {
    return !isEqual(oldProps, newProps)
  }

  _componentWillUnmount() {
    this.componentWillUnmount()
  }

  componentWillUnmount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CWU)
  }

  show() {
    this.getContent().style.display = 'block'
  }

  hide() {
    this.getContent().style.display = 'none'
  }
}
