import { StyleSheet } from "react-native";


export const colors = {
    primary: 'green',
}


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    textBigButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    menuContainer: {
        marginVertical: 30,
        alignItems: 'flex-start',
        marginLeft: 30,
    },
    buttonMenu: {
        marginVertical: 10,
    },
    textMenu: {
        fontSize: 20,
    },
    
});