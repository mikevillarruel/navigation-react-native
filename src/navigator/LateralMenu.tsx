import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                // drawerPosition: 'right',
                drawerType: width >= 768 ? 'permanent' : 'front',
                headerShown: false,
            }}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* Avatar */}

            <View style={styles.avatarContainer}>
                <Icon name="person-circle-outline" size={150} color={colors.primary} />
            </View>

            {/* Menu */}

            <View style={styles.menuContainer}>

                {/* <TouchableOpacity 
                    style={styles.buttonMenu}
                    onPress={()=>navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.textMenu}>Navigation</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.textMenu}>
                        <Icon name="map-outline" size={20} color='black' />  Navigation
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.textMenu}>
                        <Icon name="settings-outline" size={20} color='black' />  Settings
                    </Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    )
}