import Store from './store'
import Block from '../modules/block'

type Constructable<T = any> = new (...args: any[]) => T

export default function connect(Component: Constructable<Block>, mapStateToProps: Function) {
  return class extends Component {
    constructor(tag: string, props = {}) {
      const store = new Store()

      super(tag, { ...props, ...mapStateToProps(store.getState()) })

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) })
      })
    }
  }
}
