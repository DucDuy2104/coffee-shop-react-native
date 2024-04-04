import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, Alert } from 'react-native'
import React from 'react'
import PayStyle from '../styles/PaymentStyle'
import SettingItem from '../components/SettingItem'



const SettingScreen = ({navigation}) => {
    function Setting(name, icon) {
        this.name = name
        this.icon = icon
    }
    const listItemSetting =[
        new Setting('History', require('../assets/img/history.png')),
        new Setting('Personal Details', require('../assets/img/personaldetail.png')),
        new Setting('Address', require('../assets/img/address.png')),
        new Setting('Payment Method', require('../assets/img/paymentmethod.png')),
        new Setting('About', require('../assets/img/aboout.png')),
        new Setting('Help', require('../assets/img/help.png')),
        new Setting('Log Out', require('../assets/img/logout.png'))
    ]

    const onBackClick = () => {
        navigation.goBack()
    }

    const itemSettingPress = (id) => {
        if(id == 1) {
            navigation.navigate('info')
        }
        if(id  == 6) {
            Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn muốn đăng xuất?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => navigation.popToTop(),
                  },
                ],
                { cancelable: false }
              );
        }
    }

    return (
        <SafeAreaView style={PayStyle.container}>
            <View style={PayStyle.toolBarContainer}>
                <TouchableOpacity onPress={onBackClick}>
                    <Image style={PayStyle.menuBtn} source={require('../assets/img/backbtn.png')} />
                </TouchableOpacity>
                <Text style={PayStyle.txtPayment}>Setting</Text>
            </View>
            {
                listItemSetting.map((item, i) => {
                    return (
                        <SettingItem onItemPress={() =>itemSettingPress(i)} settingItem={item} key={i.toString()}/>
                    )

                })
            }
        </SafeAreaView>
    )
}

export default SettingScreen