import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'

export default function CarItem(props) {
    return (
        <View style={styles.carContainer}>

            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}></ImageBackground>

            <View style={styles.titles}>
                <Text style={styles.title}>Model S </Text>
                <Text style={styles.subTitle}>Starting at 60,000$</Text>
            </View>

            <StyledButton type="primary" content={"Custom order"} onPress={()=>{console.warn('custom order was pressed')}} ></StyledButton>
            <StyledButton type="secondary" content={"Existing inventory"} onPress={()=>{console.warn('exsisting model')}} ></StyledButton>
      </View>
    )
}
