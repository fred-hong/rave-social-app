import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Slot, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Kodchasan-Regular": require("../assets/fonts/Kodchasan-Regular.ttf"),
        "Kodchasan-Bold": require("../assets/fonts/Kodchasan-Bold.ttf"),
        "Kodchasan-Light": require("../assets/fonts/Kodchasan-Light.ttf"),
        "Kodchasan-Medium": require("../assets/fonts/Kodchasan-Medium.ttf"),
        "Kodchasan-ExtraLight": require("../assets/fonts/Kodchasan-ExtraLight.ttf"),
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;


    return (
        <Stack>
            {/* headerShown: hides stack header */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout
