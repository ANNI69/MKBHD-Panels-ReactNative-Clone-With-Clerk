import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import styles from '@/components/Style';
import ResponsiveCarousel from '../ExploreTabs/Corousel';

export default function Explore() {
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <>
            <ResponsiveCarousel />
            <GestureHandlerRootView style={{
                position:
                    'absolute', top: 0, left: 0, right: 0, bottom: 0
            }}>
                <BottomSheet
                    snapPoints={
                        ['100%', '75%',]
                    }
                    enableOverDrag={false}
                    backgroundStyle={styles.GreyView}
                    ref={bottomSheetRef}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <Button title="Awesome 🎉" onPress={() => bottomSheetRef.current?.expand()} />
                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        </>
    );
};


