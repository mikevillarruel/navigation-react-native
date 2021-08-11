import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

// import { LogBox } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colors.primary,
                tabBarActiveTintColor: colors.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    shadowColor: 'transparent', //iOS
                    elevation: 0,
                },
                tabBarIcon: ({ color, focused }) => {

                    let iconName;

                    switch (route.name) {
                        case 'Chat':
                            iconName = <Icon name="chatbubble-ellipses-outline" size={22} color={color} />;
                            break;
                        case 'Contacts':
                            iconName = <Icon name="people-outline" size={22} color={color} />;
                            break;
                        case 'Albums':
                            iconName = <Icon name="albums-outline" size={22} color={color} />;
                            break;
                        default:
                            iconName = '';
                            break;
                    }

                    return (
                        <Text>
                            {iconName}
                        </Text>
                    )

                }
            })}
        >
            {/* If won't use the navigation with navigator using names is not necessary use the same name of the component*/}
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}