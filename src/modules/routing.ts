import Router from './router'
// import Page404 from '../pages/404/index'
import Page500 from '../pages/500/index'
import Registration from '../pages/register/index'
import Login from '../pages/login/index'
import Profile from '../pages/profile/index'
import Chats from '../pages/chats/index'

console.log('main router', state)
const router = new Router(state)

/* router.default(Page404) */
router.use('/', Login)
router.use('/sign-up', Registration)
router.use('/settings', Profile)
router.use('/messenger', Chats)
router.use('/500', Page500)

router.start()

export default router
