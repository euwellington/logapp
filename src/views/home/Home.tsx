import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles/Home.style';
import { Entypo, MaterialCommunityIcons, Ionicons, AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../stores';
import { ActivityIndicator, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Acionamento } from '../../interface/Acionamento.Interface';
import Slider from '@react-native-community/slider';

const Home = () => {

  const { acionamentoStore, authStore } = useContext(storeContext);
  const [loadinf, setLoading] = useState(false);

    const toggleSwitch = (acionamento: Acionamento) => 
    {
        acionamentoStore.definirSelecionado(acionamento.id);
        // acionar(acionamento)
    };
    const toggleSlide = (acionamento: Acionamento, value?: number) => 
    {
        acionamentoStore.definirSelecionado(acionamento.id);
        console.log(value)
    };

  const renderAcionamento = (acionamento: Acionamento, key: number) =>
    {
        return( 
          <View key={key}>
              <View style={styles.boxDevices}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <SimpleLineIcons name="power" size={20} color="#4951EC" style={{alignSelf: 'center'}} />
                      {/* <Switch
                                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                                  thumbColor={acionamentoStore.selecionado?.id === acionamento.id ? '#4951EC' : '#f4f3f4'}
                                  onValueChange={() => toggleSwitch(acionamento)}
                                  value={acionamento.estado ? true : false}
                                  // disabled={loading}
                              /> */}

                      {
                          acionamento.tipo === 0
                          ?
                          (
                              acionamentoStore.selecionado?.id === acionamento.id 
                              ?
                                  <ActivityIndicator size="small" color="#4951EC"/>
                              :
                              <Switch
                                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                                  thumbColor={acionamentoStore.selecionado?.id === acionamento.id ? '#4951EC' : '#f4f3f4'}
                                  onValueChange={() => toggleSwitch(acionamento)}
                                  value={acionamento.estado ? true : false}
                                  // disabled={loading}
                              />
                          )
                          :
                          (
                            <Slider
                              style={{height: 40, width: '80%'}}
                              minimumValue={0}
                              maximumValue={1}
                              minimumTrackTintColor="#FFFFFF"
                              maximumTrackTintColor="#000000"
                            />
                          )
                      }
                  </View>
                  <View >
                      <Text>{acionamento.nome}</Text>
                      <Text >Liga e desliga o H20 do aquário</Text>
                  </View>
              </View>
          </View>
        )
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Text style={styles.address}>R. São Francisco, 2017</Text>
            <Entypo name="chevron-small-down" size={24} color="rgba(0,0,0,0.7)" />
          </TouchableOpacity>
          <Text style={styles.user}>Olá, {authStore.usuario?.nome.split(' ')[1]}!</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <TouchableOpacity style={styles.cardIcon}>
            <MaterialCommunityIcons name="information-variant" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardIcon}>
            <Ionicons name="ios-chatbubbles-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.devicesContent}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="router-wireless-settings" size={33} color="black" style={{ alignSelf: 'center', marginRight: 10 }} />
          <View>
            <Text style={styles.devicesTitle}>{acionamentoStore.acionamentos.length} Ativo</Text>
            <Text style={styles.devicesSubTitle}>Devices</Text>
          </View>
        </View>
        <View style={{ height: '100%', width: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginLeft: 20, marginRight: 20 }} /> 
        <Text style={styles.devicesInfo}>Dispositivos conectados</Text>
      </View>

      <ScrollView style={{ marginTop: 20 }}>
            <StatusBar style={'light'} backgroundColor='#4951EC' />
            
            <View style={styles.listContentDevices}>
                {
                    acionamentoStore.acionamentos.map((acionamento, i) => renderAcionamento(acionamento, i))
                }
            </View>
            <View style={styles.contentInfo}>
                <Image source={{ uri: 'https://media.amazonwebservices.com/blog/2015/deck_compute_chip_300_1.png' }} style={styles.img} />
                <View style={{alignSelf:'center'}}>
                    <Text style={styles.contentInfoTitle}>
                        Tem alguma sugestão ou reclamação, você pode fazer o seu comentário clicando logo no botão abaixo 
                    </Text>
                    <TouchableOpacity style={styles.btnComment}>
                        <Text style={styles.titleBtnComment}>Deixar um comentário</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    </View>
  )
};

export default observer(Home);