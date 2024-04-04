import { StyleSheet } from "react-native";

const CartStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
        paddingHorizontal: 25,
        paddingTop: 20
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems:'center',
        paddingVertical: 10,
        
    },
    btnBuy: {
        width: 220,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#D17842',
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default CartStyle