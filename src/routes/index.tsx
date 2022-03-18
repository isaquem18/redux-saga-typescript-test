import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { BottomTabs } from './bottom-tabs';

export function Routes() {

  const {
    Navigator,
    Screen
  } = createStackNavigator();



  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="login" component={Login} />
      <Screen name="bottom-tabs" component={BottomTabs} options={{
        gestureEnabled: false
      }}/>
    </Navigator>
  )
}