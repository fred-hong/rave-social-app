import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray font-pmedium">{title}</Text>

            <View className="border-2 border-black w-full h-16 px-4 bg-white/40 rounded-2xl focus:border-blue-500 flex flex-row items-center">
                <TextInput className="flex-1 text-white font-pbold text-base" value={value} placeholder={placeholder} placeHolderColor="#7b7b8b" onChangeText={handleChangeText} secureTextEntry={title === 'Password' && !showPassword} />
                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {/* <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        /> */}
                        <Text>Touch</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})