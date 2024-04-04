import { StyleSheet } from "react-native";



const CoffeeItemSyle = StyleSheet.create({
    container:{
        padding: 15,
        borderRadius: 23,
        width: 166,
        marginRight: 20,
        marginTop: 20
    },
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        borderRadius: 23
    },
    coffeeImg: {
        width: 136,
        height: 136,
        borderRadius: 18
    },
    coffeeName: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        marginTop: 16,
        lineHeight: 20
    },
    topping: {
        fontSize: 11,
        fontWeight: '400',
        color: '#fff',
        marginTop: 7,
        lineHeight: 20
    },
    containerFlex: {
        display:'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    btnAdd: {
        backgroundColor: "#D17842",
        borderRadius: 7,
        width: 33,
        height: 33,
        position:'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rating: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 30,
        position: 'absolute',
        top: 15,
        right: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingBg: {
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 30,
        backgroundColor: '#000',
        opacity: 0.6,
        position:'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    ratingText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600'
    },
    star: {
        width: 12,
        height: 12
    }
})

export default CoffeeItemSyle