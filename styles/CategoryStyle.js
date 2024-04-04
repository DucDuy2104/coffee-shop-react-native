import { StyleSheet } from "react-native";

const CategoryStyle = StyleSheet.create({
    container: {
        alignSelf: 'baseline',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25,
    },

    nameText: {
        fontSize: 14,
        fontWeight: '700',
        justifyContent: 'center'
    },

    selectedNode: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D17842'
    },
})

export default CategoryStyle