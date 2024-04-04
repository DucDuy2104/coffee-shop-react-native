import { StyleSheet } from "react-native";

const CartAddItemStyle = StyleSheet.create({
    container: {
        borderRadius: 23,
        padding: 10,
        marginBottom: 20
    },
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        borderRadius: 23
    },
    header: {
        flexDirection:'row'
    },
    img : {
        width: 107,
        height: 107,
        objectFit: 'cover',
        borderRadius: 14,
    },
    headerContent: {
        paddingLeft: 25,

    },
    txtName :{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#fff'
    },
    txtTopping :{
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 20,
        color: '#aeaeae'
    },
    txtAbout: {
        padding: 15,
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 20,
        color: '#aeaeae',
        backgroundColor: 'black',
        borderRadius: 14,
        marginTop: 10,
    },
    addItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    txtSize: {
        backgroundColor: '#000',
        borderRadius: 14,
        color: '#fff',
        textAlign: 'center',
        alignSelf:'baseline',
        width: 70,
        paddingVertical: 5
    },
    txtPrice: {
        fontSize: 16,
        fontWeight: '600', 
        lineHeight: 20,
        alignSelf:'baseline',
        color: '#D17842',
        alignSelf: 'baseline',
        paddingTop:5,
        paddingTop: 10
    },
    input: {
        width: 50,
        height: 30,
        backgroundColor: 'black',
        borderRadius: 7,
        justifyContent:'center',
        borderWidth: 1,
        borderColor: '#D17842',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600', 
        lineHeight: 20,
        textAlign: 'center',
        paddingVertical: 5,
        marginHorizontal: 20
    },
    maBtn: {
        backgroundColor: '#D17842',
        alignSelf:'baseline',
        borderRadius: 7,
        width: 29,
        height:29,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default CartAddItemStyle