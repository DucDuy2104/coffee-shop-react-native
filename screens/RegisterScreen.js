import React, { useContext, useState } from "react";
import { Image, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import SignStyle from "../styles/SignStyle";
import Styles from "../styles/Styles";
import { AppContext } from "../global/AppContext";
import AxiosInstance from "../helpers/AxiosInstace";

const RegisterScreen = ({ navigation }) => {

    const [isHide, setIsHide] = useState(true)
    const [isHideRe, setIsHideRe] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [nameComplete, setNameComplete] = useState(true)
    const [passComplete, setPassComplete] = useState(true)
    const [emailComplete, setEmailComplete] = useState(true)
    const [rePassComplete, setRePassComplete] = useState(true)
    const [warningTxt, setWarningTxt] = useState('')


    const registerUser = async (name, email, pass) => {
        try {
            console.log('onPressRegister')
            // xử lý gọi api
            const body = {
                name: name,
                email: email,
                password: pass
            }
            const result = await AxiosInstance()
                .post('/users/register', body);
            console.log(result);
            if (result.status == true) {
                navigation.navigate('signin');
            }
            else {
                Alert.alert('Thông báo', 'Đăng ký không thành công');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Thông báo', 'Đăng ký không thành công');
        }
    }


    const onRegisterClick = () => {
        var warning = ''
        if (!name) {
            setNameComplete(false)
            warning += ' Name'
        } else {
            setNameComplete(true)
        }
        if (!email) {
            setEmailComplete(false)
            warning += ' Email'
        } else {
            setEmailComplete(true)
        }

        if (!pass) {
            setPassComplete(false)
            warning += ' Pass'
        } else {
            setPassComplete(true)
        }

        if (!rePass) {
            setRePassComplete(false)
            warning += ' RePass'
        } else {
            setRePassComplete(true)
        }
        if (pass !== rePass && warning.length == 0) {
            warning = 'Pass and Repass don\'t match'
            setWarningTxt(warning)
            return
        }

        if (warning.length > 0) {
            warning = 'Please enter ' + warning
            setWarningTxt(warning)
            return
        }

        registerUser(name, email, pass)

    }

    const onFocusInput = () => {
        setPassComplete(true)
        setNameComplete(true)
        setEmailComplete(true)
        setPassComplete(true)
        setRePassComplete(true)
        setWarningTxt('')
    }

    const signInClick = () => {
        navigation.navigate('signin')
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={SignStyle.container}>
                <Image style={SignStyle.logo} source={require('../assets/img/coffee_logo.png')} />
                <Text style={SignStyle.text}>Wellcome To Lungo !!</Text>
                <Text style={SignStyle.subText}>Login to Continue</Text>

                {/* name */}
                <TextInput onFocus={onFocusInput} style={[SignStyle.input, { borderColor: nameComplete ? '#252A32' : 'red' }]}
                    onChangeText={txt => setName(txt)}
                    placeholder="Name"
                    placeholderTextColor={'#828282'}></TextInput>

                {/* email */}
                <TextInput onFocus={onFocusInput} style={[SignStyle.input, { marginTop: 10, borderColor: emailComplete ? '#252A32' : 'red' }]}
                    onChangeText={txt => setEmail(txt)}
                    placeholder="Email Addreess"
                    placeholderTextColor={'#828282'}></TextInput>

                {/* Password */}
                <TextInput onFocus={onFocusInput} style={[SignStyle.input, { marginTop: 10, borderColor: passComplete ? '#252A32' : 'red' }]}
                    onChangeText={txt => setPass(txt)}
                    placeholder="Password"
                    placeholderTextColor={'#828282'}
                    secureTextEntry={isHide}></TextInput>

                <TouchableOpacity onPress={() => { setIsHide(!isHide) }}>
                    <Image source={isHide ? require('../assets/img/eyeshow.png') : require('../assets/img/hide.png')}
                        style={[SignStyle.btnShowPass]} />
                </TouchableOpacity>

                {/* RePass */}
                <TextInput onFocus={onFocusInput} style={[SignStyle.input, { marginTop: -10, borderColor: rePassComplete ? '#252A32' : 'red' }]}
                    onChangeText={txt => setRePass(txt)}
                    placeholder="Re-type password"
                    placeholderTextColor={'#828282'}
                    secureTextEntry={isHideRe}></TextInput>

                <TouchableOpacity onPress={() => { setIsHideRe(!isHideRe) }}>
                    <Image source={isHideRe ? require('../assets/img/eyeshow.png') : require('../assets/img/hide.png')}
                        style={SignStyle.btnShowPass} />
                </TouchableOpacity>
                <Text style={{ display: warningTxt ? 'flex' : 'none', color: 'red', }}>{warningTxt}</Text>
                <TouchableOpacity onPress={onRegisterClick} style={SignStyle.btnSignIn}>
                    <Text style={SignStyle.textSignIn}>Register</Text>
                </TouchableOpacity>

                <View style={Styles.flexContainer}>
                    <Text style={[SignStyle.subText, { marginTop: 30 }]}>You have account? </Text>
                    <TouchableOpacity onPress={signInClick}>
                        <Text style={[SignStyle.subText, { color: '#D17842', marginTop: 30 }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


export default RegisterScreen
