import { View } from "react-native"
import Screen from "../../../components/Screen"
import Colors from "../../../utilities/Colors"
import { MainTabParamList, ProfileParamList, SettingsParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProfileTile from "../../Profile/components/ProfileTile";
import ProfileSvg from "../../../assets/svg/ProfileSvg";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import NotificationSvg from "../../../assets/svg/NotificationSvg";
import { Key } from "iconsax-react-nativejs";



type Props = CompositeScreenProps<
    NativeStackScreenProps<SettingsParamList, "Settings">,
    NativeStackScreenProps<MainTabParamList>
>;
function Settings({navigation}:Props){
    return (
        <Screen title="Settings" onBack={() => { navigation.goBack() }} onNotificationPress={() => { navigation.navigate('Notifications') }}>
            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: WINDOW_HEIGHT*0.02,paddingHorizontal:WINDOW_WIDTH*0.1, marginTop: 20 }}>
                 <ProfileTile iconContainerStyle={{width:30,height:30,backgroundColor:Colors.MainGreen,borderRadius:15}} hasArrow={true} onPress={()=>navigation.navigate('NotificationSettings')} title="Notification Settings" iconComponent={
                        <NotificationSvg color={Colors.HoneyDew} width={20} height={20}   />
                    } />
                <ProfileTile iconContainerStyle={{width:30,height:30,backgroundColor:Colors.MainGreen,borderRadius:15}} hasArrow={true} onPress={()=>navigation.navigate('PasswordSettings')} title="Password Settings" iconComponent={
                        <Key size={20}  color={Colors.HoneyDew}/>
                    } />
                 <ProfileTile iconContainerStyle={{width:30,height:30,backgroundColor:Colors.MainGreen,borderRadius:15}} hasArrow={true} onPress={()=>navigation.navigate('DeleteAccount')} title="Delete Account" iconComponent={
                        <ProfileSvg color={Colors.HoneyDew} width={20} height={20}   />
                    } />
            </View>
        </Screen>
    )
}

export default Settings