import _routeCheck from 'sp-isomorphic-utils/route-check'
import Root from '@components/root'

export const routeCheck = (nextState) => _routeCheck(nextState, __SERVER__ || __SPA__)

export default {
    path: '',
    component: Root,
    name: 'root',

    indexRoute: {
        path: '',
        name: 'home',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('../containers/home').default)
            }, 'home')
        }
    },

    childRoutes: [
      {
        path: 'list',
        name: 'list',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            if (routeCheck(nextState)) cb(null, require('../containers/list').default) 
          }, 'list')
        }
      }
    
    
    ]

}
