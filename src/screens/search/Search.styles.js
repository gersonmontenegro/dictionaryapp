import { StyleSheet } from 'react-native';

const headerColor = '#eaeaea';

export const searchStyles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        height: 40,
        backgroundColor: headerColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Prata-Regular'
    },
    inputContainer: {
        height: 38,
        backgroundColor: headerColor,
        marginTop: 2
    },
    inputStyle: {
        height: 50,
        backgroundColor: 'white',
        fontFamily: 'Prata-Regular',
        borderColor: 'black',
        borderWidth: 1
    }
});