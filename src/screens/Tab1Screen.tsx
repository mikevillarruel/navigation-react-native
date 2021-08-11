import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
                <Icon name="airplane-outline" size={80} color={colors.primary} />
                <Icon name="apps-outline" size={80} color={colors.primary} />
                <Icon name="archive-outline" size={80} color={colors.primary} />
                <Icon name="bar-chart-outline" size={80} color={colors.primary} />
                <Icon name="battery-charging-outline" size={80} color={colors.primary} />
                <Icon name="bicycle-outline" size={80} color={colors.primary} />
                <Icon name="contrast" size={80} color={colors.primary} />
            </Text>
        </View>
    )
}
