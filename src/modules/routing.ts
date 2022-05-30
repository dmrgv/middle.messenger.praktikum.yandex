import router from './router'
// import Page404 from '../pages/404/index'
import Page500 from '../pages/500'
import Register from '../pages/register'
import Login from '../pages/login'
import Profile from '../pages/profile'
import Chats from '../pages/chats'

/* router.default(Page404) */
router.use('/sign-in', Login)
router.use('/sign-up', Register)
router.use('/settings', Profile)
router.use('/messenger', Chats)
router.use('/500', Page500)

router.start()
if (document.location.pathname === '/') {
  router.go('/sign-in')
}

export default router
