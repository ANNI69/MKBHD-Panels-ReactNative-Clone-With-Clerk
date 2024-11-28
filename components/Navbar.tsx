import React from 'react'
import { Button, SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { Link, Slot, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Style from './Style'



const Navbar = () => {


    return (
        <>
            <Tabs screenOptions={{ tabBarActiveTintColor: 'black', headerShown:false,  } }>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                        tabBarStyle: { backgroundColor: Style.WhiteView.backgroundColor }
                    }}

                />
                <Tabs.Screen
                    name="Explore"
                    options={{
                        title: 'Explore',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
                        tabBarStyle: { backgroundColor: Style.WhiteView.backgroundColor }
                    }}
                />
                <Tabs.Screen
                    name="Account"
                    options={{
                        title: 'Account',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                        tabBarStyle: { backgroundColor: Style.WhiteView.backgroundColor }
                    }}
                />
            </Tabs>
        </>
    )
}

export default Navbar
