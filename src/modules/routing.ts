import Router from './router'
// import Page404 from '../pages/404/index'
import Page500 from '../pages/500'
import Register from '../pages/register'
import Login from '../pages/login'
import Profile from '../pages/profile'
import Chats from '../pages/chats'

// window.AppStore = Store
const router = new Router('.app')

/* router.default(Page404) */
router.use('/', Login)
router.use('/sign-up', Register)
router.use('/settings', Profile)
router.use('/messenger', Chats)
router.use('/500', Page500)

router.start()

export default router
