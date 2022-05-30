import Route from './route'

class Router {
  routes: Route[]

  history: History

  _currentRoute: Route | null

  _rootQuery: string

  static __instance: Router

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  use(pathname: string, view: Function, props = {}) {
    const route = new Route(pathname, view, { ...props, rootQuery: this._rootQuery })
    this.routes.push(route)

    return this
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute((event?.currentTarget as HTMLFormElement)?.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname)
    if (!route) throw new Error(`Not found route: ${pathname}`)

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render()
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname))
  }
}

const router = new Router('.app')

export default router
