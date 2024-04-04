import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import PayStyle from '../styles/PaymentStyle'
import LinearGradient from 'react-native-linear-gradient'
import WalletPay from '../components/WalletPay'
import BeanStyle from '../styles/BeanDetail'
import { AppContext } from '../global/AppContext'
import AxiosInstance from '../helpers/AxiosInstace'

const PaymentScreen = ({navigation}) => {
  const { itemBuy } = useContext(AppContext)
  const listChoose = [true, false, false, false, false]
  const [listChooseC, setListChooseC] = useState(listChoose)


  function Wallet(name, img, price) {
    this.name = name
    this.img = img
    this.price = price?.toFixed(2)
  }

  const walletList = [
    new Wallet('Wallet', require('../assets/img/wallet.png'), 100.50),
    new Wallet('Google Pay', require('../assets/img/ggpay.png')),
    new Wallet('Apple Pay', require('../assets/img/applepay.png')),
    new Wallet('Amazon Pay', require('../assets/img/amazonpay.png'))
  ]

  const onItemClick = (id) => {
    setListChooseC((pre) => pre.map((e, i) => {
      return i == id
    }))
  }

  const getIndex = () => {
    var index;
    listChooseC.forEach((e, i) => {
      if (e) {
        index = i
      }
    })

    return index
  }

  const getNameChoose = () => {
    if (getIndex() == 0) {
      return 'Credit Cart'
    }
    return walletList[getIndex() - 1].name
  }

  const onPayClick = async () => {
    try {
      const response = await AxiosInstance().post('/carts', itemBuy)
      console.log(response.status)
    } catch (error) {
      console.error('error: ', error.message)
    }

    console.log('itemBuy: ',itemBuy)
    console.log('itemBuyEmail: ', itemBuy.email)
    console.log('itemBuyCarts: ', itemBuy.carts)
  }

  const onBackPress = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={PayStyle.container}>
      <View style={PayStyle.toolBarContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <Image style={PayStyle.menuBtn} source={require('../assets/img/backbtn.png')} />
        </TouchableOpacity>
        <Text style={PayStyle.txtPayment}>Payment</Text>
      </View>

      <TouchableOpacity onPress={() => onItemClick(0)}>
        <View style={[PayStyle.creditSection, { borderColor: listChooseC[0] ? '#D17842' : 'black' }]}>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600', marginBottom: 10 }}>Creadit Card</Text>
          <View style={PayStyle.creditCard}>
            <LinearGradient
              colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={PayStyle.gradient}
            />

            <Image style={PayStyle.creImg} source={require('../assets/img/credit.png')} />
            <Image style={PayStyle.visaImg} source={require('../assets/img/visa.png')} />
            <Text style={PayStyle.creNum}>3  3  2  5       1  5  2  5       1  6  3  6       2  6  7  3</Text>
            <View style={PayStyle.nameCard}>
              <Text style={{ fontSize: 10, color: '#AEAEAE' }}>Card Holder Name</Text>
              <Text style={{ fontSize: 16, fontSize: 16, fontWeight: '700', color: "#fff" }}>Robert Evans</Text>
            </View>
            <View style={PayStyle.dateCard}>
              <Text style={{ fontSize: 10, color: '#AEAEAE' }}>Expiry Date</Text>
              <Text style={{ fontSize: 16, fontSize: 16, fontWeight: '700', color: "#fff", textAlign: 'right' }}>02/30</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <WalletPay onItemPress={() => onItemClick(1)} isChoose={listChooseC[1]} itemWallet={walletList[0]} />
      <WalletPay onItemPress={() => onItemClick(2)} isChoose={listChooseC[2]} itemWallet={walletList[1]} />
      <WalletPay onItemPress={() => onItemClick(3)} isChoose={listChooseC[3]} itemWallet={walletList[2]} />
      <WalletPay onItemPress={() => onItemClick(4)} isChoose={listChooseC[4]} itemWallet={walletList[3]} />

      <View style={BeanStyle.addToCartSection}>
        <Text style={{ color: '#AEAEAE', fontSize: 12, marginLeft: 20 }}>Price</Text>
        <View style={BeanStyle.priceSection}>
          <Text style={{ color: '#D17842', fontSize: 20, fontWeight: 'bold' }}>$</Text>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>  10.50</Text>
        </View>
          <TouchableOpacity onPress={onPayClick} style={BeanStyle.btnAddToCart}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Pay from {getNameChoose()}</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen