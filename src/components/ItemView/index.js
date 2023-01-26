import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {styles} from './style'

export default function ItemView({data}) {

    const {descricao,  status} = data.tarefa
    const {id} = data

    return(
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text>{descricao}</Text>
            <Text>{status}</Text>
        </View>
    )
}