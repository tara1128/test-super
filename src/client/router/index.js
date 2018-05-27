import _routeCheck from 'sp-isomorphic-utils/route-check'
import Root from '@components/root'
import Home from '@containers/home'

export const routeCheck = (nextState) => _routeCheck(nextState, __SERVER__ || __SPA__)

export default {
    path: '',
    component: Root,
    name: 'root',

    indexRoute: {
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, Home.default)
            }, 'home')
        }
    },

    childRoutes: [
      {
        
      },
    
    
    ]

}
