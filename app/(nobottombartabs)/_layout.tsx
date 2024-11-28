import Style from '@/components/Style';
import { Link, Slot } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
export default function RootLayout() {
    return (
        <>
            <View>
                <View style={{ padding: 20 }}>
                    <Link href="/Explore">
                        <Text>
                            back
                        </Text>
                    </Link>
                </View>
            </View>
            <Slot />
        </>
    )
}
