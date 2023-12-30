import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentsFilter from './components/StudentsFilter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableView from './components/TableView';
import ListView from './components/ListView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Profile' component={StudentsFilter}/>
        <Stack.Screen name='Table' component={TableView} />
        <Stack.Screen name='List' component={ListView} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}