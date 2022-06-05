import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoutesHome from '../views/home';
import Login from '../views/login';

const Statck = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Statck.Navigator initialRouteName='login'>
            <Statck.Screen 
                name='login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Statck.Screen 
                name='home'
                component={RoutesHome}
                options={{
                    headerShown: false
                }}
            />
        </Statck.Navigator>
    </NavigationContainer>
  );
}

