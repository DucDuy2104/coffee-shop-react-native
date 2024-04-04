import React, { useContext, useState } from "react";
import { Image, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import SignStyle from "../styles/SignStyle";
import Styles from "../styles/Styles";
import { AppContext } from "../global/AppContext";
import AxiosInstance from "../helpers/AxiosInstace";

const SignInScreen = ({ navigation }) => {
    

    const [isHide, setIsHide] = useState(true)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isCompletePass, setCompletePass] = useState(true)
    const [isCompleteEmail, setCompleteEmail] = useState(true)
    const [warningTxt, setWarningTxt] = useState('')
    const {curUser,setCurUser} = useContext(AppContext)


    const onSignInClick = () => {
        if (email) {
            setCompleteEmail(true)
        } else {
            setCompleteEmail(false)
        }
        if (pass) {
            setCompletePass(true)
        } else {
            setCompletePass(false)
        }

        if (!email && !pass) {
            setWarningTxt('Please enter your email and password')
            return
        }

        if (!email) {
            setWarningTxt('Please enter your email')
            return
        }

        if (!pass) {
            setWarningTxt('Please enter your password')
            return
        }


        onSignIn(email, pass)
    }

    const onSignIn = async (email, pass) => {
        console.log('onPressLogin')
        // xử lý gọi api
        const body = {
            email: email,
            password: pass
        }
        const result = await AxiosInstance()
            .post('/users/login', body);
        console.log(result);
        if (result.status == true) {
            navigation.navigate('main')
            console.log('curIdUser', result.user)
            setCurUser(result.user)
        } else {
            Alert.alert('Thông báo', 'Đăng nhập không thành công');
        }
    }

    const onRegisterClick = () => {
        navigation.navigate('register')
    }


    const onFocusHandler = () => {
        setCompleteEmail(true)
        setCompletePass(true)
        setWarningTxt('')
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={SignStyle.container}>
                <Image style={SignStyle.logo} source={require('../assets/img/coffee_logo.png')} />
                <Text style={SignStyle.text}>Wellcome To Lungo !!</Text>
                <Text style={SignStyle.subText}>Login to Continue</Text>
                <TextInput onFocus={() => onFocusHandler(1)} style={[SignStyle.input, { borderColor: isCompleteEmail ? '#252A32' : 'red' }]}
                    onChangeText={text => setEmail(text)}
                    placeholder="Email Addreess"
                    placeholderTextColor={'#828282'}></TextInput>

                <TextInput onFocus={() => onFocusHandler(2)} style={[SignStyle.input, { marginTop: 10, borderColor: isCompletePass ? '#252A32' : 'red' }]}
                    placeholder="Password"
                    onChangeText={text => setPass(text)}
                    placeholderTextColor={'#828282'}
                    secureTextEntry={isHide}></TextInput>



                <TouchableOpacity onPress={() => { setIsHide(!isHide) }}>
                    <Image source={isHide ? require('../assets/img/eyeshow.png') : require('../assets/img/hide.png')}
                        style={SignStyle.btnShowPass} />
                </TouchableOpacity>

                <Text style={{ display: warningTxt ? 'flex' : 'none', color: 'red', }}>{warningTxt}</Text>
                <TouchableOpacity onPress={onSignInClick} style={SignStyle.btnSignIn}>
                    <Text style={SignStyle.textSignIn}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={SignStyle.btnSignInGG}>
                    <Image source={require('../assets/img/ggicon.png')} style={SignStyle.icongg} />
                    <Text style={[SignStyle.textSignIn, { color: 'black' }]}>Sign In With Google</Text>
                </TouchableOpacity>
                <View style={Styles.flexContainer}>
                    <Text style={[SignStyle.subText, { marginTop: 30 }]}>Don't have account? Cick </Text>
                    <TouchableOpacity onPress={onRegisterClick}>
                        <Text style={[SignStyle.subText, { color: '#D17842', marginTop: 30 }]}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.flexContainer}>
                    <Text style={[SignStyle.subText, { marginTop: 30 }]}>Forget Password? Click </Text>
                    <TouchableOpacity>
                        <Text style={[SignStyle.subText, { color: '#D17842', marginTop: 30 }]}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}



export default SignInScreen
