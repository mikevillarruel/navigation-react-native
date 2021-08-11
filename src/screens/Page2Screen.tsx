import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../theme/appTheme';

export const Page2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: "Hi World",
            headerBackTitle: '' // Empty string set button back's name in the device's language (Back, Atras, etc),
        })
    }, []);

    return (
        <View style={styles.globalMargin}>

            <Text style={styles.title}>Page2Screen</Text>

            <Button
                title="Go to page 3"
                onPress={() => navigator.navigate('Page3Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
            }}>
                Navigate with arguments
            </Text>

            <View style={{
                flexDirection: 'row',
            }}>

                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={() => navigator.navigate('PersonScreen', {
                        id: 1,
                        name: "Pedro",
                    })}
                >
                    <Icon name="man-outline" size={30} color='white' />
                    <Text style={styles.textBigButton}>
                        Pedro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={() => navigator.navigate('PersonScreen', {
                        id: 2,
                        name: "María",
                    })}
                >
                    <Icon name="woman-outline" size={30} color='white' />
                    <Text style={styles.textBigButton}>
                        María
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
