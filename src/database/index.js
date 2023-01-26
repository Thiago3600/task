import React from 'react'
import {database} from '../config/firebaseConfig'
import {collection, doc, getDocs, onSnapshot, deleteDoc, addDoc, updateDoc, setDoc} from 'firebase/firestore'


const tasksCollectionRef = (c) => collection(database, c)



export const getDataCollection = async (collection) => {
    const data = await getDocs(tasksCollectionRef(collection))
    return data.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
}

export const delDoc = async (c = '', d = '') => {
     return await deleteDoc(doc(database, c, d))    
}

export const addDocAnyId = async (c, content) => {
    console.log('adding document')
    try {
        const docRef = await addDoc(collection(database, c), content);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}



export const setDocument = async (c, id, content) => {
    // Add a new document in collection
    try {
        await setDoc(doc(database, c, id), content);        
    } catch (error) {
        console.error("Error adding document: ", error);
        return error.message;
    }
}

export const mergeDocument = async (c, id, content) => {
    try {
        const docRef = doc(database, c, id);
        await setDoc(docRef, content, { merge: true });
    } catch (error) {
        console.error("Error merge document: ", error);
        return error.message;
    }
}


export const updateDocument = async (c, id, content) => {
    try {
        const docRef = doc(database, c, id);
        await updateDoc(docRef, content)
    } catch (error) {
        console.error("Error update document: ", error);
        return error.message;
    }

}

