import { Pressable, Text } from "react-native"
import {Ionicons} from "@expo/vector-icons"
type MenuItemProps = 
{
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    onPress?: () => void ;
}

export default function MenuItem({label,icon,onPress} : MenuItemProps){
    return(
        <Pressable
            onPress={onPress}
            className="flex-row item-center py-3"
        >
            <Ionicons name={icon} size={22} color="#1456F0" />
            <Text className="flex-1 ml-3 text-base text-[#0F172A]">{label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>
    )

}