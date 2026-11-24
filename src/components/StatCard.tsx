import { View , Text} from "react-native"

type StatCardProps = 
{
    title: string
    value: string
    subtitle: string
    subtitleColor?: "green"|"red"|"gray"
}
const subtitleColors = 
{
    green: "text-green-600",
    red: "text-red-600",
    gray: "text-gray-600"
}

export default function StatCard({title,value,subtitle,subtitleColor="green"}: StatCardProps){
    return(
    <View className="bg-white p-4 mt-5 rounded-2xl">
        <Text className="text-gray-500 text-sm">{title}</Text>
        <Text className="text-3xl font-bold">{value}</Text>
        <Text className={subtitleColors[subtitleColor]}>{subtitle}</Text>
    </View>
    );
}