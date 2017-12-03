import { DemoStackNavigator } from '../component/Nav.component'
import { NavigationActions } from 'react-navigation'

const initialState = DemoStackNavigator.router.getStateForAction(NavigationActions.init())

export const nav = ( state = initialState, action ) => {
  const nextState = DemoStackNavigator.router.getStateForAction(action, state)

  return nextState || state
}
