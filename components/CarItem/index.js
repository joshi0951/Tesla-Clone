import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'

export default function CarItem(props) {

    const {name, tagline, image, taglineCTA}=props.car;
    return (
        <View style={styles.carContainer}>

            <ImageBackground source={image} style={styles.image}></ImageBackground>

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
        <View style={styles.buttonContainer}>
            <StyledButton type="primary" content={"Custom order"} onPress={()=>{console.warn('custom order was pressed')}} ></StyledButton>
            <StyledButton type="secondary" content={"Existing inventory"} onPress={()=>{console.warn('exsisting model')}} ></StyledButton>
        </View>
      </View>
    )
}
