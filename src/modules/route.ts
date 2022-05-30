import isEqual from '../utils/equal'
import Block from './block'
import prepareTemplate from './prepare-template'

type Nullable<T> = T | null
type Constructable<T = any> = new (...args: any[]) => T
type PropsRoute = {
  rootQuery: string
  canActivate?: () => Promise<boolean>
  redirectTo?: string
  withId?: boolean
}

class Route {
  _pathname: string

  _blockClass: Constructable<Block>

  _block: Nullable<Block>

  _props: PropsRoute

  constructor(pathname: string, view: Function, props = {}) {
    this._pathname = pathname
    this._blockClass = view as Constructable<Block>
    this._block = null
    this._props = props as PropsRoute
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.getContent().remove()
    }
  }

  match(pathname: string) {
    if (this._props.withId) {
      return pathname.includes(this._pathname)
    }

    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass('div', this._props)
      prepareTemplate(this._block, document.querySelector(this._props.rootQuery) as HTMLElement)
      return
    }

    this._block.show()
  }
}

export default Route
