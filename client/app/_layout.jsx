import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
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
