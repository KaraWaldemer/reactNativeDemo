import { StackNavigator, TabNavigator } from 'react-navigation'
import LandingContainer from '../container/Landing.container'
import PictureContainer from '../container/Picture.container'
import QuestionContainer from '../container/Question.container'
import React from 'react'

export const DemoTabNavigator = TabNavigator({
  Question: {
    screen: QuestionContainer,
    navigationOption: {
      title: 'Question',
    },
  },
  Picture: {
    screen: PictureContainer,
    navigationOptions: {
      title: 'Picture',
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
  }
})
