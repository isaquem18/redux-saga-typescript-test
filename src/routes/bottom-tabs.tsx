import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';

//IMPORT ICONS
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import { AddProduct } from '../screens/AddProduct';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function BottomTabs() {  

  const {navigate} = useNavigation<any>();

  const {
    Navigator,
    Screen
  } = createBottomTabNavigator();

  return (
    <Navigator screenOptions={{
      headerRight: () => {
        return <Button 
          title="Sair"
          onPress={() => {
            navigate('login')
          }}
        />
      },
      headerLeft: () => (
        <>
        <Text style={{ fontSize: 10 }}>nº de items no carrinho:</Text>
        <Text style={{ fontSize: 10 }}>{4}</Text>
        </>
      ),
      headerStatusBarHeight: 50,
      tabBarBadge: '12'
    }}>
      <Screen name="home" component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome name="home" size={focused?size*1.1:size} color={color} />
        ),
        tabBarLabel: 'Início',
        tabBarActiveTintColor: 'orangered',
      }}/>
      <Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ color, size, focused } ) => (
          <Ionicons name="cart" size={focused?size*1.1:size} color={color} />
        ),
        tabBarActiveTintColor: 'orangered',
        tabBarLabel: 'Carrinho'
      }} />
      <Screen name="AddProduct" component={AddProduct} options={{
        tabBarIcon: ({ color, focused, size }) => (
          <Entypo name="add-to-list" size={focused?size*1.1:size} color={color} />
        ),
        tabBarActiveTintColor: 'orangered',
        tabBarLabel: 'Adicionar produto'
      }}/>
    </Navigator>
  )
}