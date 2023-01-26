import {StyleSheet} from 'react-native'

const styleRounded = (size) => {
    return {
        width: size,
        height: size,
        borderRadius: size*0.5
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    buttonNewTask:{
        position: 'absolute',
        ...styleRounded(65),
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        bottom: 30,
        backgroundColor: '#F92e6a'
    },
    iconButton:{
        color: '#FFFFFF',
        fontSize: 20, 
    }
})
