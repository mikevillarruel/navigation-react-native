// import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Page1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={{
                        marginLeft: 15,
                    }}
                >
                    <Icon name="menu-outline" size={30} color={colors.primary} />
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>

            <Text style={styles.title}>Page1Screen</Text>

            <Button
                title="Go to page 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />

        </View>
    )
}
