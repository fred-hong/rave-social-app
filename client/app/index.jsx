import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Redirect, router, Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import AppIntroSlider from 'react-native-app-intro-slider';


// import { icons } from '../constants'

const slides = [
    {
        key: 1,
        text: 'Page 1',
    },
    {
        key: 2,
        text: 'Page 2',
    },
    {
        key: 3,
        text: 'Page 3',
    }
]

export default function App() {

    _renderItem = ({ item }) => {
        return (
            <SafeAreaView className="bg-primary h-full">
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                    <View className="w-full justify-center items-center min-h h-[85vh] px-4">
                        {/* <Image source={images.logo}
                                className="w-[130px] h-[84px]"
                                resizeMode="contain"
                            /> */}
                        <View>
                            <Text className="text-5xl text-white text-center font-pbold">Ravify</Text>
                        </View>
                        <Text className="text-sm font-plight mt-20 text-white text-center">{item.text}<Text className="font-bold">onboarding</Text></Text>

                        <CustomButton title="Get Started" handlePress={() => router.push('/sign-in ')} containerStyles="w-2/3 absolute bottom-0" />
                    </View>
                </ScrollView>
                {/* Able to see ios status bar */}
                <StatusBar backgroundColor='#161622' style="light"
                />
            </SafeAreaView>
        );
    }

    return <AppIntroSlider renderItem={this._renderItem} data={slides} />;

}

