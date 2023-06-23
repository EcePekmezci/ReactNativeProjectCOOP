import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import HomeScreen from './screens/HomeScreen'
import Category from './screens/Category'
import ProductDetails from './screens/ProductDetails'
import CategoryDetails from './screens/CategoryDetails'
import AddCategory from './screens/AddCategory'

import SettingsScreen from './screens/SettingScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
function CategoryStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
    </Stack.Navigator>
  );
}
function AddCategoryStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="AddCategory" component={AddCategory} />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'list'
                : 'list-outline';
            } else if (route.name === 'Category') {
              iconName = focused ? 'information' : 'information-outline';
            }
            else if (route.name === "AddCategory"){
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen options={{
          tabBarLabel: 'Home',
        }}
          name="Home" component={ProductStack} />
        <Tab.Screen options={{
          tabBarLabel: 'Category',
        }}
          name="Category" component={CategoryStack} />
        <Tab.Screen options={{
          tabBarLabel: 'Add Category',
        }}
          name="AddCategory" component={AddCategoryStack} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App;