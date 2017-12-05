import { StackNavigator, TabNavigator } from 'react-navigation'
import HardwareContainer from '../container/Hardware.container'
import LandingContainer from '../container/Landing.container'
import QuestionContainer from '../container/Question.container'

export const DemoTabNavigator = TabNavigator({
  Question: {
    screen: QuestionContainer,
    navigationOption: {
      title: 'Question',
    },
  },
  Hardware: {
    screen: HardwareContainer,
    navigationOptions: {
      title: 'Hardware',
    },
  },
})

export const DemoStackNavigator = StackNavigator({
  Landing: {
    screen: LandingContainer,
    navigationOptions: {
      title: 'Landing',
    },
  },
  Demo: {
    screen: DemoTabNavigator,
    navigationOptions: {
      title: 'Demo Actions',
    },
  },
})
