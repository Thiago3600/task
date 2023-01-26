import React, {useState, useEffect} from "react";
import {View, 
        Text, 
        SafeAreaView,
        TouchableOpacity,
        FlatList
    } from 'react-native'

import {getDataCollection, addDocument} from '../../database'
import {database} from '../../config/firebaseConfig'
import {collection, query, doc, getDocs, onSnapshot, deleteDoc, addDoc, updateDoc} from 'firebase/firestore'
import {FontAwesome} from '@expo/vector-icons'
import ItemView from '../../components/ItemView'
import {styles} from './style'




const nameCollection = "task"

export default function Task({navigation}){
    
    const [task, setTask] = useState()

    useEffect(() =>{
        onSnapshot(collection(database, nameCollection), () => {
            getDataCollection(nameCollection)
                .then((tasks) => setTask(tasks))
                .catch((error) => console.log(error))
        });
    }, [])

    return(
        <View style={styles.container}>
            
            <FlatList 
                keyExtractor={({id}) => id}
                data={task}
                renderItem={({item}) => <ItemView data={item} />}
            />
            <TouchableOpacity style={styles.buttonNewTask}
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate("NewTask")
                }}    
                // onPress={() => navigation.navigate("NewTask")}    
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}