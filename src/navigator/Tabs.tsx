import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { colors } from '../theme/appTheme';
import { StackNavigator } from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            shifting={true}
            barStyle={{
                backgroundColor: colors.primary,
            }}
            // activeColor='white'
            screenOptions={({ route }) => {

                // console.log(route.name)

                return ({
                    tabBarIcon: ({ color, focused }) => {

                        let iconName: string;

                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = "add-circle-outline";
                                break;
                            case 'Tab2Screen':
                                iconName = "analytics-outline";
                                break;
                            case 'StackNavigator':
                                iconName = "file-tray-stacked-outline";
                                break;
                            default:
                                iconName = '';
                                break;
                        }

                        return (
                            <Text>
                                <Icon name={iconName} size={22} color='white' />;
                            </Text>
                        )

                    }
                })
            }}
        >
            <BottomTabAndroid.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab1',
                }}
                component={Tab1Screen} />

            <BottomTabAndroid.Screen
                name="Tab2Screen"
                options={{
                    title: 'Tab2'
                }}
                component={TopTabNavigator} />

            <BottomTabAndroid.Screen
                name="StackNavigator"
                options={{
                    title: 'Stack'
                }}
                component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    )
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => {

                // console.log(route.name)

                return ({
                    headerShown: false,
                    tabBarActiveTintColor: colors.primary,
                    tabBarStyle: {
                        borderTopColor: colors.primary,
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                    tabBarIcon: ({ color, focused, size }) => {

                        let iconName: string;

                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = "add-circle-outline";
                                break;
                            case 'Tab2Screen':
                                iconName = "analytics-outline";
                                break;
                            case 'StackNavigator':
                                iconName = "file-tray-stacked-outline";
                                break;
                            default:
                                iconName = '';
                                break;
                        }

                        return (
                            <Text>
                                <Icon name={iconName} size={size} color={color} />;
                            </Text>
                        )

                    }
                })
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
        >

            <BottomTabIOS.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab1',
                    // tabBarIcon: (props) => {
                    //     return (
                    //         <Text style={{
                    //             color: props.color,
                    //         }}>
                    //             T1
                    //         </Text>)
                    // },
                }}
                component={Tab1Screen} />

            <BottomTabIOS.Screen
                name="Tab2Screen"
                options={{
                    title: 'Tab2'
                }}
                component={TopTabNavigator} />

            <BottomTabIOS.Screen
                name="StackNavigator"
                options={{
                    title: 'Stack'
                }}
                component={StackNavigator} />

        </BottomTabIOS.Navigator>
    );
}