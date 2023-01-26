import React from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './style'

export default function (props){


    return(
        <View style={styles.input}>
            <Text>{props.label}</Text>
            <TextInput 
                style={styles.field}
                placeholder={props?.placeholder||props?.label}
                {...props}
                />
        </View>
    )
}