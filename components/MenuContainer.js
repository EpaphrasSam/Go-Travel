import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({title, imageSrc, type, setType}) => {

    const handlePress = () => {
        setType(title.toLowerCase());
    }

  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
        <View className={`w-24 h-24 shadow-sm rounded-full ${type==title.toLowerCase()? "bg-gray-200": ""}`}>
            <Image
                className="w-full h-full object-contain"
                source={imageSrc}
            />
        </View>
        <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer