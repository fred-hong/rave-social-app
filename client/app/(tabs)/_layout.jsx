import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

// import { icons } from "../../constants"


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View>
            <Image source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-bold' : 'font-regular'} text-xs`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "black",
                // tabBarInactiveTintColor: "blue",
                tabBarStyle: {
                    backgroundColor: "white",
                    borderTopWidth: 1,
                    // borderTopColor: "red",
                    height: 84,
                }
            }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: 'false',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                // icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        title: 'Explore',
                        headerShown: 'false',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                // icon={icons.home}
                                color={color}
                                name="Explore"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: 'false',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                // icon={icons.home}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs >
        </>
    )
}

export default TabsLayout