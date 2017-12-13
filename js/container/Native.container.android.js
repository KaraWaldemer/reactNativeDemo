import { Text, View } from 'react-native'
import React from 'react'
import ToastExample from '../../android_modules/nativeModules'


const NativeContainer = () => (
  <View>
    <Text>Native Code</Text>
  </View>
)

ToastExample.show('Awesome', ToastExample.SHORT)


export default NativeContainer
