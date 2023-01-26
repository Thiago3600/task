import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, ActivityIndicator,TouchableOpacity} from 'react-native'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import {auth, signInWithGoogle} from '../../config/firebaseConfig'
import TextoInput from '../../components/TextoInput'
import {styles} from './style'
import * as AuthSession from 'expo-auth-session'

export default function (){

    useEffect(() => {

    },[])

    

async function signInWithGoogleAsync() {
    const CLIENT_ID = '815281447380-jm7q5hnsfgdo5nej3dfj42o6lfqmau9m.apps.googleusercontent.com'
    //const REDIRECT_URI = 'https://auth.expo.io/@thiagos3600/task'
    const REDIRECT_URI = 'https://task-9733a.firebaseapp.com/__/auth/handler'
    const RESPONSE_TYPE = 'token'
    const SCOPE = encodeURI('profile email')
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    const response = await AuthSession.startAsync({authUrl})

    console.log(response)
}

    
    

    const [registerUser, setRegisterUser] = useState({
        email: '',
        senha: ''
    })
    const [loginUser, setLoginUser] = useState({
        email: '',
        senha: ''
    })


    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerUser.email, registerUser.senha)
            //console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }
    const logoff = async () => {
        await signOut(auth)
    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginUser.email, loginUser.senha)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }


    return(
        <View style={{flex: 1}}>

            <TextoInput 
                label="Email"
                keyboardType='email-address'
                value={loginUser.email}
                onChangeText={(email) => setLoginUser((prev) => ({...prev, email}))}
            />
            <TextoInput 
                label="Senha"
                
                value={loginUser.senha}
                onChangeText={(senha) => setLoginUser((prev) => ({...prev, senha}))}
            />
            <Text>Current user: {user?.email}</Text>
            <TouchableOpacity style={styles.btn} onPress={login} >
                <Text style={styles.save}>Login</Text>
            </TouchableOpacity>
            <TextoInput 
                label="Email"
                value={registerUser.email}
                onChangeText={(email) => setRegisterUser((prev) => ({...prev, email}))}
            />
            <TextoInput 
                label="Senha"
                value={registerUser.senha}
                onChangeText={(senha) => setRegisterUser((prev) => ({...prev, senha}))}
            />
            <TouchableOpacity style={styles.btn} onPress={register} >
                <Text style={styles.save}>criar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={logoff} >
                <Text style={styles.save}>logoff</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={signInWithGoogleAsync} >
                <Text style={styles.save}>google</Text>
            </TouchableOpacity>
        </View>
    )
}