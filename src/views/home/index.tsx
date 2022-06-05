import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Home from './Home';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { storeContext } from '../../stores';

const Tab = createMaterialBottomTabNavigator();

const RoutesHome = () => {

  const { 
    equipamentoStore,
    authStore,
    acionamentoStore
   } = useContext(storeContext);


  useEffect(() =>
  {
    if(authStore.usuario)
    {
      Promise.all([
        equipamentoStore.definirSelecionado(authStore.usuario.equipamentoId),
        acionamentoStore.listar()
      ])
    }
  }, []);

  return (
    <Tab.Navigator 
        initialRouteName='home'
        activeColor="rgba(0,0,0,0.9)"
        inactiveColor="rgba(0,0,0,0.4)"
        barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color}  />
          ),
        }}
      />
      <Tab.Screen
        name="cameras"
        component={Home}
        options={{
          tabBarLabel: 'Cameras',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="camrecorder" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="rede"
        component={Home}
        options={{
          tabBarLabel: 'Rede',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="router-wireless" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="perfil"
        component={Home}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default observer(RoutesHome);