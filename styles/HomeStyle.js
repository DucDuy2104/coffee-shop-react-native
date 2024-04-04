import { StyleSheet } from "react-native";



const HomeStyle = StyleSheet.create({
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
    header: {
        color: '#fff',
        marginLeft: 25,
        fontSize: 35,
        width: 250,
        fontWeight: '600'
    },
    searchInput: {
        height: 45,
        paddingRight: 20,
        paddingLeft: 45,
        backgroundColor: '#141921',
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 30,
        color: 'white'
    },
    imgSearch: {
        width: 20,
        height: 20,
        objectFit: 'contain',
        position: 'relative',
        left: 30,
        bottom: 32,
    },
    coffeeBeanTx: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 25,
        marginTop: 30
    }

})

export default HomeStyle