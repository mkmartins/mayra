import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

const Splash = () => {
    return(
        <View style={{backgroundColor:'white', flex: 1}}>
            <Image source={require('./logo.png')} style={{width: 320, height: 300, marginTop: 100, marginBottom: 15, alignSelf: 'center'}} />
        </View>
    )
}

export default Splash