import isEqual from '../utils/equal'
import prepareTemplate from './prepare-template'

type Nullable<T> = T | null

class Route {
  _pathname: string

  _blockClass: object

  _block: Nullable<object>

  _props: object

  constructor(pathname: string, view: object, props = {}) {
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
      this._block.hide()
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
