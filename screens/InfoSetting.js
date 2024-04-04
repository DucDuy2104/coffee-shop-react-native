import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import InfoSettingStyle from '../styles/InfoSettingStyle'
import SignStyle from '../styles/SignStyle'
import { AppContext } from '../global/AppContext'
import AxiosInstance from '../helpers/AxiosInstace'

const InfoSetting = ({ navigation }) => {
  const {curUser}  = useContext(AppContext)
  const [isHide, setIsHide] = useState(true)
  const [name, setName] =useState('')
  const [pass, setPass] =useState('')

  const onBackPress = () => {
    navigation.goBack()
  }

  const onChange = async () => {
    if(name != '' && pass != '' && pass == '123') {
      try {
        const response = await AxiosInstance().post('/users/update-profile', {
          email: curUser.email,
          pass: "123", 
          name: name
        })
        if(response.status == true) {
          Alert.alert('Thông báo', 'Chỉnh sửa thành công!')
        }
      } catch (error) {
        
      }
    } else {
      Alert.alert('Thông báo', 'vui lòng nhập đúng thông tin!')
    }
  }
  return (
    <SafeAreaView style={[InfoSettingStyle.container]}>
      <TouchableOpacity onPress={onBackPress}>
        <Image style={InfoSettingStyle.menuBtn} source={require('../assets/img/backbtn.png')} />
      </TouchableOpacity>
      <Text style={InfoSettingStyle.txtPayment}>Setting</Text>

      <View style={{ alignItems: 'center' }}>
        <Image style={InfoSettingStyle.infoImg} source={require('../assets/img/infoimg.jpg')} />
        {/* name */}
        <TextInput onChangeText={txt => setName(txt)} style={[SignStyle.input, { marginTop: 70 }]}
          placeholder="Name"
          placeholderTextColor={'#828282'}></TextInput>

        {/* email
        <TextInput style={[SignStyle.input, { marginTop: 10 }]}
          placeholder="Email Addreess"
          placeholderTextColor={'#828282'}></TextInput> */}

        {/* Password */}
        <TextInput onChangeText={(txt=> setPass(txt))} style={[SignStyle.input, { marginTop: 10 }]}
          placeholder="Password"
          placeholderTextColor={'#828282'}
          secureTextEntry={isHide}></TextInput>

        <TouchableOpacity onPress={() => { setIsHide(!isHide) }}>
          <Image source={isHide ? require('../assets/img/eyeshow.png') : require('../assets/img/hide.png')}
            style={SignStyle.btnShowPass} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onChange} style={SignStyle.btnSignIn}>
          <Text style={SignStyle.textSignIn}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default InfoSetting