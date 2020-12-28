import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

export default function CarItem(props) {
    return (
        <View style={styles.carContainer}>

            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}></ImageBackground>

            <View style={styles.titles}>
                <Text style={styles.title}>Model S </Text>
                <Text style={styles.subTitle}>Starting at 60,000$</Text>
            </View>
      </View>
    )
}
