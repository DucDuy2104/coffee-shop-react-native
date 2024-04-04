import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    parent: {
        flex:1,
        backgroundColor: 'black',
    },
    flexContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export  default Styles;