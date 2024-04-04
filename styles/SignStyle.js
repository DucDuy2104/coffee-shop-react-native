import { StyleSheet } from "react-native";

const SignStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    subText: {
        marginTop:20,
        color: '#828282',
        fontSize: 12,
        fontWeight: 'bold'
    },
    input: {
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#252A32",
        width: '90%',
        color: '#fff',
        marginTop: 30,
    },
    btnShowPass: {
        position: 'relative',
        bottom: 35,
        right: -130
    },
    textSignIn: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    btnSignIn: {
        backgroundColor: '#D17842',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 20,
        marginTop:10
    },
    icongg: {
        width: 12,
        height: 12,
        position: 'relative',
        right: 60
    },
    btnSignInGG: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 20,
        marginTop:20
    }
})

export default SignStyle