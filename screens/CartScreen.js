import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import CartStyle from '../styles/CartStyle';
import OrderStyle from '../styles/OrderStyle';
import CartAddItem from '../components/CartAddItem';
import { AppContext } from '../global/AppContext';
import AxiosInstance from '../helpers/AxiosInstace';

const CartScreen = ({navigation}) => {
    const { listCart, updateItemBuy, curUser } = useContext(AppContext);
    const [listSp, setListSp] = useState([]);
    const [total, setTotal] = useState(0);
    const [listProBuy, setListProBuy] = useState([])

    const getSpById = async (id) => {
        try {
            const response = await AxiosInstance().get('/products/' + id);
            console.log(id, response.product);
            return response.product;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    };

    const updateTotal = (id, type, price, num) => {

        setTotal((prevTotal) => {
            udpateSize(id, num, price)
            return type == 'add'? prevTotal + price : prevTotal - price});
    };

    useEffect(() => {
        const fetchData = async () => {
            let newTotal = 0;
            const newListSp = [];

            for (const id of listCart) {
                const product = await getSpById(id);
                if (product) {
                    newListSp.push(product);
                    newTotal += product.price;
                }
            }

            setListSp(pre => {

                setTotal(newTotal);
                return newListSp
            });
        };

        fetchData();
    }, [listCart]);

    const renderItem = ({ item }) => {
        return (
            <CartAddItem
                updateTotal={updateTotal}
                CartItemC={item}
            />
        );
    };

    useEffect(() => {
        if (listCart.length === listSp.length) {
            const subListBuy = listSp.map(e => {
                return {
                    product_id: e._id,
                    product_name: e.name,
                    product_image: e.image, // Sửa lỗi chính tả ở đây
                    product_quantity: 1
                };
            });
    
            console.log('subListBuy: ', subListBuy);
            setListProBuy(subListBuy);
        }
    }, [listCart, listSp]);

     

    const udpateSize = (id, num, price) => {
        console.log('onUpdate: loading.....!')
        setListProBuy((preList)=> {
            preList.forEach(e=> {
                if(e.product_id ==  id) {
                    e.product_quantity = num
                    e.product_price = price
                }
            })

            return preList
        })
        listProBuy.forEach((e, i)=> {
            console.log(`quantity ${i}: `, e.quantities)
        })
    }

    const onBtnBuyClick = () => {
        console.log('onBtnBuyClick...')
        navigation.navigate('payment')
        updateItemBuy({
            email: curUser.email,
            carts: listProBuy
        })
    }


    return (
        listCart.length === listSp.length ? (
            <View style={CartStyle.container}>
                <View style={OrderStyle.toolBar}>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/menu_btn.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '600', lineHeight: 36, color: 'white' }}>Cart</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/info_btn.png')} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={listSp}
                    keyExtractor={(item) => item._id}
                    renderItem={renderItem}
                />
                <View style={CartStyle.footer}>
                    <View style={{ alignSelf: 'baseline' }}>
                        <Text style={{ fontSize: 12, fontWeight: 500, lineHeight: 20, color: '#aeaeae' }}>
                            Total Price
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#D17842' }}>
                            ${' '}
                            <Text style={{ color: '#fff' }}>{total}</Text>
                        </Text>
                    </View>
                    <TouchableOpacity onPress={onBtnBuyClick} style={CartStyle.btnBuy}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', lineHeight: 20 }}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <Text>Loading...</Text>
        )
    );
};

export default CartScreen;
