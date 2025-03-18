import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    const iconSize = 24;
    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e'
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e'
                }
            }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={iconSize} />
                ),
            }} />
            <Tabs.Screen name="bookmarks" options={{
                title: 'Bookmarks',
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} color={color} size={iconSize} />
                ),
            }} />
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={iconSize} />
                ),
            }} />
        </Tabs>
    );
}