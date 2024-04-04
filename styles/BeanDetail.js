import { StyleSheet } from "react-native";

const BeanStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0F14"
    },
    abovePart: {
        height: 500,
        backgroundColor: 'pink',
        overflow: 'hidden'
    },
    imgBg: {
        width: '100%'
    },
    infoPart: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 25
    },
    infoBg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.6,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    nameTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400'
    },
    fromTxt: {
        color: '#AEAEAE',
        fontSize: 14
    },
    partRating: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'baseline'
    },
    beanLabel: {
        backgroundColor: '#141921',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        alignSelf: 'baseline',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 25,
        right: 25
    },
    toppingTxt: {
        paddingVertical: 10,
        backgroundColor: '#141921',
        alignSelf: 'baseline',
        paddingHorizontal: 20,
        borderRadius: 10,
        color: '#AEAEAE',
        position: 'absolute',
        right: 25,
        bottom: 25,
        fontSize: 10
    },
    belowPart: {
        padding: 20
    },
    sizeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 70
    },
    sizeOption: {
        textAlign: 'center',
        color: '#D17842',
        borderWidth: 2,
        borderColor: '#D17842',
        width: 100,
        paddingVertical: 10,
        borderRadius: 10
    },
    addToCartSection: {
        position: 'absolute',
        backgroundColor: '#0C0F14',
        bottom: 0,
        right: 0,
        left: 0,
        height: 70,
        padding: 10
    },
    priceSection: {
        display: 'flex',
        flexDirection: 'row',
    },
    btnAddToCart: {
        width: 240,
        paddingVertical: 15,
        backgroundColor: '#D17842',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        right: 10,
        top: 10
    }
    
})

export default BeanStyle