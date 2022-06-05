import { StatusBar } from 'expo-status-bar';
import { Image, Text, ToastAndroid, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles/Login.style';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FC, useContext, useEffect, useState } from 'react';
import Loading from '../../components/loading';
import { observer } from 'mobx-react-lite';
import { useAuth } from '../../hooks/Auth.hook';
import { storeContext } from '../../stores';
import { Auth } from '../../interface/Auth.interface';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const Login: FC<NativeStackHeaderProps> = ({ navigation }) => {

  const { authStore } = useContext(storeContext);
  const { toggleNext, next, loading, verificarCpf, erro, login, erropw } = useAuth();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() =>
  {
    console.log(erropw)
  }, [erropw])

  const authenticateUser = () =>
  {
    verificarCpf(user);
  }

  const authenticate = () =>
  {
    
    if(authStore.usuario)
    {
      const auth: Auth = {
        email: authStore.usuario.email,
        senha: password
      }
      login(auth, navigation);
    }
  }

  const User = () =>
  {
    return(
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.view1}>
          <Text style={styles.title}>Tenha o controle da sua casa na palma da sua mão</Text>
        </View>
        <View style={styles.view2}>
          <Image style={styles.img} source={{ uri: 'https://crosoften.com/wp-content/uploads/2020/01/IOT-Image-1.png' }} />
        </View>
        <View style={styles.view3}>
          <Text style={styles.subtitle}>Conecte na sua conta agora mesmo!</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 1 }}>
            <TextInput placeholder='acesse agora mesmo com seu cpf' keyboardType='numeric' style={styles.input} value={user} onChangeText={(e) => setUser(e)} />
            <AntDesign name="right" size={20} color="rgba(0,0,0,0.7)" style={{alignSelf: 'center'}} onPress={authenticateUser} />
          </View>
          <Text style={styles.info}>Ao entrar você aceita com os nosso termos e serviços</Text>
        </View>
      </View>
    )
  }


  const Password = () =>
  {

    if(erropw)
    {
      ToastAndroid.show('Senha incorreto', ToastAndroid.SHORT);
    }

    return(
      <View style={styles.containerPW}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Image style={styles.logo} source={{ uri: 'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1638668589/content-items/009/812/044/Prancheta%25202-original.png?1638668589' }} />
          <Text style={styles.textLogo}>Logdream</Text>
        </View>
        <View style={styles.header2}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="arrow-left-thin" size={24} color="black" onPress={toggleNext} />
            <Text style={styles.user}>Olá, { authStore.usuario ? authStore.usuario.nome.split(' ')[0] : '' } { authStore.usuario ? authStore.usuario.nome.split(' ')[1] : '' }!</Text>
          </View>
          <Text style={styles.enter}>Entrar</Text>
          <Text style={styles.enterInfo}>Informe a sua senha para acessar a aplicação</Text>
        </View>
        <View style={{ marginTop: 20, padding: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 1 }}>
            <TextInput placeholder='Informe a sua senha e continue' style={styles.input} onChangeText={(e) => setPassword(e)} />
            <AntDesign name="right" size={20} color="rgba(0,0,0,0.7)" style={{alignSelf: 'center'}} onPress={authenticate} />
          </View>
          <Text style={styles.info}>Como é bom ter você com a gente!</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity>
            <Text style={styles.contentTitle}>Termos e serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.contentTitle}>Privacidade e cookies</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  if(loading)
  {
    return <Loading message='Carregando...' />
  }

  if(erro)
  {
    ToastAndroid.show('Usuário não encontrado', ToastAndroid.SHORT);
  }

  return (
    <>
     {
        !next
        ?
        User()
        :
        Password()
     } 
    </>
  );
}

export default observer(Login);