import { Button, Text, View } from 'react-native'
import React from 'react'
import RNCalendarEvents from 'react-native-calendar-events'


const NativeContainer = () => (
  <View>
    <Text>Native Code</Text>
    <Button
      accessibilityLabel="Learn more about this purple button"
      color="#841584"
      onPress={() => {
        console.log(RNCalendarEvents)
        RNCalendarEvents.authorizeEventStore()
          .then(() => {
            RNCalendarEvents.saveEvent('Demo Event', {
              location: 'location',
              notes: 'notes',
              startDate: '2017-12-18T19:26:00.000Z',
              endDate: '2017-12-19T19:26:00.000Z'
            })
            .then(id => {
              console.log('I work')
            })
            .catch(error => {
              console.log('i failed', error)
            });
          })
      }}
      title="Add a calendar event"
    />
  </View>

)


export default NativeContainer
