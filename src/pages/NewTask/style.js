import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        flex: 0,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 3,
        marginVertical: 3,
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: '#AAA'
    },
    field:{
        backgroundColor: '#FFF',
        flex: 0,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 3,
        paddingVertical: 3
    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 24
    },
    btn:{
        backgroundColor: '#f89',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginHorizontal: 30,
        marginVertical: 15,
        

    },
    save:{
        fontSize: 18,
    }
})