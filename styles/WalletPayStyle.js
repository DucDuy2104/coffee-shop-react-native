import { StyleSheet } from "react-native";

const WalletPayStyle = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginBottom: 10,
        padding: 15,
        flexDirection: 'row',
        display:'flex'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        borderRadius: 30
    },
    img: {
        height: 20,
        width: 25
    }
})

export default WalletPayStyle