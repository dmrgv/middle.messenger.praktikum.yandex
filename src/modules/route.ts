import isEqual from '../utils/equal'
import Block from './block'
import prepareTemplate from './prepare-template'

type Nullable<T> = T | null

class Route {
  _pathname: string

  _blockClass: typeof Block

  _block: Nullable<Block>

  _props: object

  constructor(pathname: string, view: typeof Block, props = {}) {
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
      this._block = new this._blockClass()
      prepareTemplate(this._block)
      return
    }

    this._block.show()
  }
}

export default Route
