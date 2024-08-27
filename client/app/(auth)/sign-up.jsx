import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {
        createUser();
    }


    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4 my-7">
                    <Text className="text-5xl text-white font-pbold">Ravify</Text>
                    <Text className="text-xl text-white font-plight mt-10">Sign Up</Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({
                            ...form,
                            email: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({
                            ...form,
                            username: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="username"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({
                            ...form,
                            password: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="password"
                    />

                    <CustomButton title="Sign Up" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />

                    <View className="justify-content pt-5 flex-row gap-2">
                        <Text className="text-lg text-white font-pregular">Have an account?</Text>
                        <Link href="/sign-in" className="text-lg text-white font-pbold">Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp