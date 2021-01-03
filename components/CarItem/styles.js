import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    carContainer:{
        height: '100%',
        width: '100%'
      },
      titles:{
        width: '100%',
        marginTop: '25%',
        alignItems: 'center'
      },
      title:{
        fontSize: 40,
        fontWeight: '500'
      },
      subTitle:{
        fontSize: 16,
        color: '#5c5e62'
      },
      subTitleCTA:{
        textDecorationLine: 'underline',
        color: '#5c5e62'
      },
      image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer:{
        bottom: 50,
        width: '100%',
        position: 'absolute'
      },
});

export default styles;