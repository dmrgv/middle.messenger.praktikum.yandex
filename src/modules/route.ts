import isEqual from '../utils/equal'
import Block from './block'
import prepareTemplate from './prepare-template'

type Nullable<T> = T | null
type Constructable<T = any> = new (...args: any[]) => T

class Route {
  _pathname: string

  _blockClass: Constructable<Block>

  _block: Nullable<Block>

  _props: object

  constructor(pathname: string, view: Constructable<Block>, props = {}) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
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
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass('div', this._props)
      prepareTemplate(this._block, document.getElementsByClassName('app')[0] as HTMLElement)
    }
  }
}

export default Route
