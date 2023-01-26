import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {setDocument} from '../../database'
import {styles} from './style'


export default function NewTask({navigation}){

    const [state, setState] = useState({
        nome: '',
        descricao: '',
    })




    return(
        <View style={styles.container}>
            <Text style={styles.text}>Adicionar uma tarefa</Text>
            <View style={styles.input}>
                <Text>Nome da Terefa:</Text>
                <TextInput 
                    style={styles.field}
                    value={state.nome}
                    onChangeText={(txt) => setState((prev) => ({...prev, nome:txt}))}
                    />
            </View>
            <View style={styles.input}>
                <Text>Descricao:</Text>
                <TextInput 
                    style={styles.field}
                    value={state.descricao}
                    onChangeText={(txt) => setState((prev) => ({...prev, descricao:txt}))}
                    />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => {
                    setDocument("task", state.nome, {tarefa: {descricao: state.descricao}})
                        .then(() => navigation.navigate("Task"))
                }} >
                <Text style={styles.save}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}