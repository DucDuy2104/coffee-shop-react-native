import { StyleSheet } from "react-native";

const InfoSettingStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0C0F14"
    },
    infoImg: {
        width: 153,
        height: 153,
        borderRadius: 20,
        marginTop: 10
    },
    menuBtn: {
        position: 'absolute',
        top:25,
        left: 25,
    },
    infoBtn: {
        width: 30,
        height: 30
    },
    txtPayment: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        textAlign:'center',
        marginTop: 25
    },
})

export default InfoSettingStyle