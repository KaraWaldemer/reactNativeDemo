import { Button, Text, View } from 'react-native'
import { ToastExample } from '../../android_modules/nativeModules'
import React from 'react'


const randomFunction = () => {
  ToastExample.show('Awesome', ToastExample.SHORT)
}

const NativeContainer = () => (
  <View>
    <Text>Native Code</Text>
    <Button
      onPress={randomFunction()}
      title="Android Button"
    />
  </View>
)

export default NativeContainer
