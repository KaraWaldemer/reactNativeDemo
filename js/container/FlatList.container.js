import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from '../style/FlatList.style'

const FlatListContainer = () => (
  <View style={styles.flatListWindow}>
    <FlatList
      data={[
        { key: 'Devin' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
      ]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
  </View>
)

export default FlatListContainer
