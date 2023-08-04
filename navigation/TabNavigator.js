import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tradutor from "../screens/tradutor";
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'tradutor') {
                        iconName = focused
                            ?'chatbubbles'
                            : 'chatbubbles-outline';
                    } else if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="tradutor" component={Tradutor} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator