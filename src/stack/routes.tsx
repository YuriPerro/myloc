import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Onboarding } from '../pages/Onboarding';
import { Screens, StackListProps } from './types';

const Stack = createNativeStackNavigator<StackListProps>();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.ONBOARDING}>
      <Stack.Screen name={Screens.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={Screens.HOME} component={Home} />
    </Stack.Navigator>
  );
};
