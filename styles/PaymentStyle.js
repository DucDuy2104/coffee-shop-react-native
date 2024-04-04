import { StyleSheet } from "react-native";

const PayStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0F14"
    },
    toolBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 25
    },
    menuBtn: {
        width: 30,
        height: 30
    },
    infoBtn: {
        width: 30,
        height: 30
    },
    txtPayment: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        position: 'absolute',
        left: 150
    },
    creditSection: {
        marginHorizontal: 25,
        borderRadius: 25,
        padding: 10,
        borderColor: "#D17842",
        borderWidth: 2,
        marginBottom: 10
    },
    creditCard: {
        width: '100%',
        height: 186,
        padding: 15
    },
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        borderRadius: 23
    },
    creImg: {
        width: 20,
        height: 15
    },
    visaImg: {
        position: 'absolute',
        top: 15,
        right: 15
    },
    creNum: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        postion: 'absolute',
        top: 40
    },
    nameCard :{
        position : 'absolute',
        bottom: 15,
        left: 15
    },
    dateCard: {
        position : 'absolute',
        bottom: 15,
        right: 15
    }

})

export default PayStyle