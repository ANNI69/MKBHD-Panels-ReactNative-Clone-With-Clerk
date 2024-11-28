import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import styles from '@/components/Style';
import Corousel from '../ExploreTabs/Corousel';

export default function Explore() {
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <>
            <Corousel />
            <GestureHandlerRootView style={{position: 
                'absolute', top: 0, left: 0, right: 0, bottom: 0
            }}>
                <BottomSheet
                    snapPoints={
                        ['100%', '75%',]
                    }
                    enableOverDrag={true}
                    backgroundStyle={styles.GreyView}
                    ref={bottomSheetRef}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
                            onPress={() => bottomSheetRef.current?.expand()}
                        >Awesome 🎉</Text>

                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        </>
    );
};


