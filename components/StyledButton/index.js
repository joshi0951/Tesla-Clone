import React from 'react'
import styles from './style'
import { View, Text, Pressable } from 'react-native'

export default function StyledButton(props) {

    const {type, content, onPress}= props;

    const backgroundColor= type=='primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor= type=='primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor:backgroundColor}]} 
            onPress={()=>onPress()}
            >
                <Text style={[styles.title, {color: textColor}]}> {content} </Text>
            </Pressable>
        </View>
    )
}
