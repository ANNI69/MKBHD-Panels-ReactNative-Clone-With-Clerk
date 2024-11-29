import Style from "@/components/Style";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from "../ForYouTabs/Suggested";
import Library from "../ForYouTabs/Library";
import Liked from "../ForYouTabs/Liked";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {

    const Style = {
        FONT_SIZE_SMALL: 18,
        COLOR_PRIMARY: '#FF0000',
        COLOR_WHITE: '#FFFFFF',
        COLOR_GREY: '#3b3c3e'
    }
    return (
        <SafeAreaView  style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor={Style.COLOR_GREY} />
            <Tab.Navigator screenOptions={
                {
                    tabBarLabelStyle: {
                        fontSize: Style.FONT_SIZE_SMALL,
                        fontWeight: 'bold',
                        textTransform: 'none'
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: Style.COLOR_PRIMARY
                    },
                    tabBarStyle: {
                        backgroundColor: Style.COLOR_GREY
                    },
                    tabBarActiveTintColor: Style.COLOR_WHITE,
                    tabBarInactiveTintColor: Style.COLOR_WHITE
                }
            }>

                <Tab.Screen name="Suggested" component={Suggested} />
                <Tab.Screen name="Liked" component={Liked} />
                <Tab.Screen name="Library" component={Library} />
            </Tab.Navigator>
            
        </SafeAreaView>
    )
}