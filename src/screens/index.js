import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import store from '../store';
import Initializing from './Initializing/Initializing';
import Login from './Login/Login';
import RestaurantsScreen from './RestaurantsScreen/RestaurantsScreen';
import SearchHistory from './SearchHistory/SearchHistory';
import AppMenu from './AppMenu/AppMenu';


export function initApp( screen ) {
  Navigation.setRoot({
    root: {
      stack: {
        id: screen,
        children: [
          {
            component: {
              name: screen,
            },
          },
        ],
        options: {
          popGesture: false,
          topBar: {
            visible: false,
            drawBehind: true,
          },
        },
      },
    },
  });
}

// go to page navigation
export const goToPage = (componentId, page, props) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      passProps: props,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
        },
      },
    },
  });
};

// use a view as a new root
export const setNewRoot = (componentId, screen) => {
  Navigation.setStackRoot(componentId, [
    {
      component: {
        name: screen,
        options: {
          animations: {
            setStackRoot: {
              enabled: true
            }
          },
          topBar: {
            visible: false,
            drawBehind: true,
          },
        }
      }
    }
  ]);
}

// show any component as modal
export const showModal = (page, props) => {
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: page,
          passProps: props,
          options: {
            layout: { backgroundColor: 'transparent' },
            screenBackgroundColor: 'transparent',
            modalPresentationStyle: 'overCurrentContext',
            topBar: {
              visible: false,
              animate: true,
            },
          },
        }
      }]
    }
  });
};

// hide modal
export const hideModal = componentId => Navigation.dismissModal(componentId);
// go back in navigation
export const goBack = componentId => Navigation.pop(componentId);

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponentWithRedux( 'initializing', () => Initializing, Provider, store );
  Navigation.registerComponentWithRedux( 'login', () => Login, Provider, store );
  Navigation.registerComponentWithRedux( 'restaurantsScreen', () => RestaurantsScreen, Provider, store );
  Navigation.registerComponentWithRedux( 'searchHistory', () => SearchHistory, Provider, store );
  Navigation.registerComponentWithRedux( 'appMenu', () => AppMenu, Provider, store );
  
}
