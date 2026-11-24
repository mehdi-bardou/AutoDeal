import {Text, View} from 'react-native'
import StatCard from '@/components/StatCard'
import MenuItem from '@/components/MenuItem'

const menuItems = [
  { id: 1, label: 'My Listings', icon: 'car-outline' },
  { id: 2, label: 'Messages', icon: 'chatbox-outline' },
  {id:3, label: 'Analytics' , icon: 'analytics-outline'},
  {id:4,label:'Subscription' , icon: 'subscriptions-outline'},
  {id:5,label:'Settings',icon:'settings-outline'}
];

export default function Dashboard(){
    return(
        <>
        <View className="flex-1 bg-[#F4F8FF]">
            <View className="bg-[#0A1B4D] px-5 pt-16 pb-6">
                <Text className="text-white text-lg font-bold">Auto Motos</Text>
                <Text className="text-blue-200 text-sm">Dealer Account</Text>
                {/* <View className='bg-white p-4 mt-5 rounded-2xl  '>
                    <Text className='text-gray-500 text-sm'>Your Listings  </Text>
                    <Text className='text-3xl font-bold'>12</Text>
                    <Text className='text-green-600'>+1 this month </Text>
                </View> */}
                <StatCard title='Your listings' value='12' subtitle='+1 this month' />
                {/* <StatCard title='Message' value='3' subtitle='2 unread' />
                <StatCard title='Message' value='3' subtitle='2 unread' subtitleColor='red' /> */}

            </View>
            <View className="bg-white mx-5 mt-5 px-4 rounded-2xl">
                {menuItems.map((item)=>(
                    <MenuItem key={item.id} label={item.label} icon={item.icon}/>
                ))}
            </View>
        </View>
        </>
    )
}