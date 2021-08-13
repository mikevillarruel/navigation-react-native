import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    // useEffect(()=>{
    //     console.log('Tab1');
    // },[]);

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10,
        }}>
            <Text style={styles.title}>
                Icons
            </Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="apps-outline" />
                <TouchableIcon iconName="archive-outline" />
                <TouchableIcon iconName="bar-chart-outline" />
                <TouchableIcon iconName="battery-charging-outline" />
                <TouchableIcon iconName="bicycle-outline" />
                <TouchableIcon iconName="contrast" />
            </Text>
        </View>
    )
}
